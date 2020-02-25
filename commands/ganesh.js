const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'ganesh')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
            
        embed.setTitle("Ganesh - Restock Guide");
        embed.setURL('https://twitter.com/Ganeshbot');
        embed.setDescription("Retail - 200€ (~$222 USD)");
        embed.addField("Payment Method", "Stripe", true);
        embed.addField("Website", "https://ganeshbot.com", true);
        embed.addField("How do they restock?", "Ganesh usually restocks by tweeting a direct link to their page (including the password in the link).");
        embed.addField("What do I do once on the site?", "A purchase button will be in the middle of the screen. After clicking purchase if you get through to payment it means you secured the checkout, since they have carthold!");
        embed.addField("Can I use autofill?", "Payment method is stripe so you can use google autofill alongside your autofill extensions.");
        embed.addField("**Note**:", "They have tweeted out an invites to restock servers before, where the password would for example be one of the channels names inside of that discord server! You would need to put it in front of this link ganeshbot.com/?password=");
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1172564159294316544/bVcP_UQA_400x400.png');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "ganesh"
}
