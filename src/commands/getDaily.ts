import { EmbedBuilder } from "@discordjs/builders";
import { Team, getDailyNotes } from "..";
import { ChatInputCommandInteraction, SlashCommandBuilder, WebhookClient } from "discord.js";
import { FieldPacket } from "mysql2";
import { pool } from "../DB";
import { hexToRgb } from "../utils/hexToRGBTuple";

const host = 'ggm.gondr.net';

export const data = new SlashCommandBuilder()
    .setName("getDaily")
    .setDescription("오늘의 일간보고서를 조회합니다.")
    .setNameLocalization("ko", "일간조회");

export async function execute(interaction: ChatInputCommandInteraction) {
    let team;
    try {
        const sql = 'SELECT * FROM `team` WHERE `guild` = ?';
        const values: any = [interaction.guildId];
        const [rows, fields]: [Team[], FieldPacket[]] = await pool.execute(sql, values);
        if(rows.length <= 0) {
            return await interaction.reply({ content: "팀을 찾을 수 없습니다! 등록을 시도해 주세요." });
        }
        team = rows[0];
    }
    catch (err) {
        console.log(err);
        return await interaction.reply({ content: `${err}` });
    }
    if(!team) {
        return await interaction.reply({ content: `테스트 시도 중 오류가 발생했습니다. ${team}` });
    }
    const now = new Date(Date.now());
    const list = await getDailyNotes(team, now);
        const webhookClient = new WebhookClient({ url: team.webhook_url });
        const embed = new EmbedBuilder()
            .setTitle(`**${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 일간보고서 (클릭 시 이동)**`)
            .setURL(`http://${host}/project/team/${team.id}`)
            .setFields(list)
            .setTimestamp()
            .setFooter({ text: `${list.length}/${team.cnt}` })
            .setColor(hexToRgb(team.color));
            
        if(list.length >= team.cnt) {
            embed.setTitle("모두가 일간보고서를 작성했어요! 👍");
        }
        await webhookClient.send({
            embeds: [embed],
        });
    return;
}
