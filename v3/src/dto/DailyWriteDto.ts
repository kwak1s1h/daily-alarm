export interface DailyWriteDto {
  data: DailyRecordInfo,
  msg: string
}

export interface DailyRecordInfo {
  team_id: number,
  user_id: number,
  content: string,
  record_day: string,
  updated_at: string,
  created_at: string,
  id: number
}