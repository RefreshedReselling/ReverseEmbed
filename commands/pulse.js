const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'pulse')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
            
        embed.setTitle("PulseNotify - Restock Guide");
        embed.setURL('https://twitter.com/PulseNotify');
        embed.setDescription("Retail - $50/mo");
        embed.addField("Payment Method", "Stripe", true);
        embed.addField("Website", "https://pulsenotify.io", true);
        embed.addField("How do they restock?", "They tweet a link, after clicking on it, there will be a button in the middle of the page which will bring you to stripe checkout.");
        embed.addField("**Note**:", "In order to sell Pulse, you must put it on a burner discord, as it is not unbindable.");
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1168027593783726080/qn-td0kp_200x200.png');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "pulse"
}
