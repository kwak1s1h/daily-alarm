import { SlashCommandBuilder, SlashCommandOptionsOnlyBuilder, ChatInputCommandInteraction, CacheType } from "discord.js";
import {Command} from "../Command";
import {pool, User} from "../DB";
import {FieldPacket, QueryResult} from "mysql2";
import {GGMRest, Routes} from "../util/GGMRest";
import {ServerTimeDto} from "../dto/ServerTimeDto";
import {DailyWriteDto} from "../dto/DailyWriteDto";

export default class DailyReport extends Command {
  async init(): Promise<void> {
  }
  get data(): SlashCommandBuilder | SlashCommandOptionsOnlyBuilder {
    return new SlashCommandBuilder()
      .setName("daily-report")
      .setDescription("Write daily report")
      .setNameLocalization("ko", "일간작성")
      .setDescriptionLocalization("ko", "일간보고서를 작성합니다.")
      .addStringOption(option => {
        return option.setName("content")
          .setDescription("Report Content")
          .setNameLocalization("ko", "내용")
          .setDescriptionLocalization("ko", "일간보고서에 작성할 내용을 입력하세요. (최대 100자)")
          .setMaxLength(100)
          .setRequired(true);
      })
  }
  async execute(interaction: ChatInputCommandInteraction<CacheType>): Promise<any> {
    const content = interaction.options.getString("content", true);

    try {
      const sql = 'SELECT `team` FROM `user` WHERE `discord_id` = ?';
      const values: any[] = [interaction.user.id];
      const [rows, field]: [User[], FieldPacket[]] = await pool.query(sql, values);
    }
    catch(err) {
      console.error(err);
      return await interaction.reply({
        content: `데이터베이스 처리 중 오류가 발생했습니다. ${err}`,
        ephemeral: true,
      });
    }
    const now = await GGMRest.Instance.get<ServerTimeDto>(Routes.serverNow());
    const res = await GGMRest.Instance.post<DailyWriteDto>(Routes.daily());
  }

}