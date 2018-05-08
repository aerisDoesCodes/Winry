const { Command } = require('klasa');
const request = require('request');
module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      aliases: ['doggo', 'doge'],
      description: 'Send a random images of a dog.',
      cooldown: 3000,
      runIn: ['text'] });
    }

    async run(msg) {
    const response = await request('https://random.dog/woof.json', (e,r,b) => {
      var imageURL = JSON.parse(b).url
      var embed = new this.client.methods.Embed()
      embed.setImage(imageURL)
      .setTitle('Random Dog Images')
      msg.channel.send({embed})
    })
  }
}
