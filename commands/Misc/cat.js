const { Command } = require('klasa');
const {get} = require("snekfetch");
const embed = new this.client.methods.Embed();

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      aliases: ['c'],
      description: 'Send a random images of a cat.',
      cooldown: 3000,
      runIn: ['text'] });
    }

    async run(msg) {
      get("https://random.cat/meow").then(response => {
        embed.setImage(response.body.file)
        //.setColor()
        .setTitle("Random Cat Images")
        msg.channel.send({embed})
      });
    }
  }
