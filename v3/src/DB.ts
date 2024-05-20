import {createPool} from "mysql2/promise";
import {config} from "./Config";
import {RowDataPacket} from "mysql2";

export const pool = createPool({
  host: config.DB_HOST,
  port: +config.DB_PORT,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
});

export interface Team extends RowDataPacket {
  id: number,
  name: string,
  count: number,
  guild: string,
  channel: string,
  mention: string,
  color: string,
}

export interface User extends RowDataPacket {
  id: number,
  name: string,
  team: number,
  discord_id: string,
}