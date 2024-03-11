import { EmbedBuilder } from "@discordjs/builders";
import { Channel, ChannelType, ChatInputCommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";
import axios from "axios";
import { pool } from "../DB";
import { FieldPacket, RowDataPacket } from "mysql2";
import { Team } from "..";

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
        let sql: string = 'SELECT `guild` FROM `team` WHERE `name` = ?';
        let values: any[] = [guild.id];
        let [result, fields]: [Team[], FieldPacket[]] = await pool.query(sql, values);

        if(result[0].guild == guild.id) {
            sql = 'DELETE FROM `team` WHERE id = ?';
            values = [result[0].id]; 
            [result, fields] = await pool.query(sql, values);
        }
    } catch(err) {
        embed.setTitle('팀 정보를 등록 해제하는 중 오류가 발생했습니다.')
            .setDescription(`${err}`);
        return await interaction.reply({ embeds: [embed] });
    }

    return await interaction.reply({ content: "팀 등록이 정상적으로 해제되었습니다!", ephemeral: true });
}