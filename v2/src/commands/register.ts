import { EmbedBuilder } from "@discordjs/builders";
import { Channel, ChannelType, ChatInputCommandInteraction, Role, SlashCommandBuilder, TextChannel } from "discord.js";
import axios from "axios";
import { pool } from "../DB";
import { ErrorPacketParams, QueryError } from "mysql2";
import { scheduleJob } from "node-schedule";
import { client, SetBotActivity, Team } from "..";
import { hexToRgb } from "../utils/hexToRGBTuple";

const url = 'https://ggm.gondr.net/api/team/list';

export const data = new SlashCommandBuilder()
    .setName("register")
    .setDescription("매니저에 팀을 등록합니다.")
    .setNameLocalization("ko", "팀등록")
    .addStringOption(option => {
        return option.setName("team_name")
        .setDescription("팀 이름을 정확하게 기입해 주세요.")
        .setRequired(true)
        .setNameLocalization("ko", "팀명");
    })
    .addChannelOption(option => {
        return option.setName("alarm_channel")
            .setDescription("일간보고서 알림을 보낼 채널을 입력하세요.")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText)
            .setNameLocalization("ko", "채널");
    })
    .addMentionableOption(option => {
        return option.setName("mention")
            .setDescription("일간보고서 알림 시 멘션할 역할을 입력하세요.")
            .setRequired(true)
            .setNameLocalization("ko", "멘션");
    });

export async function execute(interaction: ChatInputCommandInteraction) {
    const teamName = interaction.options.getString("team_name");
    const role = interaction.options.getMentionable("mention") as Role;
    const mention = (role && role.id != interaction.guildId) ? `<@&${role.id}>` : '@everyone';
    const embed = new EmbedBuilder();
    const guild = interaction.guild;
    if(!guild) {
        return await interaction.reply({ content: "디스코드 서버에서만 사용 가능한 명령어입니다.", ephemeral: true });
    }

    const targetChannel = (interaction.options.getChannel("alarm_channel") ?? interaction.channel) as TextChannel;
    const webhook = await targetChannel.createWebhook({
        name: "일간보고서 알림"
    });

    const now = new Date(Date.now());
    const res = await axios.get(url, {
        params: {
            year: now.getFullYear()
        }
    });
    
    const teamList: Team[] = res.data.list;
    const team = teamList.find(t => t.name == teamName);
    
    if (team) {
        team.channel = targetChannel.id;
        team.mention = mention;
        embed.setTitle(`**${team.name}** 팀이 등록되었습니다.`)
            .setFields([
                { name: "팀 ID", value: `${team.id}`, inline: true },
                { name: "팀원 수", value: `${team.cnt}`, inline: true },
                { name: "팀장", value: `${team.leader.name}`, inline: true },
                { name: "알림 채널", value: `<#${targetChannel.id}>` },
                { name: "알림 멘션", value: mention }
            ])
            .setColor(hexToRgb(team.color));
    }
    else {
        embed.setTitle('해당하는 팀을 찾을 수 없습니다.')
            .setDescription(`https://ggm.gondr.net/project 에서 팀명을 정확하게 찾아 기입해 주세요.`);
        await webhook.delete();
        return await interaction.reply({ embeds: [embed] });
    }

    try {
        const sql = 'INSERT INTO `team`(`id`, `name`, `cnt`, `guild`, `webhook_url`, `color`, `channel`, `mention`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [team.id, team.name, team.cnt, guild.id, webhook.url, team.color, team.channel, team.mention];
    
        const [result, fields] = await pool.query(sql, values);
    }
    catch(err) {
        const error = err as any;
        if(error.errno === 1062) {
            // TODO: Load registered team data and render
            embed.setTitle('이미 등록되었습니다.')
                .setFields([
                    { name: "팀 ID", value: `${team.id}`, inline: true },
                    { name: "팀원 수", value: `${team.cnt}`, inline: true },
                    { name: "팀장", value: `${team.leader.name}`, inline: true },
                    { name: "알림 채널", value: `<#${targetChannel.id}>` },
                    { name: "알림 멘션", value: mention }
                ])
                .setColor(hexToRgb(team.color));
            await webhook.delete();
            return await interaction.reply({ embeds: [embed] });
        }
        embed.setTitle('팀 정보를 등록하는 중 오류가 발생했습니다.')
            .setDescription(error.message);
        await webhook.delete();
        return await interaction.reply({ embeds: [embed] });
    }

    SetBotActivity(client.user);
    return await interaction.reply({ embeds: [embed] });
}

export type User = {
    name: string
}

export default {
    data, 
    execute,
}