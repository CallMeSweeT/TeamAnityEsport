const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'a.apply') {
    	message.reply('Applied the Discord server, and now ready for the Fam');
  	}
});

client.on('message', message => {
    if (message.content === 'a.youtube') {
    	message.reply('This is Anitys youtube: https://www.youtube.com/channel/UCqehLUaBDWE2pU76SgW6eKw?view_as=subscriber');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
