const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'f3')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
            
        embed.setTitle("F3ather - Restock Guide");
        embed.setURL('https://twitter.com/F3ather');
        embed.setDescription("Retail - $150 - then $100/season");
        embed.addField("Payment Method", "Paypal through Shopify", true);
        embed.addField("Website", "https://f3ather.io", true);
        embed.addField("How do they restock?", "Method - They usually tweet a link (pw included in the link) but have also sometimes posted a password.");
        embed.addField("What do I do once on the site?", "When you access the page, you will need to click “Supreme Bots” up in the right corner then click supreme, it will promt you to a product page where thers usually just 1 product. After clicking on the product, you will need to fill out a small box with the answer for the given question which could be: “Are you a bot”, “What did we just release”, which for the answers would be (no, mobile app).");
        embed.addField("Can I use autofill?", "The checkout page is shopify, so all extensions should work perfectly including google autofill!");
        embed.addField("**Note**:", "Make sure to login to paypal in a different tab, and set an autorefresher to a few minutes so that you dont get logged out while proceeding to checkout!");
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1178455787460612101/J-Pk_9lr_400x400.jpg');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "f3"
}
