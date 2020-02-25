const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'mek')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
    
        embed.setTitle("Mekpreme - Restock Guide");
        embed.setURL('https://twitter.com/MekRobotics');
        embed.addField("Payment Method", "Stripe invoice", true);
        embed.addField("Website", "https://mekrobotics.com", true);
        embed.setDescription("Retail - $168");
        embed.addField("How do they restock?", "In most cases, Mek restocks through a raffle format.");
        embed.addField("What is the format?", "During a raffle, they ask for your email, twitter, and then typically a math question (EX: What is 2+2?)");
        embed.addField("What about if it is FCFS?", "If they choose to do FCFS, same format as raffle, but it is first people to get through will be emailed an invoice.")
        embed.setThumbnail('https://images.squarespace-cdn.com/content/v1/5d521fe55fbb18000193bb8e/1565666471305-B01BSU47ZLRT1EB8KCDM/ke17ZwdGBToddI8pDm48kJ-iXUMiALsiCqMow8k6utl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmXIZ66LEW7qVrHuEzDKwcZLJQJnzBktHb7C38hLhauKf_9wJZhRvyMuxBngDLj2xm/mekpreme.png');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "mek"
}   
