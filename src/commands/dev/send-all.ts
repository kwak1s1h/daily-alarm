import { ChatInputCommandInteraction, Guild, SlashCommandBuilder } from "discord.js";
import { client, sendDailyNotes } from '../..';

export const data = new SlashCommandBuilder()
    .setName("send_all")
    .setDescription("Send Daily alarm to every guild. Default: true")
    .addBooleanOption(option => {
        return option.setName("mention")
                     .setDescription("sendDailyNotes()'s param")
                     .setRequired(false);
    })

export async function execute(interaction: ChatInputCommandInteraction) {
    const mention = interaction.options.getBoolean("mention", false) ?? true;
    await sendDailyNotes(mention);
    return await interaction.reply({ content: "sendDailyNotes() method called." });
}
