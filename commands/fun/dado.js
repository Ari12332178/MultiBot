const { RichEmbed } = require('discord.js');
module.exports = {
    name: "dado",
    aliases: ["roll", "dice"],
    category: "fun",
    description: "Roll a number",
    run: async (bot, msg, args) => {
        if(!args[0]){
            let number = 10;
            var response = [Math.floor(Math.random() * ((number - 1) + 1) + 1)];
            
            const embed = new RichEmbed()
            .setTitle("Dado girado!")
            .setAuthor(msg.author)
            .setDescription("Um dado foi sorteado, qual o numero?")
            .setImage('https://ya-webdesign.com/images600_/falling-dice-png.png')
            .addField("Numero maximo", number)
            .addField("Numero sorteado", response)

            msg.channel.send(embed);
        }else{
            let number = args[0];

            if(isNaN(number)) return msg.reply('O argumento precisa ser um número!');

            var response = [Math.floor(Math.random() * ((number - 1) + 1) + 1)];
            
            const embed = new RichEmbed()
            .setTitle("Dado girado!")
            .setFooter(`${msg.author.tag} - ${msg.author.id}`, msg.author.avatarURL)
            .setDescription("Um dado foi sorteado, qual o numero?")
            .setImage('https://ya-webdesign.com/images600_/falling-dice-png.png')
            .addField("Numero maximo", number)
            .addField("Numero sorteado", response)
            .setTimestamp()

            msg.channel.send(embed);
        }
    }
}