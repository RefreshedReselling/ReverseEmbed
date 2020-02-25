const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;
module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'purge')
    {
        if(!args[0]) return message.channel.send("Please provide a number of messages to purge.");
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Purged ${args[0]} messages.`).then(msg => msg.delete(5000));
        });
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "purge"
}
