/**
 * Converts JSON plain text commands to JS
 *
 * @module
 * @author Mount2010
 * @file
 * @copyright CC-NC-BY-SA 4.0
 */

const config = require(`${process.cwd()}/config.json`);
const Mustache = require("mustache");
const commando = require("discord.js-commando");

const commandData = [];
let commands = [];
const commandFiles = config.commandFiles;
for (let i = 0; i < commandFiles.length; i++) {
	commandData.push(require(`${process.cwd()}/${commandFiles[i]}`));
}

class Base extends commando.Command {
	constructor (client, name, description, defaultArgs = true) {
			const opt = {
				name: name,
				description: description,
				group: "pats",
				memberName: name,
			};
			if (defaultArgs) {
				opt.args = [
					{
						key: "user",
						prompt: `Who do ya wanna ${name}?`,
					type: "user"
					}
				]
			}
			super(client, opt);
	}
	run (msg, args) {
		msg.reply("Tell the owner he didn't subclass an abstract class");
	}
}

// I KJOW THIS WILL WORK
// BUT WHAT IN THE HELLS OF ALL THE RELIGIONS AM I DOING
// WTF
function makeCommand (data) {
	return class extends Base {
		constructor (client) {
			super(...[
				data.name,
				data.description,
				data.defaultArgs
			])
		}
		async run (msg, args) {
			const output = {
				title: data.output.title,
				description: Mustache.render(data.output.description, args)
			}
			msg.embed(output);
		}
	}
}

commands = commandData.map((el)=>{
	return el.map((il)=>{
		makeCommand(il);
	});
});

module.exports = commands;

