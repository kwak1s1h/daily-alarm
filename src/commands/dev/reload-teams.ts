import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Team } from '../..';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '../../DB';
import { TeamInfoDto } from '../../dto/teamInfoDto';
import axios from 'axios';
import { config } from '../../config';

export const data = new SlashCommandBuilder()
    .setName('reload_teams')
    .setDescription('reload all team\'s data');

export async function execute(interaction: ChatInputCommandInteraction) {
    console.log('Start reload all team\'s Info');
    try {
        let sql = 'SELECT * FROM `team`';
        let [teams, fields]: [Team[], FieldPacket[]] = await pool.query(sql);

        console.log(`SQL Query Executed. Team: ${teams.length}, SQL: ${sql}`);
        for(let i = 0; i < teams.length; i++) {
            const team = teams[i];
            const url = TeamInfoDto.url(team.id);
            try {
                const res = await axios.get(url, {
                    headers: { Authorization: `Bearer ${config.GGM_TOKEN}` }
                });

                const teamInfo: TeamInfoDto = res.data;
                console.log(`Team ${teamInfo.team?.name}:${teamInfo.team?.id} loaded. URL: ${url}`);

                sql = 'UPDATE `team` SET `cnt` = ?, `color` = ? WHERE `id` = ?';

                let values = [teamInfo.members?.length, teamInfo.team?.color, team.id];
                let [result, fields]: [ResultSetHeader, FieldPacket[]] = await pool.execute(sql, values); 

                console.log(`SQL Query Executed. Result: ${result.info}, SQL: ${sql}`);
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
    return await interaction.reply({ content: "All team's data reloaded." });
}
