import { Client, IntentsBitField } from "discord.js";
import {config} from "./Config";
import {Environment} from "./Enum";
import {CommandManager} from "./CommandManager";
import axios from "axios";
import {Command} from "./Command";
import {GGMRest} from "./util/GGMRest";
import Express from "express";
import https from "node:https";
import path from "node:path";
import fs from "fs/promises";

async function main() {
  console.log(`Current Environment is: ${config.NODE_ENV?.toUpperCase()}`);

  axios.defaults.baseURL = "https://ggm.gondr.net/api";
  axios.defaults.headers.common.Authorization = `Bearer ${config.GGM_API_TOKEN}`;

  const commandManager = new CommandManager();
  await commandManager.init();

  GGMRest.Instance = new GGMRest(config.GGM_API_TOKEN, 'ggm.gondr.net');

  const app = Express();
  const options: https.ServerOptions = {
    key: await fs.readFile(config.HTTPS_KEY_PATH),
    cert: await fs.readFile(config.HTTPS_CERT_PATH),
  };
  https.createServer(options, app).listen(8000);

  const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildWebhooks,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });

  client.on("ready", async () => {
    console.log(`Discord Bot is ready! Name: ${client.user?.username}`);
    console.log(config.NODE_ENV, Environment.DEVELOPMENT);
    if(config.NODE_ENV === Environment.DEVELOPMENT) {
      console.log("Start Deploy Commands");
      const oAuth2Guilds = await client.guilds.fetch();
      const guilds = await Promise.all(oAuth2Guilds.map(async guild => {
        return await guild.fetch();
      }));
      for(let i = 0; i < guilds.length; i++) {
        await commandManager.deploy(guilds[i]);
      }
    }
  });

  client.on("interactionCreate", async (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    const commandName = interaction.commandName.replace("-", "");
    if(commandManager.commands[commandName] instanceof Command) {
      await commandManager.commands[commandName].execute(interaction, client);
    }
  });

  await client.login(config.DISCORD_TOKEN);
}
main();
