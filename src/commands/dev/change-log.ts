import axios from "axios";
import { ChatInputCommandInteraction, Guild, SlashCommandBuilder } from "discord.js";
import { client } from "../..";
import { config } from "../../config";

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
            await guild.systemChannel?.send({ content: text });
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
