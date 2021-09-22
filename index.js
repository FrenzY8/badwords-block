const Discord = require('discord.js');
const client = new Discord.Client();
// LOADED THE CONFIGS
const config = require("./config.json");
const { FILTER_LIST, BOT_TOKEN } = require('./config.json');
// logged in to the bot
client.login(config.BOT_TOKEN).catch(console.log("Invalid token!"));
// succesfully, if you wanted use env, of course you can!
client.on("ready", () => {
  console.log(`Iam Ready => via github.com/FrenzY8`);
console.log(`Logged in as ${client.user.tag}`)
});
// first command, wait, i told you, this not a command bot, just a delete messages
client.on('message', message => {
  if(message.content.startsWith('!help')) { // wil sending you a filter list / words that blocked in your server
    message.author.send(`
    
My List Words :
${FILTER_LIST}    
    
    `)
  }

})
// this gay, if any command detected with filter list, bye auto die, jk lol. thats message will be deleted
client.on('message', async message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete() // delete the message ( DISCORD JS V11 )
    console.log(`>> Message from ${message.author.tag} in ${message.guild.name} has been deleted cause included wrong words`);
// if you want the bot sending message after delete message =>
    // message.channel.send("i have deleted your messagess cause included Badwords in my ```config.json```");
    
// or you want to warn the user via dm =>
    // message.author.send("im beggins to you, please dont toxic anymores!")
  }})
