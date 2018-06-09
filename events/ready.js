const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MjkxNzUxMzQ1NDY4MjEyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTI2ODY0MDk1fQ.qpD1MaIePeW8I6LbcqqdEqm5tEFgThIKTX87bkX9YSY');
const games = ["w!upvote || w!help", "with abc || w!help", "https://winry.xyz/", "with xyz || w!help", "discord.gg/6Y2jTtR || w!help"];
const Webhook = require("webhook-discord")
const Hook = new Webhook("https://discordapp.com/api/webhooks/454900232086355968/EzlNugWeYK7BQ--sMMeM2K_8Y99YHA8mt4tKWvQMQysIyphD7qG4xBYnJiRxvpjcNzuW")

module.exports = async client => {
	Hook.success("Online",`${client.user.tag} is now online!`)
  // Log that the bot is online.
  client.logger.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  // Make the bot "play the game".
  setInterval(() => {
    client.user.setActivity(`${games[Math.floor(Math.random() * games.length)]}`, {type: "PLAYING"});
}, 60000)

  //DBL
  setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
};
