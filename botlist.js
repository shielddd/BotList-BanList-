const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
    if(message.content.startsWith('#botlist')){
        if(!message.member.hasPermission("ADMINISTRATOR")){   return message.lineReply(`${emojis.general.warning} Vous n'avez pas la permission requise \`ADMINISTRATOR\``);
            }
        
            const members = await message.guild.members.fetch();
            const bots = members.filter(m => m.user.bot);
            const names = bots.map(m => `\`\`\`\n${m.user.tag}: ${m.user.id}\`\`\``);
                
                const embed = new Discord.MessageEmbed()
                .setTitle(`Nombre de bots: ${bots.size}.`)
                .setDescription(names.join("\n") || "Aucun bot.")
                .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
                message.channel.send(embed)
        }
    })

client.login('token')
