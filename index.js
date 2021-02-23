const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json")
const d1 = require("./DataBase/d1.json");
const d2 = require("./DataBase/d2.json");
const d3 = require("./DataBase/d3.json");
const bvn = require("./DataBase/Commande/Bienvenue.json")
const fs = require('fs');

bot.on("ready", async () =>{
    console.log("Bot On");
    bot.user.setActivity(",Help", {type: 'WATCHING'});
});

function Saved1() {
    fs.writeFile("./DataBase/d1.json", JSON.stringify(d1, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue sur d1.");
    });
}

function Saved2() {
    fs.writeFile("./DataBase/d2.json", JSON.stringify(d2, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue sur d2.");
    });
}

function Saved3() {
    fs.writeFile("./DataBase/d3.json", JSON.stringify(d3, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue sur d3.");
    });
}

bot.on("message", message =>{
    
    if(message.content.startsWith("/wd1")){
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 5){
                wd1 = message.content.slice(4)
                console.log(d1)
                d1["d1"] = wd1
                Saved1()
            }
        }
    }

    if(message.content.startsWith("/wd2")){
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 5){
                wd2 = message.content.slice(4)
                console.log(d2)
                d2["d2"] = wd2
                Saved2()
            }
        }
    }

    if(message.content.startsWith("/wd3")){
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.content.length > 5){
                wd3 = message.content.slice(4)
                console.log(d3)
                d3["d3"] = wd3
                Saved3()
            }
        }
    }

    if(message.content.startsWith("/rd1")){
        if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send(d1.d1)
        }
    }

    if(message.content.startsWith("/rd2")){
        if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send(d2.d2)
        }
    }

    if(message.content.startsWith("/rd3")){
        if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.send(d3.d3)
        }
    }

    if(message.content.startsWith(",Help")){
        message.channel.send("Pour écrire sur une base de donnée faite (/wd) et le numéro de la base donnée, pour lire une base de donnée faite (/rd) et le numéro de la base de donnée")
    }
})

bot.on("guildMemberAdd", member =>{
    member.send(bvn)
})

bot.login(token.token);