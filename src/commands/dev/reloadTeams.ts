import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Team } from '../..';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '../../DB';
import { TeamInfoDto } from '../../dto/teamInfoDto';
import axios from 'axios';
import { config } from '../../config';

export const data = new SlashCommandBuilder()

export async function execute(interaction: ChatInputCommandInteraction) {
    try {
        let sql = 'SELECT * FROM `team`';
        let [teams, fields]: [Team[], FieldPacket[]] = await pool.query(sql);

        for(let i = 0; i < teams.length; i++) {
            const team = teams[i];
            const url = TeamInfoDto.url(team.id);
            try {
                const res = await axios.get(url, {
                    headers: { Authorization: `Bearer ${config.GGM_TOKEN}` }
                });

                const teamInfo: TeamInfoDto = res.data;
                sql = 'UPDATE `team` SET `cnt` = ?, `color` = ? WHERE `id` = ?';

                let values = [teamInfo.members?.length, teamInfo.team?.color, team.id];
                let [result, fields]: [ResultSetHeader, FieldPacket[]] = await pool.execute(sql, values); 
            }
            catch (err) {
                console.log(err);
                return await interaction.reply({ content: `${err}` });
            }
        }
    }
    catch(err) {
        console.log(err);
        return await interaction.reply({ content: `${err}` });
    }
    return await interaction.reply({ content: "called." });
}
