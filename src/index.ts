import { APIEmbedField, ApplicationCommandType, ChatInputCommandInteraction, Client, EmbedBuilder, GatewayIntentBits, WebhookClient } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";
import { scheduleJob } from "node-schedule";
import { pool } from "./DB";
import { FieldPacket, RowDataPacket } from "mysql2";
import axios from "axios";

const host = 'ggm.gondr.net';
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages
    ],
});

client.once("ready", async () => {
    console.log("Discord bot is ready! 🤖");
    let guilds = await client.guilds.fetch();
    guilds.forEach(async g => {
        await deployCommands({ guildId: g.id });
    })
});

client.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    if (interaction.commandType !== ApplicationCommandType.ChatInput) {
        return;
    }
    const { commandName } = interaction;
    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

scheduleJob("20 20 * * 1-5", sendDailyNotes);
scheduleJob("55 23 * * 1-5", sendDailyNotes);

client.login(config.DISCORD_TOKEN);

export async function sendDailyNotes() {
    let registered;
    try {
        const sql = 'SELECT * FROM `team`';
        const [rows, fields]: [Team[], FieldPacket[]] = await pool.execute(sql);
        registered = rows;
    }
    catch (err) {
        return;
    }
    registered.forEach(async team => {
        const list = await getDailyNotes(team, new Date(Date.now()));
        const webhookClient = new WebhookClient({ url: team.webhook_url });
        const embed = new EmbedBuilder()
            .setTitle('**일간보고서를 작성해주세요! (클릭 시 이동)**')
            .setURL(`http://${host}/project/team/${team.id}`)
            .setFields(list)
            .setTimestamp()
            .setFooter({ text: `${list.length}/${team.cnt}` });
        webhookClient.send({
            embeds: [embed],
        });
    });
}


export async function getDailyNotes(team: Team, t: Date): Promise<APIEmbedField[]> {
    let page = await getPage(team, t);
	let list = page.data.list;
    return list.map((note: DailyNote) => {
        return { name: note.name, value: note.content };
	});
}

export async function getPage(team: Team, t: Date) {
    return await axios.get(`http://${host}/api/team/record/daily?team=${team.id}&start_day=${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`, {
        headers: { "Authorization" : `Bearer ${config.GGM_TOKEN}` }
    });
}

export interface Team extends RowDataPacket {
    id: number,
    name: string,
    cnt: number,
    guild: string,
    webhook_url: string,
    color: string,
}

export interface DailyNote {
    name: string, // the author of note
    content: string // the content of note
}