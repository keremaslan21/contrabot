module.exports = {
  kod: "ban",
   async run (client, message, args) {
     if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("`Lan Yetkin Yok Yetki Alda Gel Tek Gelirim Tek Giderim `")
    const  args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require ('discord.js')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'reddedildi',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Herkes Arzularken Ben **  Geçerim :sunglasses:  Tekmelediğim Herif ${user.tag} :middle_finger: `);
          })
          .catch(err => {
            message.reply('Herkes Arzularken Ben ** Geçerim :sunglasses:');
            console.error(err);
          });
      } else {
        message.reply("ERROR!");
      }
    } else {
      message.reply("ERROR!");
    }
 }
};
