// This event executes when a new guild (server) is left.

module.exports = (client, message, guild) => {
  client.user.setActivity(`${client.config.defaultSettings.prefix}help || ${client.guilds.size} Servers`, {type: "PLAYING"});

  // If the settings Enmap contains any guild overrides, remove them.
  // No use keeping stale data!
  if (client.settings.has(guild.id)) {
    client.settings.delete(guild.id);
  }
};
