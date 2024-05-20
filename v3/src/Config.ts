import * as dotenv from "dotenv";
dotenv.config();

const {
  NODE_ENV,
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  GGM_API_TOKEN,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  HTTPS_KEY_PATH,
  HTTPS_CERT_PATH,
} = process.env;

if(!NODE_ENV ||
   !DISCORD_TOKEN ||
   !DISCORD_CLIENT_ID ||
   !GGM_API_TOKEN ||
   !DB_HOST ||
   !DB_PORT ||
   !DB_USER ||
   !DB_PASSWORD ||
   !DB_DATABASE ||
   !HTTPS_KEY_PATH ||
   !HTTPS_CERT_PATH
) {
  throw new Error("Missing environment variables");
}

export const config = {
  NODE_ENV,
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  GGM_API_TOKEN,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  HTTPS_KEY_PATH,
  HTTPS_CERT_PATH,
};