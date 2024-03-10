module.exports = {
  kod: "kick",
   async run (client, message, args) {
     if (!message.member.hasPermission('KİCK_MEMBERS')) return message.reply("`Lan Yetkin Yok Yetki Alda Gel Tek Gelirim Tek Giderim `")
    const  args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require ('discord.js')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('opsiyonel')
          .then(() => {
           const kanal = message.guild.channels.find(ch => ch.name === 'kick-log')
           const embed = new MessageEmbed()
           .setTitle('Herkes Arzularken Ben Siker Geçerim')
           .setDescription('Contra Farkıyla `Kickledim` ')
           .addField('Kicklediğim Eleman:', member)
           .addField('Neden Kickledim', neden)
           kanal.send(embed)
          })
          .catch(err => {
            message.reply('Herkes Arzularken Ben ** Geçerim :middle_finger: ');
            console.error(err);
          });
      } else {
        message.reply("ERROR!");
      }
    } else {
      message.reply("ERROR!");
    }
 }
}
