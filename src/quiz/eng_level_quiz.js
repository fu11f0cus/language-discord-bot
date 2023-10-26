const { EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { eng_level_test } = require('../questions-and-commands/level_test_questions')


const quizBuilder = function() {
    for (let i = 0; i < eng_level_test.length; i++) {
        let question = eng_level_test[i].question;
        let option1 = eng_level_test[i].option1;
        let option2 = eng_level_test[i].option2;
        let option3 = eng_level_test[i].option3;
        let correct = eng_level_test[i].correct;
        let ready = `${question}\n${option1}\n${option2}\n${option3}\n${correct}`;
        console.log(ready);
    }
}

module.exports = {
    quizBuilder,
}