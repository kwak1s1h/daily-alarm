export interface TeamListDto {
  msg: string,
  list: TeamInfo[],
  daily: number,
  week: number,
  month: number,
}

export interface TeamInfo {
  id: number,
  name: string,
  project_name: string,
  year: number,
  created_at: string,
  updated_at: string,
  github: string,
  score: number,
  doc_url: string,
  color: string,
  cnt: number,
  leader: LeaderInfo | null,
}

export interface LeaderInfo {
  id: number,
  name: string,
  email: string,
  email_verified_at: string | null,

  // Profile Image File Name
  profile: string,

  // Markdown Text,
  info: string,

  level: number,
  exp: number,
  created_at: string,
  updated_at: string,
  circle_id: string | null,

  // Github Username
  github: string,

  pixel_point: number,
  grade: number,
  hired: number,
  job_group: number,
  short_msg: string,
  home_page: string,
  blocK: number,
  gold: number,
  piece: number,

  // Border Image File Name
  border: string,

  icon: string,
}