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
    .addStringOption(option => {
        return option.setName("message")
                     .setDescription("message content")
                     .setRequired(false);
    })

export async function execute(interaction: ChatInputCommandInteraction) {
    const mention = interaction.options.getBoolean("mention", false) ?? true;
    let message = interaction.options.getString("message", false);
    if(message == null) {
        await sendDailyNotes(mention);
    }
    else {
        await sendDailyNotes(mention, message);
    }

    return await interaction.reply({ content: "sendDailyNotes() method called." });
}

export default {
    data,
    execute,
}