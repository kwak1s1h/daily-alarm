import { ActivityType, APIEmbedField, ApplicationCommandType, Client, ClientUser, EmbedBuilder, GatewayIntentBits, Guild, WebhookClient } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import { deployCommands } from "./deploy-commands";
import { scheduleJob } from "node-schedule";
import { pool } from "./DB";
import { FieldPacket, RowDataPacket } from "mysql2";
import axios from "axios";
import { User } from "./commands/register";
import { hexToRgb } from "./utils/hexToRGBTuple";

const host = 'ggm.gondr.net';
export const client = new Client({
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
        await deployCommands({ guild: await g.fetch(), guildId: g.id });
    });
    await SetBotActivity(client.user);
});

client.on("guildCreate", async (guild) => {
    await deployCommands({ guild: await guild.fetch(), guildId: guild.id });
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
        console.log(commandName);    
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

scheduleJob("20 20 * * 1-5", () => sendDailyNotes());
scheduleJob("55 23 * * 1-5", () => sendDailyNotes());

client.login(config.DISCORD_TOKEN);

export async function sendDailyNotes(mention: Boolean = true) {
    let registered;
    try {
        const sql = 'SELECT * FROM `team`';
        const [rows, fields]: [Team[], FieldPacket[]] = await pool.execute(sql);
        registered = rows;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
    registered.forEach(async team => {
        const list = await getDailyNotes(team, new Date(Date.now()));
        const webhookClient = new WebhookClient({ url: team.webhook_url });
        const embed = new EmbedBuilder()
            .setTitle('**일간보고서를 작성해주세요! (클릭 시 이동)**')
            .setURL(`http://${host}/project/team/${team.id}`)
            .setFields(list)
            .setTimestamp()
            .setFooter({ text: `${list.length}/${team.cnt}` })
            .setColor(hexToRgb(team.color));

        if(list.length >= team.cnt) {
            embed.setTitle("모두가 일간보고서를 작성했어요! 👍")
            webhookClient.send({
                embeds: [embed],
            });
        }
        else if (mention) {
            webhookClient.send({
                content: team.mention,
                embeds: [embed],
            });
        }
        else {
            webhookClient.send({
                embeds: [embed],
            });
        }
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
    channel: string,
    mention: string,
    leader: User
}

export interface DailyNote {
    name: string, // the author of note
    content: string // the content of note
}

export async function SetBotActivity(user: ClientUser | null) {
    if(!user) return;

    let userCnt, teamCnt;
    try {
        let sql = 'SELECT * FROM `team`';
        let [rows, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(sql);
        teamCnt = rows.length;

        sql = 'SELECT * FROM `user`';
        [rows, fields] = await pool.query(sql);
        userCnt = rows.length;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
    user.setActivity({
        name: `${teamCnt}개의 팀과 ${userCnt}명의 유저가 사용 중입니다.`,
        type: ActivityType.Custom
    });
}
