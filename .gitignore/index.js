const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help")
    console.log("Connectedç")
})

bot.login("process.env.TOKEN")


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -*help")
    }

    if(message.content === "salut"){
        message.reply("Bien le bonjour. (ceci est un test)")
        console.log("Commande Salut effectué")
    }
})
