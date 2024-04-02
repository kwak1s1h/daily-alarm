import { EmbedBuilder } from "@discordjs/builders";
import { Channel, ChannelType, ChatInputCommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";
import axios from "axios";
import { pool } from "../DB";
import { FieldPacket, RowDataPacket } from "mysql2";
import { client, SetBotActivity, Team } from "..";

const url = 'https://ggm.gondr.net/api/team/list';

export const data = new SlashCommandBuilder()
    .setName("remove")
    .setDescription("매니저에 등록된 팀을 해제합니다.")
    .setNameLocalization("ko", "팀등록해제");

export async function execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder();
    const guild = interaction.guild;
    
    if(!guild) {
        return await interaction.reply({ content: "디스코드 서버에서만 사용 가능한 명령어입니다.", ephemeral: true });
    }
    
    try {
        let sql: string = 'SELECT `id`, `guild`, `webhook_url` FROM `team` WHERE `guild` = ?';
        let values: any[] = [guild.id];
        let [result, fields]: [Team[], FieldPacket[]] = await pool.query(sql, values);
        const team = result[0];

        if(!team) {
            return await interaction.reply({ content: "등록된 팀을 찾을 수 없습니다.", ephemeral: true });
        }

        if(team.guild == guild.id) {
            sql = 'DELETE FROM `team` WHERE id = ?';
            values = [team.id]; 
            [result, fields] = await pool.query(sql, values);
        }
        let webhookId;
        const pattern = /\/webhooks\/(\d+)/;
        const matches = team.webhook_url.match(pattern);
        if (matches) {
            webhookId = matches[1];
        } else {
            embed.setTitle('팀 정보를 등록 해제하는 중 오류가 발생했습니다.')
                .setDescription(`${matches}`);
            return await interaction.reply({ embeds: [embed] });
        }

        const webhooks = await guild.fetchWebhooks();
        const webhook = webhooks.get(webhookId);
        if(webhook) {
            webhook.delete();
        }

    } catch(err) {
        console.log(err);
        embed.setTitle('팀 정보를 등록 해제하는 중 오류가 발생했습니다.')
            .setDescription(`${err}`);
        return await interaction.reply({ embeds: [embed] });
    }
    SetBotActivity(client.user);
    return await interaction.reply({ content: "팀 등록이 정상적으로 해제되었습니다!", ephemeral: true });
}