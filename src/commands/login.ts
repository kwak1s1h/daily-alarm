import { EmbedBuilder } from "@discordjs/builders";
import { Channel, ChannelType, ChatInputCommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";
import axios from "axios";
import { pool } from "../DB";
import { FieldPacket, RowDataPacket } from "mysql2";
import { Team } from "..";

const url = 'https://ggm.gondr.net/api/login';

export const data = new SlashCommandBuilder()
    .setName("login")
    .setDescription("포트폴리오 사이트에서 로그인합니다.")
    .setNameLocalization("ko", "로그인")
    .addStringOption(option => {
        return option.setName("email")
                     .setDescription("사이트에 등록된 이메일을 입력하세요.")
                     .setRequired(true);
    })
    .addStringOption(option => {
        return option.setName("password")
                     .setDescription("비밀번호를 입력하세요.")
                     .setRequired(true);
    });

export async function execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder();
    const email = interaction.options.getString("email");
    const password = interaction.options.getString("password");
    
    const res = await axios.post(url, {
        email, password
    });

    if(res.status !== 200)
    {
        return interaction.reply({ 
            content: `로그인을 실패했습니다. ${res.data.message}`,
            ephemeral: true,
        });
    }
    const token: string = res.data['access_token'];
    if(token == undefined)
    {
        return await interaction.reply({ 
            content: `로그인을 실패했습니다.`,
            ephemeral: true,
        });
    }

    const { exp, sub }: { exp: number, sub: string } = JSON.parse(Buffer.from(token.split('.')[1], "base64").toString('utf8'));
    const expDate = new Date(exp * 1000);

    try {
        const sql = 'INSERT INTO `user`(`id`, `token`, `discord_id`, `exp`) VALUES (?, ?, ?, ?)';
        const values = [sub, token, interaction.user.id, expDate];
    
        const [result, fields] = await pool.query(sql, values);
    }
    catch(err) {
        console.log(err);
        return await interaction.reply({ 
            content: `로그인을 실패했습니다. ${err}`,
            ephemeral: true,
        });
    }

    return await interaction.reply({ content: "성공적으로 등록되었습니다.", ephemeral: true });
}