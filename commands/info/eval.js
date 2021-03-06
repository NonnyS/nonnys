const { RichEmbed } = require("discord.js");
const beautify = require("beautify");

module.exports = {
    name: "eval",
    aliases: ["e"],
    description: "Evaluates the code you put in",
    usage: "<code to eval>",
    run: async (client, message, args) => {
        if (message.author.id !== "460030310126583808") {
            return message.channel.send("**You are not the owner of this bot!**")
                .then(m => m.delete(5000))
        }
        
        if (args[0]) {
            message.channel.send("**You need to evaluate** __**SOMETHING**__**, please???**")
                .then(m => m.delete(1000))
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }
        
            const toEval = args.join(" ");
            const  evaluated = eval(toEval);

            let embed = new RichEmbed()
                .setColor("#00FF00")
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTitle("Eval")
                .addField("To", `\`\`\`js\n${beautify(args.join(" "), {format: "js" })}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type of:", typeof(evaluated));

              message.channel.send(embed);              
        } catch (e) {  
            let embed =  new RichEmbed() 
                .setColor("#FF0000")
                .setTitle("\:x: Error!")
                .setDescription(e)
                .setFooter(client.user.username, client.user.displayAvatarURL);

            message.channel.send(embed);
        }
    }
}