/* 

Code With :
iMix
iCrawl
Frenzy

Visit Our Websites
frenzybotdev.odoo.com

Visit Our Discord bot (Used by 5k User)
https://top.gg/bot/880306203253698631

Visit Our 2nd bot (99 Servers)
https://top.gg/bot/884970658004619294

*/
const legends = `

████████▄   ▄█     ▄████████  ▄████████  ▄██████▄     ▄████████ ████████▄       ▄█    ▄████████ 
███   ▀███ ███    ███    ███ ███    ███ ███    ███   ███    ███ ███   ▀███     ███   ███    ███ 
███    ███ ███▌   ███    █▀  ███    █▀  ███    ███   ███    ███ ███    ███     ███   ███    █▀  
███    ███ ███▌   ███        ███        ███    ███  ▄███▄▄▄▄██▀ ███    ███     ███   ███        
███    ███ ███▌ ▀███████████ ███        ███    ███ ▀▀███▀▀▀▀▀   ███    ███     ███ ▀███████████ 
███    ███ ███           ███ ███    █▄  ███    ███ ▀███████████ ███    ███     ███          ███ 
███   ▄███ ███     ▄█    ███ ███    ███ ███    ███   ███    ███ ███   ▄███     ███    ▄█    ███ 
████████▀  █▀    ▄████████▀  ████████▀   ▀██████▀    ███    ███ ████████▀  █▄ ▄███  ▄████████▀  
                                                     ███    ███            ▀▀▀▀▀▀              
 

`
const stfu = `

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⠿⠟⠛⠻⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣆⣀⣀⠀⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠻⣿⣿⣿⠅⠛⠋⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢼⣿⣿⣿⣃⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣟⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣛⣛⣫⡄⠀⢸⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⡆⠸⣿⣿⣿⡷⠂⠨⣿⣿⣿⣿⣶⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣾⣿⣿⣿⣿⡇⢀⣿⡿⠋⠁⢀⡶⠪⣉⢸⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⡏⢸⣿⣷⣿⣿⣷⣦⡙⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣷⣦⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

`
const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors');
//const got = require('got');
const stringOne = 'This is a plain string.';
const stringTwo = 'This string is red.'.red;
const stringThree = 'This string is blue.'.blue;
const today = new Date().toLocaleDateString();
// LOADED THE CONFIGS
const config = require("./config.json");
const { FILTER_LIST, BOT_TOKEN } = require('./config.json');
// logged in to the bot
client.login(config.BOT_TOKEN).catch(console.log("Invalid token!"));
// succesfully, if you wanted use env, of course you can!
client.on("ready", () => { // spamming lol xd
  console.clear(); // spamming lol xd
  console.log(`Iam Ready => via github.com/FrenzY8`); // spamming lol xd
console.log(`Logged in as ${client.user.tag} in ${today}`) // spamming lol xd
console.log(stfu.blue) // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.log("Wait ill show good Ascii") // spamming lol xd
console.clear(); // spamming lol xd
console.log(legends.green) // spamming lol xd
console.log(`>> Logged in as ${client.user.tag} in ${today}`.blue) // spamming lol xd
console.log(">> github.com/FrenzY8". green) // spamming lol xd
console.log(">> Powered by frenzybotdev.odoo.com".blue) // spamming lol xd
console.log(">> Ascii by Frenzy".green) // spamming lol xd
});
// first command, wait, i told you, this not a command bot, just a delete messages
client.on('message', message => {
  if(message.content.startsWith('!help')) { // wil sending you a filter list / words that blocked in your server
    message.author.send(`
frenzybotdev.odoo.com
My List Words :
${FILTER_LIST}    
frenzybotdev.odoo.com

    `)
  }

})

// =======================================================================================================
// 24/7 Program (C) Websites Monitoring Frenzy
const express = require("express");
const app = express();
app.listen(() => console.log());
require('events').EventEmitter.defaultMaxListeners = 60;
app.use('/', (req, res) => {
res.send(`Created by FrenzySG\ndiscord.gg/hitzeedcooperation\nRunned in ${today}\n${legends}`);})
//ended
// =======================================================================================================

// this gay, if any command detected with filter list, bye auto die, jk lol. thats message will be deleted
client.on('message', async message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete() // delete the message ( DISCORD JS V11 )
    console.log(`>> ${today} Message from ${message.author.tag} in ${message.guild.name} has been deleted cause included wrong words`);
// if you want the bot sending message after delete message =>
    // message.channel.send("i have deleted your messagess cause included Badwords in my ```config.json```");
    
// or you want to warn the user via dm =>
    // message.author.send("im beggins to you, please dont toxic anymores!")
  }})

// Powered by frenzybotdev.odoo.com
