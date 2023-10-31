const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ButtonInteraction } = require('discord.js');
const { eng_level_test } = require('../questions-and-commands/level_test_questions');


const quizBuilder = function(interaction, index = 0) {
    if (index >= eng_level_test.length) {
        interaction.reply('Test completed');
        return;
    }

    let questionData = eng_level_test[index];
    let question = questionData.question;
    let option1 = questionData.option1;
    let option2 = questionData.option2;
    let option3 = questionData.option3;
    let correct = questionData.correct;

    const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`${question}`)
        .setDescription(`\nA: ${option1}\nB: ${option2}\nC: ${option3}`)
        .setTimestamp()

    const buttons = new ActionRowBuilder();
    buttons.addComponents(new ButtonBuilder().setLabel('A').setStyle(ButtonStyle.Primary).setCustomId('1'));
    buttons.addComponents(new ButtonBuilder().setLabel('B').setStyle(ButtonStyle.Primary).setCustomId('2'));
    buttons.addComponents(new ButtonBuilder().setLabel('C').setStyle(ButtonStyle.Primary).setCustomId('3'));

    interaction.channel.send({ embeds: [embed], components: [buttons]}).then(() => {
        const filter = (buttonInteraction) => buttonInteraction.customId === '1' || buttonInteraction.customId === '2' || buttonInteraction.customId === '3';
        interaction.channel.awaitMessageComponent({ filter, time: 15000 })
        .then((buttonInteraction) => {
            const userAnswer = buttonInteraction.customId;
            console.log('user - ' + userAnswer);
            console.log('correct - ' + correct);
            if (userAnswer == correct) {
                interaction.followUp('correct')
            }
            else {
                interaction.followUp('incorrect');
            }
            setTimeout(() => quizBuilder(interaction, index + 1), 2000)
        })
        .catch(() => {
            interaction.followUp('time is up!')
            setTimeout(() => quizBuilder(interaction, index + 1), 2000);
        })
    })
}
// const quizBuilder = function(interaction) {
//     interaction.reply('Starting test...');
//     for (let i = 0; i < 3; i++) {
//         let question = eng_level_test[i].question;
//         let option1 = eng_level_test[i].option1;
//         let option2 = eng_level_test[i].option2;
//         let option3 = eng_level_test[i].option3;
//         let correct = eng_level_test[i].correct;
//         let ready = `${question}\n${option1}\n${option2}\n${option3}\n${correct}`;

//         const embed = new EmbedBuilder()
//             .setColor(0x0099FF)
//             .setTitle(`${question}`)
//             .setDescription(`\nA: ${option1}\nB: ${option2}\nC: ${option3}`)
//             .setTimestamp()
    
//         const buttons = new ActionRowBuilder();
//         buttons.addComponents(new ButtonBuilder().setLabel('A').setStyle(ButtonStyle.Primary).setCustomId('1'));
//         buttons.addComponents(new ButtonBuilder().setLabel('B').setStyle(ButtonStyle.Primary).setCustomId('2'));
//         buttons.addComponents(new ButtonBuilder().setLabel('C').setStyle(ButtonStyle.Primary).setCustomId('3'));

//         setTimeout(() => {
//             interaction.channel.send({ embeds: [embed], components: [buttons]});
//         }, 5000);
//     }
// }

const answerHandler = function(interaction) {
    const id = interaction.customId;
    console.log(id);
}

module.exports = {
    quizBuilder,
    answerHandler
}