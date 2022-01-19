// imports
const DiscordJS = require('discord.js')
const { Intents } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config() // get env config
const prefix = '/'

// initialize client
const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
})

client.commands = new DiscordJS.Collection()

// filter js files and set commands
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js')) // check if files .js
for (let file of commandFiles) {
	let command = require(`./Commands/${file}`)

	client.commands.set(command.name, command)
}

// client listeners
client.on('ready', () => {
	console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
	message.member.roles.cache.has
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).split(/ +/) // splice a command
	const command = args.shift().toLowerCase()
	
	if (command === 'clear') {
		client.commands.get('clear').execute(message, args)
	}

	if (command === 'embed') {
		client.commands.get('embed').execute(message, args, MessageEmbed)
	}

	if (command === 'github') {
		client.commands.get('github').execute(message, args)
	}

	if (command === 'ping') {
		client.commands.get('ping').execute(message, args)
	}
})

// login client with unique token
client.login(process.env.TOKEN)
