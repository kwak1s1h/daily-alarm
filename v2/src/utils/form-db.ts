import { FieldPacket, RowDataPacket } from "mysql2/promise";
import { Team, client } from "..";
import { pool } from "../DB";
import axios from "axios";

export async function main() {
    const url = 'https://ggm.gondr.net/api/user/profile';

    console.log("start to add name column");

    try {
        let sql = 'ALTER TABLE `user` ADD `name` VARCHAR(255) NOT NULL AFTER `id`';
        let [rows, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query(sql);

        sql = 'SELECT `id` FROM `user`';
        [rows, fields] = await pool.query(sql);

        rows.forEach(async user => {
            let res = await axios.get(url + `?id=${user.id}`);
            user.name = res.data.name;

            let sql = 'UPDATE `user` SET `name` = ? WHERE `id` = ?';
            let values = [user.name, user.id];
            let [rows, fields]: [RowDataPacket[], FieldPacket[]] = await pool.execute(sql, values);
        });
    }
    catch(err) {
        console.log(err);
    }

    console.log("clear!");
}

// export async function main() {
//     let registered;
//     try {
//         const sql = 'SELECT `id`, `name`, `cnt`, `guild`, `webhook_url`, `color` FROM `team`';
//         const [rows, fields]: [Team[], FieldPacket[]] = await pool.execute(sql);
//         registered = rows;
//     }
//     catch (err) {
//         console.log(err);
//         throw err;
//     }

//     if(registered.length >= 1) {
//         registered.forEach(async t => {
//             const pattern = /\/webhooks\/(\d+)/;
//             const matches = t.webhook_url.match(pattern);
//             const guilds = await client.guilds.fetch();
//             const guild = await guilds.get(t.guild)?.fetch();
//             if(!guild) {
//                 console.log(t);
//                 return;
//             }

//             let channel;
//             if (matches) {
//                 let webhookId = matches[1];
//                 const webhooks = await guild.fetchWebhooks();
//                 const webhook = webhooks.get(webhookId);
//                 if(webhook) {
//                     t.channel = webhook.channelId;
//                     t.mention = "@everyone";
//                 }
//             } else {
//                 console.log(t);
//                 return;
//             }
            
//             try {
//                 const sql = 'UPDATE `team` SET `channel` = ?, `mention` = ? WHERE `id` = ?';
//                 const values = [t.channel, t.mention, t.id];
            
//                 const [result, fields] = await pool.query(sql, values);
//             }
//             catch(err) {
//                 console.log(err, t);
//             }
//         });
//     }
// }