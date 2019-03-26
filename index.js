const secrets = require(`${process.cwd()}/secrets.json`);
const commando = require("discord.js-commando");
const path = require("path");

const client = new commando.Client({
	owner: secrets.owner,
	...secrets.options
});
client
	.on("debug", process.env.debug?console.log:()=>{})
	.on("ready", ()=>{console.log("Ready")})

client.registry.registerGroups(secrets.groups);

client.registry.registerDefaults();
client.registry.registerCommandsIn(path.join(__dirname, "commands"));

client.login(secrets.token);
