const { db } = require('../db.js');
const { loginPoints } = require('./points/points.js');
const { TriviaManager } = require('discord-trivia');
const { quizBuilder } = require('./quiz/eng_level_quiz.js');

const slashCommandsHandler = (interaction) => {
    const { options } = interaction;
    if (interaction.commandName == 'my-points') {
        loginPoints(interaction);
        db.each("SELECT id, points FROM users", (err, row) => {
            if (err) {
                console.error(err);
            }
            interaction.reply(`You have ${row.points} points`);
        })
    }
    if (interaction.commandName == 'langtest' && options.getString('language') == 'english') {
        const game = trivia.createGame(interaction);
        TriviaOptions(game);
        game.setCustomQuestions(eng_questions);
        game.setup()
        .catch(console.error);
    }
    if (interaction.commandName == 'eng-level-test') {
        quizBuilder(interaction);
    }
};

module.exports = {
    slashCommandsHandler,
}