import { Guild, REST, Routes } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { devCommands } from "./commands/dev";

const commandsData = Object.values(commands).map((command) => command.data);
const devCommandsData = Object.values(devCommands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

type DeployCommandsProps = {
    guild: Guild
    guildId: string;
};

export async function deployCommands({ guild, guildId }: DeployCommandsProps) {
    try {
        console.log(`Started refreshing application (/) commands. Guild: ${guild.name}`);

        await rest.put(
            Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
            {
                body: commandsData,
            }
        );

        console.log(`Successfully reloaded application (/) commands. Guild: ${guild.name}`);

        if(guildId !== config.PROJECT_GUILD)
        Promise.all((await guild.members.fetch()).map(m => console.log(m.displayName)));
    } catch (error) {
        console.error(error);
    }
}

export async function devDeployCommands({ guild, guildId }: DeployCommandsProps) {
    try {
        console.log(`Started refreshing application (/) DEV commands.`);

        await rest.put(
            Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
            {
                body: devCommandsData,
            }
        );

        console.log(`Successfully reloaded application (/) DEV commands.`);
    } catch (error) {
        console.error(error);
    }
}