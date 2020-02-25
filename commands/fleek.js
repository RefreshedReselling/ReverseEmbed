const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'fleek')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
            
        embed.setTitle("Fleek - Restock Guide");
        embed.setURL('https://twitter.com/FleekFramework');
        embed.setDescription("Retail - 200€ (~$222 USD)");
        embed.addField("Payment Method", "Stripe", true);
        embed.addField("Website", "https://fleekframework.com", true);
        embed.addField("How do they restock?", "Fleek framework usually restocks by tweeting a direct link to their page (including the password in the link).");
        embed.addField("What do I do once on the site?", "A purchase button will be in the middle of the screen. After clicking purchase if you get through to payment it means you secured the checkout, since they have carthold!");
        embed.addField("Can I use autofill?", "Payment method is stripe so you can use google autofill alongside your autofill extensions.");
        embed.addField("**Note**:", "Most of the time they shockdrop even on some of the developers/owners twitter accounts!");
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1169535319617802240/qYovczCz_400x400.png');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "fleek"
}
