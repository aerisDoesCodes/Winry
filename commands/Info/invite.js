let { Command } = require('klasa')

module.exports = class  extends Command {
  constructor(...args) {
    super(...args, {
      description: 'Get the bot\'s invites'
    });
  }

  async run(msg) {
    let embed = new this.client.methods.Embed();
    embed.setAuthor('Malu Invite')
    .setDescription('Invite: [Click Here](https://discordapp.com/oauth2/authorize?client_id=336271488669974528&scope=bot)\nGuild: [Click Here](https://discord.gg/ASJWVfE)')
    .setThumbnail(`${this.client.user.displayAvatarURL}`)
    msg.channel.send({embed})
  }
};
