import {Command} from "./Command";
import fs from "fs/promises";
import path from "node:path";
import {Guild, REST, Routes} from "discord.js";
import {config} from "./Config";

export class CommandManager {
  commands: { [key: string]: Command } = {};

  async init(): Promise<void> {
    const fileNames = await fs.readdir(path.join(__dirname, "commands"), {recursive: true});
    const list = await Promise.all(fileNames.map(async fileName => {
      if(!fileName.endsWith(".ts")) return;
      return { name: fileName.replace(".ts", "").toLowerCase(), command: await import(path.join(__dirname, "commands", fileName))};
    }));
    for(let i = 0; i < list.length; i++) {
      const obj = list[i];
      if(!obj) continue;
      this.commands[obj.name] = new obj.command.default();
      await this.commands[obj.name].init();
    }
  }

  async deploy(guild: Guild): Promise<void> {
    let rest = new REST().setToken(config.DISCORD_TOKEN);
    console.log(`Start Refresh Guild Commands. Name: ${guild.name}`)
    try {
      await rest.put(
        Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guild.id),
        {
          body: Object.values(this.commands).map(cmd => cmd.data)
        }
      );
      console.log("Successfully reload commands.");
    }
    catch(err) {
      console.error(err);
    }
  }
}