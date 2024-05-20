import {SlashCommandBuilder, SlashCommandOptionsOnlyBuilder} from "@discordjs/builders";
import {ChatInputCommandInteraction, Client} from "discord.js";

export abstract class Command {
  abstract init(): Promise<void>;
  abstract get data(): SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;
  abstract execute(interaction: ChatInputCommandInteraction, client: Client): Promise<any>;
}