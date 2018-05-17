// This event executes when a new guild (server) is joined.

module.exports = (client, message, guild) => {
  client.user.setActivity(`${client.config.defaultSettings.prefix}help || ${client.guilds.size}`, {type: "PLAYING"});
  // client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
};
