const { Player } = require('discord-player');
const { Client, Intents, Collection } = require('discord.js');
const { readdirSync } = require('fs');
const http = require("http");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.commands = new Collection();

// コマンドのプレフィックス
const prefix = "!";

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // !ping コマンド
    if (command === 'ping') {
        message.reply('pong!');
    }
});

const express = require("express");
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);

setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`, (res) => {
        // Do something with the response, if needed
    });
}, 60000);

if (process.env.TOKEN) {
    client.login(process.env.TOKEN).catch(e => {
        console.log("プロジェクトに入力したボットトークンが正しくないか、ボットの INTENTS がオフになっています！");
    });
} else {
    console.log(".env ファイル内のトークンを、プロジェクト内のトークンと対応させてください！");
}
