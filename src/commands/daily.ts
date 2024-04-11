import { EmbedBuilder } from "@discordjs/builders";
import { Channel, ChannelType, ChatInputCommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";
import axios, { isAxiosError } from "axios";
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

    let content = interaction.options.getString("content");
    if(!content) return;
    
    let team: number, token: string;
    try {
        let sql = 'SELECT `id` FROM `team` WHERE `guild` = ?';
        let values: any[] = [interaction.guild.id];
        let [rows, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(sql, values);
        if(rows.length <= 0) {
            return await interaction.reply({
                content: "이 명령어는 팀 등록이 완료된 본인 팀의 디스코드 서버에서만 사용 할 수 있습니다.",
                ephemeral: true
            });
        }
        team = rows[0].id;

        sql = 'SELECT `token` FROM `user` WHERE `discord_id` = ?';
        values = [interaction.user.id];
        [rows, fields] = await pool.query(sql, values);
        if(rows.length <= 0) {
            return await interaction.reply({
                content: "로그인이 필요합니다. **/로그인** 명령어로 계정을 등록해주세요.",
                ephemeral: true
            });
        }
        token = rows[0].token;

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
        if(isAxiosError(err)) {
            return await interaction.reply({ content: `일간보고서 작성 요청 중 오류가 발생했습니다. ${JSON.stringify(err.response?.data)}`, ephemeral: true });
        }
        return await interaction.reply({ content: `일간보고서 작성 중 오류가 발생했습니다. ${err}`, ephemeral: true });
    }
    
    return await interaction.reply({ content: res.data.msg, ephemeral: true });
}