const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'balko')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
            
        embed.setTitle("Balko - Restock Guide");
        embed.setURL('https://twitter.com/balkobot');
        embed.setDescription("Retail - 360$/year");
        embed.addField("Payment Method", "Paypal through Shopify", true);
        embed.addField("Website", "https://shop.balkobot.com", true);
        embed.addField("How do they restock?", "Most of the time, they just tweet when the restock is live, the “stay tuned” text turns into a button saying click here to access store, as shown below! As they announce almost every restock, i suggest that a few seconds before the drop that you refresh the password page repeatedly while also keeping an eye on the monitor just incase they change up the method, since they have done that before.");
        embed.addField("What do I do once on the site?", "After getting through the page there will be a add to cart button in the right of the screen, once going to checkout, if you were fast enough you will not get any type of queue and will go straight to shopify checkout page");
        embed.addField("Can I use autofill?", "Yes, the checkout is through shopify, so most extensions should work as well as google autofill");
        embed.addField("**Note**:", "Login to paypal prior to the restock and have the page autorefreshing, so you do not have to sign in during the restock, wasting time.");
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1177062169231405056/9whojPiW_400x400.jpg');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "balko"
}
