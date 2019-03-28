const config = require(`${process.cwd()}/config.json`);
const commando = require("discord.js-commando");
const path = require("path");
const convertedJSON = require(`${process.cwd()}/convert.js`);

const client = new commando.Client({
	owner: config.owner,
	...config.options
});
client
	.on("debug", process.env.debug?console.log:()=>{})
	.on("ready", ()=>{console.log("Ready")})
	.on("error", console.error);

client.registry.registerGroups(config.groups);

client.registry.registerDefaults();
client.registry.registerCommandsIn(path.join(__dirname, "commands"));
console.log(convertedJSON);
convertedJSON.forEach((el)=>{
	client.registry.registerCommand(el);
});

client.login(config.token);
