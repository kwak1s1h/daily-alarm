import axios from "axios";
import { ChannelType, ChatInputCommandInteraction, Guild, SlashCommandBuilder } from "discord.js";
import { client } from "../..";
import { config } from "../../config";
import { pool } from "../../DB";
import { FieldPacket, RowDataPacket } from "mysql2";

export const data = new SlashCommandBuilder()
    .setName("change_log")
    .setDescription("Send Change log to all guilds.")
    .addAttachmentOption(option => {
        return option.setName("content")
                     .setDescription("마크다운 텍스트 파일을 업로드해주세요.")
                     .setRequired(true);
    })

export async function execute(interaction: ChatInputCommandInteraction) {
    let content = interaction.options.getAttachment("content", true);
    try {
        let res = await axios.get(content.url);
        let text: string = res.data;
        text = truncateString(text, 2000);
        console.log(text.length);

        let oAuth2Guilds = await client.guilds.fetch();
        let guilds: Guild[] = [];
        oAuth2Guilds.forEach(async g => guilds.push(await g.fetch()));

        guilds.forEach(async guild => {
            if(guild.publicUpdatesChannel != null) {
                await guild.publicUpdatesChannel.send({ content: text });
            }
            else if(guild.systemChannel) {
                await guild.systemChannel.send({ content: text });
            }
            else {
                let sql = 'SELECT `channel` FROM `team` WHERE `guild` = ?';
                let values = [guild.id];
                let [rows, data]: [RowDataPacket[], FieldPacket[]] = await pool.query(sql, values);
                if(rows.length <= 0) {
                    throw new Error("팀을 찾을 수 없습니다.");
                }
                let target = await guild.channels.fetch(rows[0].channel);
                if(target && target.type == ChannelType.GuildText) {
                    target.send({ content: text });
                }
            }
        });
    }
    catch(err) {
        return await interaction.reply({ content: `${err}` });
    }
    return await interaction.reply({ content: "변경사항 전송 완료." });
}

function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength);
    }
    return str;
}
