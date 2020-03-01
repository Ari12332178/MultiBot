module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "mod",
    description: "Pong!",
    run: async (bot, msg, args) => {
        const sayMessage = args.join(" ");
        msg.delete().catch(O_o=>{}); 
        msg.channel.send(sayMessage);
    }
}