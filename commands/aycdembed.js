const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR"))
    if (message.content === prefix + 'aycdembed')
    {
        message.delete()
        const embed = new Discord.RichEmbed();
            
        embed.setTitle("AYCD Parnership");
        embed.setURL('https://twitter.com/AYCDIO');
        embed.setDescription("AYCD has given us the opportunity to purchase their line of products at a discounted rate.");
        embed.addField("__**One Click Tool**__\n", "- Generate Oneclicks\n- Built in automated gmail forwarder\n- Randomized Google Account Activity\n- Ran on a Built in Automatic Schedule\n- Google News / Shopping / Images / Youtube / Search Scripts\n- Run Unlimited Accounts");
        embed.addField("__**Spoof By AYCD**__\n", "- Location Spoofer\n- Compatible With ANY Website\n- Autofill for YeezySupply/Adidas/Snkrs with more sites being added frequently\n- Easily enter SNKRS accounts\n- Unlimited Browsers\n- Proxy Support ");
        embed.addField("__**Profile and Billing Converter**__\n", "- Import Billings From Different Bots\n- Grouped Billing Management\n- Export Options For Most Bots\n- Built-in J1gg1ng Tools and mass profile j1g options.\n- Automatic Import for Google Forms");
        embed.addField("__**Server/Proxy Generator/Tester**__\n", "- AWS / GCS support for server generator\n- Easily make servers with the press of a button\n- AWS / GCS / Linode / Digital Ocean / Upcloud support for proxy generator\n- Access to AYCD Residential proxies at a 35% discount");
        embed.addField("\n__**Our price?**__", "$23 / month instead of $30 / month ");
        embed.addField("**Note**:", 'To purchase, DM <@606066581415526410> with the command:\n_**!buyaycd**_');
        embed.setThumbnail('https://pbs.twimg.com/profile_images/1214052590398234624/o-uOX6Wo_400x400.png');
        message.channel.send({embed});
    }
    else
    {
        message.channel.send("Sorry, but you don't have permission to run that command.");
    }
}

module.exports.help = {
    name: "aycdembed"
}