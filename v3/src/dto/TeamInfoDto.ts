import {TeamInfo} from "./TeamListDto";
import {ReportType} from "../Enum";

export interface TeamInfoDto {
  members: MemberInfo[],
  team: Omit<TeamInfo, "leader" | "cnt">
  score: string,
  reports: TeamReportInfo
}

export interface MemberInfo {
  id: number,
  team_id: number,
  user_id: number,
  owner: number,
  created_at: string,
  updated_at: string,
  name: string,
  email: string,
  profile: string,
  info: string,
  level: number,
  exp: number,
  circle_id: string | null,
  github: string
}

export interface TeamReportInfo {
  id: number,
  team_id: number,
  user_id: number,
  content: string,
  category: ReportType,
  score: number,

  // 2024-01-01T23:59:59.000000Z
  created_at: string,
  updated_at: string,

  // 2024-01-01
  record_day: string,

  // https://ggm.gondr.net/file/reports/{team_id}/{file}
  file: string,
}