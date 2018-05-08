let { Command } = require('klasa');
let request = require('request');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      aliases: ['googie'],
      description: 'Google search some stuff.',
      cooldown: 3000,
//      usage: 'ADD YOUR USAGE HERE DUDE'
      runIn: ['text'] });
    }

    async run(msg) {
      let embed = new this.client.methods.Embed()
      let args = msg.content.split(' ').slice(1).join(' ');
      let res = msg.channel.send(`:mag: \`${args}\`...`);
      request(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDu7_tL50kfEcegjXnYqfBxXrKqBrknkkY&cx=013036536707430787589:_pqjad5hr1a&q=${args}&alt=json`, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          var kek = JSON.parse(body)
          embed.setAuthor(`${args} - Google Search`, 'https://shady.world/assets/google.jpg')
          .setDescription(`[**${kek.items[0].title}**](${kek.items[0].link})\n\n${kek.items[0].snippet}`)
          //.setColor()
          .setFooter(`${Number(kek.queries.request[0].totalResults).toLocaleString()} total results`)
          msg.channel.send({embed})
        }
      });
    }
  }
