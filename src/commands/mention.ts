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
    .addBooleanOption(option => {
        return option.setName("role")
                    .setDescription("멘션할 역할을 입력하세요.")
                    .setNameLocalization("ko", "역할")
                    .setRequired(false);
    });

export async function execute(interaction: ChatInputCommandInteraction) {
    const embed = new EmbedBuilder();

    const mentionable = interaction.options.getMentionable("role") as Role;
    const guild = interaction.guild;
    if(!guild) {
        return await interaction.reply({ content: "디스코드 서버에서만 사용 가능한 명령어입니다.", ephemeral: true });
    }

    if(mentionable.name.trim() == '@everyone') {
        embed.setTitle("정상적으로 등록되었습니다.")
            .setFields([{ name: "알림 멘션", value: "@everyone" }]);
        return await interaction.reply({ embeds: [embed] });
    }

    const roles = await guild.roles.fetch();
    const role = roles.get(mentionable.id);
    if(!role) {
        return await interaction.reply({ content: "역할 또는 @everyone을 입력해야 합니다.", ephemeral: true });
    }

    return await interaction.reply({ content: "테스트를 실행했습니다." });
}
