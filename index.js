const secrets = require(`${process.cwd()}/secrets.json`);
const commando = require("discord.js-commando");
const path = require("path");

const client = new commando.Client({
	owner: secrets.owner
});

client.registry.registerGroups(secrets.groups);

client.registry.registerCommandsIn(path.join(process.cwd(), "commands"));
client.registry.registerDefault();

client.login(secrets.token);
