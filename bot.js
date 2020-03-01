const { Client, RichEmbed, Collection} = require('discord.js');
const config = require('./config/config')
const bot = new Client({
    disableEveryone: true
});

bot.commands = new Collection();
bot.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot); 
})

bot.on('ready', () => {
    console.log(`${bot.user.tag} está pronto para receber comandos.`)
})

bot.on('message', async (msg) => {
    let prefix = config.prefix;
    if (msg.author.bot) return;
    if (!msg.guild) return;
    if (!msg.content.startsWith(prefix)) return;

    if(msg.content.includes(`<@${bot.user.id}>`)){
        msg.reply(`Oi, eu sou o ${bot.user.username}, meu comando de ajuda é ` + "``" + prefix + "ajuda" + "``")
        return;
    }
    if (!msg.member) msg.member = await msg.guild.fetchMember(msg);

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));

    if(command){
        command.run(bot, msg, args)
    }
})

bot.login(config.token)