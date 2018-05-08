const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			runIn: ['text'],
			description: 'Displays the join server link of the bot.'
		});
	}

	async run(msg) {
		let embed = new this.client.methods.Embed()
		embed.setAuthor(this.client.user.username, this.client.user.avatarURL);
		embed.setDescription('Invite: [Egg Invite](https://discordapp.com/oauth2/authorize?permissions=8&scope=bot&client_id=379178832797630474)\nSupport: [Guild Invite](https://discord.gg/85DJg6M)');
		msg.channel.send({embed});
	}

};
