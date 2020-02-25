const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'cyber')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
            
        embed.setTitle("CyberAIO - Restock Guide");
        embed.setURL('https://twitter.com/Cybersole');
        embed.setDescription("Retail - £300 (~$400 USD)");
        embed.addField("Payment Method", "Stripe", true);
        embed.addField("Website", "https://cybersole.io", true);
        embed.addField("How do they restock?", "They usually restock by dropping a link (ex. https://drop.cybersole.io/?password=2507)");
        embed.addField("What do I do once on the site?", "To be able to cop when they tweet the link you will have to click it as fast as possible then click purchase in the middle of the screen. A small box will pop up where you will need to autofill your name, your creditcard and your cvv.");
        embed.addField("Can I use autofill?", "Yes, google autofill works as well as some external options.");
        embed.addField("**Note**:", "They have attempted to block extension autofills the past 2 restocks, one where it would decline your payment and the last one where they used mobile pay.");
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1184203863269634048/P98ia02p_400x400.jpg');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "cyber"
}
