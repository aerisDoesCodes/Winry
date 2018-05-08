let { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      aliases: ['fb', 'feed'],
      description: 'Send a feedback to the developers.',
      cooldown: 45000,
      runIn: ['text'] });
    }
    async run(msg) {
      let feedback = msg.content.split(' ').slice(1).join(' ')
      let embed = new this.client.methods.Embed()
      if (!feedback) {
        return msg.reply('Please give a feedback.')
      }
      embed.setAuthor(`${msg.author.tag}`)
      .setTimestamp()
      .addField('New Feedback', `${feedback}`)
      this.client.guilds.get("336263207998062592").channels.get("346282533127847936").send({embed})
      msg.reply("Feedback has been sent 👌")
    }
  }
