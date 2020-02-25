const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'rules')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
    
        embed.setTitle("Welsome to Reverse Restocks");
        embed.setURL('https://twitter.com/ReverseRestocks');
        embed.setDescription("Welcome to the ReverseRestocks discord server, here you will find a wide range of different tools and monitors that will help you turn a profit reselling!")
        embed.addField("__**Rules**__‎", "- Racism will not be tolerated.");
        embed.addField("‎", "- No leaking");
        embed.addField("‎", "- No spamming");
        embed.addField("‎‎", "- Be respectful to others");
        embed.addField("‎", "- No mentioning or discussing illegal activities.");
        embed.setImage('https://pbs.twimg.com/profile_banners/1205201128469794817/1578281246/600x200')
        message.channel.send({embed});

    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "rules"
}
