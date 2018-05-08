let { Command } = require('klasa');
let urban = require('urban');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Urban search.',
      cooldown: 3000,
      //      usage: 'ADD YOUR USAGE HERE DUDE'
      runIn: ['text'] });
    }

    async run(msg) {
      let args = msg.content.split(' ').slice(1).join(' ');
      let embed = new this.client.methods.Embed()
      urban(args).first((json) => {
        if (!json) return msg.channel.send(`No results found for: ${args}`)
        embed.setTitle(`📕 \`Definition of "${json.word}"\``)
        //.setColor("COLOR")
        .setFooter(`Requested by: ${msg.author.tag}`)
        .addField('Definition', json.definition, false)
        .addField('Example', json.example, false)
        .addField('👍', `${json.thumbs_up}`, true)
        .addField('👎', `${json.thumbs_down}`, true)
        .setURL(`http://www.urbandictionary.com/define.php?term=${json.word}`)
        return msg.channel.send({embed})
      })
    }
  }
