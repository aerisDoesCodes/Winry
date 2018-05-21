const superagent = require('superagent')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  superagent.post(`https://discordbots.org/api/bots/stats`)
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MjkxNzUxMzQ1NDY4MjEyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTI2ODY0MDk1fQ.qpD1MaIePeW8I6LbcqqdEqm5tEFgThIKTX87bkX9YSY')
      .send({ server_count: client.guilds && client.guilds.size ? client.guilds.size : (client.Guilds ? client.Guilds.size : Object.keys(client.Servers).length) })
      .then(() => message.channel.send('Updated discordbots.org stats'))
      .catch(err => message.channel.send(`Error updating discordbots.org stats: ${err.body || err}`));
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: "Bot Owner"
};

exports.help = {
name: "post",
category: "System",
description: "Send's server count to discordbots.org.",
usage: "post"
};
