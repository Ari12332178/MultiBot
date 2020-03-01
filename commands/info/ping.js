module.exports = {
    name: "ping",
    category: "info",
    description: "Pong!",
    run: async (bot, msg, args) => {
        const message = await msg.channel.send(`Pong!`)

        message.edit(`Pong!\nLatencia é ${Math.floor(message.createdAt - msg.createdAt)}ms\nLatencia da API é de ${Math.round(bot.ping)}ms`)
    }
}