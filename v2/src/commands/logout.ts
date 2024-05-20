import { EmbedBuilder } from "@discordjs/builders";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { pool } from "../DB";
import { FieldPacket, RowDataPacket } from "mysql2";
import { client, SetBotActivity } from "..";

export const data = new SlashCommandBuilder()
    .setName("logout")
    .setDescription("등록된 계정을 삭제합니다.")
    .setNameLocalization("ko", "로그아웃");

export async function execute(interaction: ChatInputCommandInteraction) {
    try {
        let sql = 'SELECT `id` FROM `user` WHERE `discord_id` = ?';
        let values: any[] = [interaction.user.id];

        let [rows, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(sql, values);
        if(rows.length <= 0) {
            return await interaction.reply({ 
                content: "로그인 상태가 아닙니다.", 
                ephemeral: true 
            });
        }
        let id: number = rows[0].id;

        sql = 'DELETE FROM `user` WHERE `id` = ?';
        values = [id];

        [rows, fields] = await pool.query(sql, values);
    }
    catch(err) {
        return await interaction.reply({ 
            content: `로그아웃 중 오류가 발생했습니다. ${err}`, 
            ephemeral: true 
        });
    }

    SetBotActivity(client.user);
    return await interaction.reply({ content: "성공적으로 로그아웃 되었습니다.", ephemeral: true });
}

export default {
    data,
    execute,
}