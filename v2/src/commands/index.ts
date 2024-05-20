import register from "./register";
import remove from "./remove";
import get from "./get";
import login from "./login";
import daily from "./daily";
import logout from "./logout";
import mention from "./mention"
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

interface Command {
    data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">;
    execute(interaction: ChatInputCommandInteraction): Promise<any>;
}

export const commands: { [keyof: string]: Command } = {
    register,
    remove,
    get,
    login,
    daily,
    logout,
    mention
};