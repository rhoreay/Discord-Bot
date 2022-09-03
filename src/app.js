require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds]});
var token = process.env.TOKEN;


const commandHandling = require("./commandHandler"); /* import the command handling function from other file */
client.on("interactionCreate", async interaction=>{    
    commandHandling.cmdHandler(interaction);
})/* when a interaction is created the function will be executed */



client.once("ready", ()=>{
    console.log("Connected successfully!!")
})


client.login(token)