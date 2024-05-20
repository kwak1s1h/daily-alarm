import { EmbedBuilder } from '@discordjs/builders';
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("rank")
  .setDescription("프로젝트 팀 순위를 출력합니다.")
  .setNameLocalization("ko", "랭킹");

export async function execute(interaction: ChatInputCommandInteraction) {
  const embed = new EmbedBuilder()
                    .setTitle('프로젝트 팀 순위');
                    
  return await interaction.reply({ content: "" });
}

export default {
  data,
  execute,
}