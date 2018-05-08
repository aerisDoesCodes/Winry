const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['commands'],
			description: 'Display help for a command.',
			usage: '[Command:cmd]'
		});
	}

	async run(msg, [cmd]) {
		const method = this.client.user.bot ? 'author' : 'channel';
		if (cmd) {
			const info = [
				// `= ${cmd.name} = `,
				// cmd.description,
				// `usage :: ${cmd.usage.fullUsage(msg)}`,
				// 'Extended Help ::',
				// cmd.extendedHelp
`**Name** ${cmd.name}
**Description** ${cmd.description}
**Usage** ${cmd.usage.fullUsage(msg)}`
			].join('\n');
			return msg.sendMessage(info);
		}
		const help = await this.buildHelp(msg);
		const categories = Object.keys(help);
		// const embed = new this.client.methods.Embed();
		const helpMessage = [];
		msg.channel.send("**__Info__**\nuserinfo\n\n**__Main__**\nblur, google, urban, help, invite, ping, stats\n\n**__Image__**\ncat, dog")
		// .then(() => { if (msg.channel.type !== 'dm' && this.client.user.bot) msg.sendMessage('📥 | Commands have been sent to your DMs.'); })
		// .catch(() => { if (msg.channel.type !== 'dm' && this.client.user.bot) msg.sendMessage("❌ | You have DMs disabled, I couldn't send you the commands in DMs."); });

		return msg[method].send(helpMessage, { split: { char: '\u200b' } })
		//	.then(() => { if (msg.channel.type !== 'dm' && this.client.user.bot) msg.sendMessage('📥 | Commands have been sent to your DMs.'); })
		//	.catch(() => { if (msg.channel.type !== 'dm' && this.client.user.bot) msg.sendMessage("❌ | You have DMs disabled, I couldn't send you the commands in DMs."); });
	}

	async buildHelp(msg) {
		const help = {};

		const commandNames = Array.from(this.client.commands.keys());
		const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

		await Promise.all(this.client.commands.map((command) =>
			this.client.inhibitors.run(this.msg, command, true)
				.then(() => {
					if (!help.hasOwnProperty(command.category)) help[command.category] = {};
					if (!help[command.category].hasOwnProperty(command.subCategory)) help[command.category][command.subCategory] = [];
					help[command.category][command.subCategory].push(`${msg.guildSettings.prefix}${command.name.padEnd(longest)} :: ${command.description}`);
					return;
				})
				.catch(() => {
					// noop
				})
		));

		return help;
	}

};
