const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "+"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setActivity('AK-47 dEki mErmi yErinE hAğk bAlgAm')
    console.log('Botumuz Aktif')
});

client.on('guildCreate', async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Contrayı Sunucuna Eklediğin İçin Teşekkürler')
  .setDescription('Sunucu Adı: `' + guild.name + '`')
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Bir Reis Beni Sunucusuna Ekledi!')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı: ' + guild.memberCount)
  .addField('Sunucu Sahibi: ' + guild.owner)
  .setThumbnail(guild.iconURL)
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '800316784426745888')
  channel.send(embed2)
})

client.on('guildDelete', async guild => {
  const embed1 = new Discord.MessgeEmbed()
  .setTitle('Aga Çıkardın Sunucudan Üzdü')
  .setDescription('Sunucu Adı: `' + guild.name + '`')
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Biri Beni Sunucusundan Çıkardı :cry: ')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı: ' + guild.memberCount)
  .addField('Sunucu Sahibi: ' + guild.owner)
  .setThumbnail(guild.iconURL)
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '800316784426745888')
  channel.send(embed2)
})



client.on('message', msg => {
 if (msg.content.toLowerCase() ===  'ismail') {
   msg.channel.send('**aMıNa kOduMun KarIsı lahMaCun yeMiş beNde iYi teMizLeyEmeMiŞim**');
 }
});



client.on("guildMemberAdd", member => {
 let role = member.guild.roles.cache.find(role => role.name === 'üye')
 member.roles.add(role);
});






client.on('message', msg => {
 if (msg.content.toLowerCase() === prefix + 'contraadam') {
   msg.react('😻')
   msg.channel.send('biR ContRa aTaSözü : kEnDiMe bilE yoK sAygım');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'mk') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'amk') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'ank') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'yarra') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'yarrak') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'anan') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'ananı') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'sik') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'babanı') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'amck') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'amcık') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'orspu') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'orospu') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'oç') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'ananı skm') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'ananı sikiyim') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'ananskm') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'piç') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'pç') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'sikerim') {
   msg.delete()
   msg.channel.send('AYIP BE KARDEŞİM GUNAH KÜFÜR ETME !');
 }
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === prefix + 'naber') {
   msg.channel.send('İyidir Gardaş Senden Naber :wink: ');
 }
})


client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login('NzkyMzM2MjIzMTA4MzMzNTk4.X-cOnA.8a3liSfEABeyrINEuOuX5D7fOpo')
