const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { eng_level_test } = require('../questions-and-commands/level_test_questions');


const quizBuilder = function(interaction) {
    for (let i = 0; i < 3; i++) {
        let question = eng_level_test[i].question;
        let option1 = eng_level_test[i].option1;
        let option2 = eng_level_test[i].option2;
        let option3 = eng_level_test[i].option3;
        let correct = eng_level_test[i].correct;
        let ready = `${question}\n${option1}\n${option2}\n${option3}\n${correct}`;

        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`${question}`)
            .setDescription(`\nA: ${option1}\nB: ${option2}\nC: ${option3}`)
            .setTimestamp()
    
        const buttons = new ActionRowBuilder();
        buttons.addComponents(new ButtonBuilder().setLabel('A').setStyle(ButtonStyle.Primary).setCustomId('1'));
        buttons.addComponents(new ButtonBuilder().setLabel('B').setStyle(ButtonStyle.Primary).setCustomId('2'));
        buttons.addComponents(new ButtonBuilder().setLabel('C').setStyle(ButtonStyle.Primary).setCustomId('3'));

        setTimeout(() => {
            interaction.channel.send({ embeds: [embed], components: [buttons]});
        }, 5000);
    }
}

const answerHandler = function(interaction) {
    const id = interaction.customId;
    console.log(interaction);
    console.log(id);
}

module.exports = {
    quizBuilder,
    answerHandler
}