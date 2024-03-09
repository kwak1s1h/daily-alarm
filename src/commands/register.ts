import { EmbedBuilder } from "@discordjs/builders";
import { Channel, ChannelType, ChatInputCommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";
import axios from "axios";
import { pool } from "../DB";
import { ErrorPacketParams, QueryError } from "mysql2";
import { scheduleJob } from "node-schedule";

const url = 'https://ggm.gondr.net/api/team/list';

export const data = new SlashCommandBuilder()
    .setName("register")
    .setDescription("매니저에 팀을 등록합니다. (채널 미입력시 현재 채널을 알림 채널으로 등록합니다.)")
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
            .setRequired(false)
            .addChannelTypes(ChannelType.GuildText)
            .setNameLocalization("ko", "채널");
    });

export async function execute(interaction: ChatInputCommandInteraction) {
    const teamName = interaction.options.getString("team_name");
    const embed = new EmbedBuilder();
    const guild = interaction.guild;
    if(!guild) {
        return await interaction.reply({ content: "디스코드 서버에서만 사용 가능한 명령어입니다.", ephemeral: true });
    }

    const now = new Date(Date.now());
    const res = await axios.get(url, {
        params: {
            year: now.getFullYear()
        }
    });

    const teamList: Team[] = res.data.list;
    const team = teamList.find(t => t.name == teamName);

    if (team) {
        embed.setTitle(`**${team.name}** 팀이 등록되었습니다.`)
            .setFields([
                { name: "팀 ID", value: `${team.id}`, inline: true },
                { name: "팀원 수", value: `${team.cnt}`, inline: true },
                { name: "팀장", value: `${team.leader.name}`, inline: true },
            ]);
    }
    else {
        embed.setTitle('해당하는 팀을 찾을 수 없습니다.')
            .setDescription(`https://ggm.gondr.net/project 에서 팀명을 정확하게 찾아 기입해 주세요.`);
        return await interaction.reply({ embeds: [embed] });
    }

    const targetChannel = (interaction.options.getChannel("alarm_channel") ?? interaction.channel) as TextChannel;
    const webhook = await targetChannel.createWebhook({
        name: "일간보고서 알림"
    });

    try {
        const sql = 'INSERT INTO `team`(`id`, `name`, `cnt`, `guild`, `webhook_url`, `color`) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [team.id, team.name, team.cnt, guild.id, webhook.url, team.color];
    
        const [result, fields] = await pool.query(sql, values);
    }
    catch(err) {
        const error = err as any;
        if(error.errno === 1062) {
            embed.setTitle('이미 등록되었습니다.')
                .setFields([
                    { name: "팀 ID", value: `${team.id}`, inline: true },
                    { name: "팀원 수", value: `${team.cnt}`, inline: true },
                    { name: "팀장", value: `${team.leader.name}`, inline: true },
                ]);
            return await interaction.reply({ embeds: [embed] });
        }
        embed.setTitle('팀 정보를 등록하는 중 오류가 발생했습니다.')
            .setDescription(error.message);
        return await interaction.reply({ embeds: [embed] });
    }

    return await interaction.reply({ embeds: [embed] });
}

type Team = {
    name: string,
    id: number,
    cnt: number,
    leader: User,
    color: string
}

type User = {
    name: string
}