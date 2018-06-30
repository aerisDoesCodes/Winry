const config = require('./config');
const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./index.js', {
    totalShards: 'auto',
    respawn: true,
    token: config.token
});

manager.spawn(manager.totalShards);
manager.on('shardCreate', shard => {
    console.log(`Spawning shard ${shard.id}.`);
});