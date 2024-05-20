import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Team } from '../..';
import { FieldPacket } from 'mysql2';
import { pool } from '../../DB';
import axios from 'axios';
import { config } from '../../config';
import { TeamInfoDto } from '../../dto/teamInfoDto';

export const data = new SlashCommandBuilder()
    .setName("reload_users")
    .setDescription("reload all users data.");

export async function execute(interaction: ChatInputCommandInteraction) {
    try {
        let sql = 'SELECT * FROM `user`';
        let [rows, field]: [Team[], FieldPacket[]] = await pool.query(sql);

        for(let i = 0; i < rows.length; i++) {
            const team = rows[i];
            const url = TeamInfoDto.url(team.id);
            try {
                const res = await axios.get(url, { 
                    headers: { Authorization: `Bearer ${config.GGM_TOKEN}` } 
                });

                const teamInfo: TeamInfoDto = res.data;
                
            }
            catch(err) {

            }
        }
    }
    catch(err) {

    }
    return await interaction.reply({ content: "" });
}

export default {
    data,
    execute,
}