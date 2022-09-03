const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST }= require("@discordjs/rest");
require("dotenv").config();

var token = process.env.TOKEN; var guildID = process.env.GUILD_ID; var clientID = process.env.CLIENT_ID;


/* creating commands and adding description */
const guildCommands = [ 
    new SlashCommandBuilder().setName("horeay").setDescription("o mais foda de todos")
];
const globalCommands = [
    new SlashCommandBuilder().setName("ping").setDescription("Answers with 'pong'")
]


/* registering commands in a specific discord server */
const rest = new REST({version: "10"}).setToken(token);
rest.put(Routes.applicationGuildCommands(clientID, guildID), {body: guildCommands})
    .then((file) => console.log("Commands successfuly registered. "+file.length+" registered commands "))
    .catch(console.error);


/* to registering global commands is almost the same code,  but without the variable guildID */
rest.put(Routes.applicationCommands(clientID), {body: globalCommands})
    .then((file) => console.log("Global commands registered successfuly. "+file.length+" registered commands"))
    .catch(console.error);