const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const { FILTER_LIST, BOT_TOKEN } = require('./config.json');

client.login(config.BOT_TOKEN).catch(console.log("Invalid token!"));
client.on("ready", () => {
  console.log(`Iam Ready => via github.com/FrenzY8`);
console.log(`Logged in as ${client.user.tag}`)
});

client.on('message', message => {
  if(message.content.startsWith('!help')) {
    message.author.send(`
    
My List Words :
${FILTER_LIST}    
    
    `)
  }

})

client.on('message', async message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    console.log(`>> Message from ${message.author.tag} in ${message.guild.name} has been deleted cause included wrong words`);
// if you want the bot sending message after delete message =>
    // message.channel.send("i have deleted your messagess cause included Badwords in my ```config.json```");
    
// or you want to warn the user via dm =>
    // message.author.send("im beggins to you, please dont toxic anymores!")
  }})
