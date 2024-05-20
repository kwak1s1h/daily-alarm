import { SlashCommandBuilder, SlashCommandOptionsOnlyBuilder, ChatInputCommandInteraction, CacheType, Client } from "discord.js";
import {Command} from "../Command";

export default class Login extends Command {
    async init(): Promise<void> {

    }
    get data(): SlashCommandBuilder | SlashCommandOptionsOnlyBuilder {
        return new SlashCommandBuilder()
          .setName("login")
          .setDescription("Login with GGM account")
          .setNameLocalization("ko", "로그인")
          .setDescriptionLocalization("ko", "프로젝트 사이트 유저 정보를 받아 권한을 부여받습니다.")
    }
    async execute(interaction: ChatInputCommandInteraction<CacheType>, client: Client<boolean>): Promise<any> {
      interaction.reply(`링크를 통해 로그인해주세요. https://devseok.com/project/login.html?discord_id=${interaction.user.id}`);
    }

}