const Discord = require("Discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE.MEMBERS")) return message.reply("**You dont have permissions to do that**")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("`Cloudn't find the member`");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("**Specify a role!**");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("```Coudn't find the role...```");

    if(rMember.roleshas(gRole.id));
    await(rMember.addRole(gRole.id));

    try{
        rMember.send(`You has been give the role ${gRole.name}`)
    }catch(e) {
        message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name}`)
    }
}

module.exports.help = {
    name: "addrole"
}