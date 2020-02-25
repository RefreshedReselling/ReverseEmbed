const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'help')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
    
        embed.setTitle("Help");
        embed.setURL('https://twitter.com/RReselling');
        embed.addField("!help", "Displays this message.");
        embed.addField("!g", "__**Removed**__");
        embed.addField("!rules", "Displays server rules");
        embed.addField("!purge", "Removes a certain amount of messages. Usage: !purge (message amount)")
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "help"
}   
