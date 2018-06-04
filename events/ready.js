const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MjkxNzUxMzQ1NDY4MjEyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTI2ODY0MDk1fQ.qpD1MaIePeW8I6LbcqqdEqm5tEFgThIKTX87bkX9YSY');
const games = ["w!upvote || w!help", "abc || w!help", "xyz || w!help", "discord.gg/HWEMcEY || w!help"];

module.exports = async client => {
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
