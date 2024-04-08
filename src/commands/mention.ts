import { EmbedBuilder } from "@discordjs/builders";
import { Team, getDailyNotes } from "..";
import { ChatInputCommandInteraction, CommandInteractionOption, Role, SlashCommandBuilder, WebhookClient } from "discord.js";
import { FieldPacket } from "mysql2";
import { pool } from "../DB";

const host = 'ggm.gondr.net';

export const data = new SlashCommandBuilder()
    .setName("mention")
    .setDescription("멘션할 역할을 수정합니다.")
    .setNameLocalization("ko", "멘션")
    .addMentionableOption(option => {
        return option.setName("role")
                    .setDescription("멘션할 역할을 입력하세요.")
                    .setNameLocalization("ko", "역할")
                    .setRequired(true);
    });

export async function execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder();
    const guild = interaction.guild;
    if(!guild) {
        return await interaction.reply({ content: "디스코드 서버에서만 사용 가능한 명령어입니다.", ephemeral: true });
    }

    const role = interaction.options.getMentionable("mention") as Role;
    const mention = (role && role.id != interaction.guildId) ? `<@&${role.id}>` : '@everyone';

    try {
        let sql = 'SELECT * FROM `team` WHERE `guild` = ?';
        let values: any[] = [guild.id];

        let [rows, fields]: [Team[], FieldPacket[]] = await pool.query(sql, values);

        if(rows.length <= 0) {
            return await interaction.reply({ 
                content: `팀 등록이 되어있지 않습니다. **/팀등록** 으로 팀을 등록해 주세요.`,
                ephemeral: true
            });
        }

        sql = 'UPDATE `team` SET `mention` = ? WHERE `guild` = ?';
        values = [mention, guild.id];

        [rows, fields] = await pool.execute(sql, values);
    }
    catch(err) {
        console.log(err);
        return await interaction.reply({ 
            content: `수정 중 에러가 발생했습니다. ${err}`,
            ephemeral: true
        });
    }
    
    embed.setTitle("정상적으로 등록되었습니다.")
        .setFields([{ name: "알림 멘션", value: mention }]);
    return await interaction.reply({ embeds: [embed] });
}
