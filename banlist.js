const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js")

client.on('message', async message => {
    if(message.content.startsWith('#banlist')){
    
        if (!message.guild.available) return this.client.logger.info(`Serveur "${message.guild.name}" (${message.guild.id}) est indisponible.`);
        if (!message.guild.me.hasPermission("ADMINISTRATOR"))     return message.lineReply(`Vous n'avez pas la permission requise \`ADMINISTRATOR\``);
    
    
        message.guild.fetchBans()
        .then(bans => {
          const obj = bans.map(c => ({
            user: `${c.user.id}: ${c.user.username},`
          }));
          const bList = Array.from(obj);
          if (bList.length < 1) return message.channel.send(`Il n'y a aucun utilisateur banni sur **${message.guild.name}**.`);
          let index = 0;
    
          const banlistembed = new MessageEmbed()
              .setTitle(`Liste des \`membres ban\` de *${message.guild.name}* (**${++index}**) `)
              .setDescription(`${bList.map(bl => `\`\`\`\n${bl.user}\`\`\``).join("")}`)
              .setFooter(client.user.username)
              .setTimestamp()  
         
              message.channel.send(banlistembed)
            });
        }
  client.login('token')
