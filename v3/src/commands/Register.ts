import {SlashCommandBuilder, SlashCommandOptionsOnlyBuilder, EmbedBuilder} from "@discordjs/builders"
import {Command} from "../Command";
import axios, {isAxiosError} from "axios";
import {TeamInfo, TeamListDto} from "../dto/TeamListDto";
import {ChannelType, ChatInputCommandInteraction, Client, Role, TextChannel} from "discord.js";
import {MemberInfo, TeamInfoDto} from "../dto/TeamInfoDto";
import {GGMRest, Routes} from "../util/GGMRest";
import {pool, Team} from "../DB";
import {FieldPacket, RowDataPacket} from "mysql2";
import {hexToRgb} from "../util/HexToRGBTuple";

export default class Register extends Command {
  private teams: TeamInfo[] = [];

  async init(): Promise<void> {
    const now = new Date();
    try {
      const res = await axios.get('/team/list', { params: { year: now.getFullYear() } });
      this.teams = (res.data as TeamListDto).list;
    }
    catch(err) {
      if(isAxiosError(err)) {
        console.log(err.response);
      }
      else {
        console.error(err);
      }
    }
  }
  get data(): SlashCommandOptionsOnlyBuilder {
    return new SlashCommandBuilder()
      .setName("register")
      .setDescription("Register guild(discord server) with ggm team info")
      .setNameLocalization("ko", "팀등록")
      .setDescriptionLocalization("ko", "디스코드 서버에서 일간보고서 알림을 받을 수 있도록 등록합니다.")
      .addNumberOption(option => {
        return option.setName("team_id")
          .setDescription("Id of the ggm team")
          .setNameLocalization("ko", "팀명")
          .setDescriptionLocalization("ko", "프로젝트 팀 이름을 선택하세요.")
          .setChoices(this.teams.map(team => ({ name: team.name, value: team.id })))
          .setRequired(true);
      })
      .addMentionableOption(option => {
        return option.setName("mention")
          .setDescription("Alarm Mention")
          .setNameLocalization("ko", "알림맨션")
          .setDescriptionLocalization("ko", "보고서 알림 시 맨션할 내용을 입력하세요.")
          .setRequired(true);
      })
      .addChannelOption(option => {
        return option.setName("alarm_channel")
          .setDescription("Channel to send daily alarm")
          .setNameLocalization("ko", "알림채널")
          .setDescriptionLocalization("ko", "일간보고서 및 주간보고서 작성 알림을 받을 채널을 선택하세요 (미선택시 현재 채널로 설정됩니다.)")
          .addChannelTypes(ChannelType.GuildText)
          .setRequired(true);
      })
  }
  async execute(interaction: ChatInputCommandInteraction, client: Client): Promise<any> {
    const teamId: number = interaction.options.getNumber("team_id", true);
    const channel: TextChannel = interaction.options.getChannel("alarm_channel", true, [ChannelType.GuildText]);
    const mention = interaction.options.getMentionable("mention", true);
    const teamInfo = await GGMRest.Instance.get<TeamInfoDto>(Routes.teamInfo(teamId));
    const leader = teamInfo.members.find(member => member.owner === 1) as MemberInfo;
    const color = hexToRgb(teamInfo.team.color);
    if(!leader) {
      console.log(`${teamInfo.team.name}팀의 팀장을 찾을 수 없습니다. 팀원: ${teamInfo.members.map(m => m.name).join(', ')}`);
    }

    if(!(mention instanceof Role)) {
      return await interaction.reply({
        content: "@everyone 이나 역할 이외에는 선택할 수 없습니다.",
        ephemeral: true,
      });
    }
    let mentionContent = `<@&${mention.id}>`;
    if(mention.id === interaction.guildId) {
      mentionContent = "@everyone";
    }

    try {
      let sql = 'SELECT `id`, `guild` FROM `team` WHERE `id` = ?';
      let values: any[] = [teamId];
      let [rows, field]: [Team[], FieldPacket[]] = await pool.execute(sql, values);
      if(rows.length >= 1) {
        const existGuild = await client.guilds.fetch(rows[0].guild);
        const owner = await existGuild.fetchOwner();
        return await interaction.reply({
          content: `'${teamInfo.team.name}'팀은 이미 다른 서버에 등록되어 있습니다. 서버 이름: ${existGuild?.name}, 서버 주인: ${owner.displayName}`,
          ephemeral: true,
        });
      }

      sql = 'INSERT INTO `team` (id, name, count, guild, channel, mention, color) VALUES (?, ?, ?, ?, ?, ?, ?)';
      values = [teamId, teamInfo.team.name, teamInfo.members.length, interaction.guildId, channel.id, mentionContent, teamInfo.team.color];
      [rows, field] = await pool.execute(sql, values);
    }
    catch(err) {
      console.error(err);
      return await interaction.reply({
        content: `데이터베이스 처리 중 오류가 발생했습니다. ${err}`,
        ephemeral: true,
      });
    }

    const embed = new EmbedBuilder()
      .setTitle(`'${teamInfo.team.name}'팀이 성공적으로 등록되었습니다.`)
      .setColor(color)
      .addFields({
        name: "팀장",
        value: leader.name,
        inline: true,
      })
      .addFields({
        name: "팀원 수",
        value: teamInfo.members.length.toString(),
        inline: true,
      })
      .addFields({
        name: "점수",
        value: `${teamInfo.team.score}점`,
        inline: true,
      })
      .addFields({
        name: "알림 채널",
        value: `<#${channel.id}>`,
      })
      .addFields({
        name: "알림 맨션",
        value: mentionContent,
        inline: true,
      });
    return await interaction.reply({ embeds: [embed] });
  }
}
