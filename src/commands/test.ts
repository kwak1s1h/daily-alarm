import { EmbedBuilder } from "@discordjs/builders";
import { Team, getDailyNotes } from "..";
import { ChatInputCommandInteraction, SlashCommandBuilder, WebhookClient } from "discord.js";
import { FieldPacket } from "mysql2";
import { pool } from "../DB";

const host = 'ggm.gondr.net';

export const data = new SlashCommandBuilder()
    .setName("test")
    .setDescription("테스트로 지정한 날자의 일간보고서들을 출력합니다.")
    .setNameLocalization("ko", "테스트")

export async function execute(interaction: ChatInputCommandInteraction) {
    let team;
    try {
        const sql = 'SELECT * FROM `team` where `guild` = `?`';
        const values: any = [interaction.guildId];
        const [rows, fields]: [Team[], FieldPacket[]] = await pool.execute(sql, values);
        team = rows[0];
    }
    catch (err) {
        return await interaction.reply({ content: `${err}` });
    }
    const list = await getDailyNotes(team, new Date(Date.now()));
        const webhookClient = new WebhookClient({ url: team.webhook_url });
        const embed = new EmbedBuilder()
            .setTitle('**일간보고서를 작성해주세요! (클릭 시 이동)**')
            .setURL(`http://${host}/project/team/${team.id}`)
            .setFields(list)
            .setTimestamp()
            .setFooter({ text: `${list.length}/${team.cnt}` });
        webhookClient.send({
            content: '@everyone',
            embeds: [embed],
        });
    return await interaction.reply({ content: "테스트를 실행했습니다." });
}
