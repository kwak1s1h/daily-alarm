import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, GGM_TOKEN, DEV_GUILD, PROJECT_GUILD, DISCORD_DEV_ID } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error("Missing environment variables");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    GGM_TOKEN,
    DEV_GUILD,
    PROJECT_GUILD,
    DISCORD_DEV_ID,
};