const { RichEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    aliases: ["banir"],
    category: "mod",
    description: "Banir um usuário.",
    run: async (bot, msg, args) => {
        const args = msg.content.split(' ').slice(1);
​
        const user = msg.mentions.users.first();
        const banReason = args.slice(1).join(' ');
        ​
        if (!user) {
        try {
            if (!msg.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Não encontrei o ID do usuário!');
                user = msg.guild.members.get(args.slice(0, 1).join(' '));
                user = user.user;
            } catch (error) {
                return msg.reply('Não encontrei o ID do usuário!');
            }
        }
        if (user === msg.author) return msg.channel.send('Você não pode se banir. 🤦‍♂️');
        if (!reason) return msg.reply('Digite o motivo do banimento!');
        if (!msg.guild.member(user).bannable) return msg.reply('Eu não tenho as permissões suficientes para banir este usuário');
        ​
        await msg.guild.ban(user)
        ​
        const Discord = require('discord.js');
        const banEmbed = new RichEmbed()
        .setColor('RED')
        .setDescription(`✅ ${user.tag} foi banido com sucesso!`);
        msg.channel.send(banEmbed);
    }
}