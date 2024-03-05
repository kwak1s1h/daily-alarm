const { EmbedBuilder, WebhookClient } = require('discord.js');
const axios = require('axios').default;
const cheerio = require("cheerio");
const dotenv = require('dotenv');
dotenv.config();

const host = 'https://ggm.gondr.net';

const webhookLinks = require("./webhook-link.json");
const now = new Date(Date.now());
for(let i = 0; i < webhookLinks.length; i++)
{
	const webhookClient = new WebhookClient({ url: webhookLinks[i].url });
	
	getDailyNotes().then(list => {
		const embed = new EmbedBuilder()
			.setTitle('**일간보고서를 작성해주세요 (클릭 시 이동)**')
			.setURL(`${host}/project/team/${webhookLinks[i].team}`)
			.setFields(list)
			.setColor(0x00FFFF)
			.setTimestamp()
			.setFooter({text: `${list.length} / 5`});
		
		if(list.length <= 0)
		{
			embed.setDescription('아무도 작성하지 않음.')
		}
		
		webhookClient.send({
			content: '@everyone',
			username: '일간보고서 작성 알림',
			embeds: [embed],
		});
	});
}

async function getDailyNotes() {
	let page = await getPage();
	let list = page.data.list;
    return list.map(elem => {
		return { name: elem.name, value: elem.content };
	});
}

function getDateString(date) {
	return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
}

async function getPage() {
    return await axios.get(`${host}/api/team/record/daily?team=27&start_day=${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`, {
        headers: { "Authorization" : `Bearer ${process.env.TOKEN}` }
    });
}