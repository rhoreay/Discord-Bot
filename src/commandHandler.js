require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({intents:[GatewayIntentBits.Guilds]});





function cmdHandler(interaction){
    if(!interaction.isChatInputCommand()) return;/* verify if interaction is a chat command */

    const {commandName} = interaction;

    if(commandName === "ping"){/* read command content and answers */
            interaction.reply("pong");
    };
    if(commandName == "horeay"){
        interaction.reply("O Horeay é lindo\nTem um pouco de mistério\nÉ belo quando está rindo\nE belo quando está sério\n\nO Horeay é bom\nTem um jeito carinhoso\nQuando fala em meigo tom\nCausa arrepio gostoso\n\nO Horeay é fino\nÉ solicito, é fiel\nTem a graça de um menino\nE é mais doce que o mel");
    }
};





module.exports = {cmdHandler};