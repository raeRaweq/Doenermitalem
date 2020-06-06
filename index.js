const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '#';

var version = '1.0'

bot.on('ready', () => {
    console.log('ein mal Döner mit allem bitte!')
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'youtube':
            message.reply('Raweq auf YouTube : https://www.youtube.com/channel/UC0AmoR_u5UVHaJF_AMccZHg');
            break;
        case 'bewerben':
            message.reply('Hier kannst du dich bewerben: https://forms.gle/5JEdANX2RHVXHQDc7');
        case 'verify':
            message.reply('Hier kannst du dich verifizieren: https://forms.gle/Q1dbektjhLM6um7Q7');
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('Version ' + version + ' by Raweq');
            } else {
                message.reply('ungültiger Befehl')
            }
            break;
        case 'clear':
            if (!args[1]) return message.reply('Ups! Es ist ein Fehler unterlaufen!(#clear [nummer]')
            message.channel.bulkDelete(args[1]);
            break;


    }
})

bot.login(process.env.token);