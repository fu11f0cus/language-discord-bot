const { db, english_A1_vocabulary_questions, wordKnowledgeTablePushing } = require('../../../db.js');
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

const selectCount = (word, userId) => {
    db.get(`SELECT word, answers FROM ${userId} WHERE word = ?`, [word], (err, row) => {
        if (err) {
            console.error(err);
        }
        console.log(row.answers);
    })
}

const randomWord = (interaction) => {
    const random = Math.round(Math.random() * 533);
    db.get(`SELECT * FROM english_A1_word_questions LIMIT 1 OFFSET ${random - 1}`, (err, row) => {
        if (err) {
            console.error(err);
        }
        const word = row.word;
        const option1 = row.option1;
        const option2 = row.option2;
        const option3 = row.option3;
        const correct = row.correct;
        const embed = new EmbedBuilder()
            .setTitle(`${word}`)
            .setDescription(`A: ${option1} \nB: ${option2} \nC: ${option3}`)

        const buttons = new ActionRowBuilder();
        buttons.addComponents(new ButtonBuilder().setLabel('A').setStyle(ButtonStyle.Primary).setCustomId('1'));
        buttons.addComponents(new ButtonBuilder().setLabel('B').setStyle(ButtonStyle.Primary).setCustomId('2'));
        buttons.addComponents(new ButtonBuilder().setLabel('C').setStyle(ButtonStyle.Primary).setCustomId('3'));

        interaction.channel.send({ embeds: [embed], components: [buttons]}).then(() => {
            const filter = (buttonInteraction) => buttonInteraction.customId === '1' || buttonInteraction.customId === '2' || buttonInteraction.customId === '3';
            interaction.channel.awaitMessageComponent({ filter, time: 15000 })
            .then((buttonInteraction) => {
                const userAnswer = buttonInteraction.customId;
                if (userAnswer == correct) {
                    buttonInteraction.reply('correct');
                    wordKnowledgeTablePushing(word, true, `${interaction.user.username}_${interaction.user.id}`);
                    selectCount(word, `${interaction.user.username}_${interaction.user.id}`);
                }
                else {
                    buttonInteraction.reply('incorrect');
                    wordKnowledgeTablePushing(word, false, `${interaction.user.username}_${interaction.user.id}`);
                }
            })
        })
    })
}

const getRandomWord = () => {
    let test = '';
    const random = Math.round(Math.random() * 602);
    db.get(`SELECT * FROM english_A1_vocabulary LIMIT 1 OFFSET ${random - 1}`, (err, row) => {
        if (err) {
            console.error(err);
        }
        test = row.translate
    })
}

const allWordsTest = () => {
    const random = Math.round(Math.random() * 602);
    const random2 = Math.round(Math.random() * 602);
    const random3 = Math.round(Math.random() * 602);
    const randomCorrect = Math.round(Math.random() * 3);
    let word, a, b, c, correct;
    db.get(`SELECT * FROM english_A1_vocabulary LIMIT 1 OFFSET ${random - 1}`, (err, row) => {
        if (err) {
            console.error(err);
        }
        word = row.word;
        correct = row.translate;
    })
    db.all("SELECT * FROM english_A1_vocabulary", (err, row) => {
        if (err) {
            console.error(err);
        }
        for (let i = 0; i < row.length; i++) {
            if (i == random) {
                a = row[i].translate;
            }
            if (i == random2) {
                b = row[i].translate;
            }
            if (i == random3) {
                c = row[i].translate;
            }
        }
        if (randomCorrect == 1) {
            a = correct;
            correct = 1;
        }
        else if (randomCorrect == 2) {
            b = correct;
            correct = 2;
        }
        else {
            c = correct;
            correct = 3;
        }
        let obj = {
            mainWord: word,
            option1: a,
            option2: b,
            option3: c,
            mainCorrect: correct,
        }
        // english_A1_vocabulary_questions(obj);
    })
}


module.exports = {
    randomWord,
    allWordsTest
}