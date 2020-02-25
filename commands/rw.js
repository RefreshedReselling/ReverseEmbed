const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'rw')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
    
        embed.setTitle("Restockworld - Restock Guide");
        embed.setURL('https://twitter.com/RestockWorld');
        embed.addField("Payment Method", "Stripe", true);
        embed.addField("Website", "https://restockworld.com", true);
        embed.setDescription("Retail - $45/mo");
        embed.addField("How do they restock?", "In most cases, by tweeting a pw embedded link but sometimes vary it up like posting a bunch of invites to random servers to mess people up with different tools.");
        embed.addField("What about autofill?", "Don't use autofill extensions on restockworld since they block almost all of them");
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1222765528189530112/VFgF9yPR_400x400.jpg');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "rw"
}   
