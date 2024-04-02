import { EmbedBuilder } from "@discordjs/builders";
import { Channel, ChannelType, ChatInputCommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";
import axios from "axios";
import { pool } from "../DB";
import { FieldPacket, RowDataPacket } from "mysql2";
import { Team } from "..";

const url = 'https://ggm.gondr.net/api/team/record/daily';

export const data = new SlashCommandBuilder()
    .setName("daily")
    .setDescription("일간보고서를 작성합니다.")
    .setNameLocalization("ko", "일간작성")
    .addStringOption(option => {
        return option.setName("content")
                     .setDescription("내용을 입력하세요.")
                     .setMaxLength(100)
                     .setNameLocalization('ko', "내용")
                     .setRequired(true);
    })

export async function execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder();
    if(!interaction.guild) {
        return await interaction.reply({
            content: "이 명령어는 팀 등록이 완료된 디스코드 서버에서만 사용 할 수 있습니다.",
            ephemeral: true
        });
    }

    const content = interaction.options.getString("content");
    
    let team: number, token: string;
    try {
        let sql = 'SELECT `id` FROM `team` WHERE `guild` = ?';
        let values: any[] = [interaction.guild.id];
        let [rows, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(sql, values);
        team = rows[0].id;

        sql = 'SELECT `token` FROM `user` WHERE `discord_id` = ?';
        values = [interaction.user.id];
        [rows, fields] = await pool.query(sql, values);
        token = rows[0].token;

        if(!team) {
            return await interaction.reply({
                content: "팀 정보를 조회 할 수 없습니다.",
                ephemeral: true
            });
        }
        else if(!token) {
            return await interaction.reply({
                content: "사용자 정보를 조회 할 수 없습니다.",
                ephemeral: true
            });
        }
    }
    catch(err) {
        console.log(err);
        return await interaction.reply({ content: `팀 정보 로드 중 오류가 발생했습니다. ${err}`, ephemeral: true });
    }

    let res;
    let now = new Date(Date.now());
    try {
        res = await axios.post(url, {
            team, content, record_day: `${now.getFullYear()}-${now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1)}-${now.getDate() >= 10 ? now.getDate() : '0' + now.getDate()}`
        }, {
            headers: { "Authorization" : `Bearer ${token}` }
        });
    }
    catch(err) {
        console.log(err);
        return await interaction.reply({ content: `일간보고서 작성 중 오류가 발생했습니다. ${err}`, ephemeral: true });
    }
    
    return await interaction.reply({ content: res.data.msg, ephemeral: true });
}