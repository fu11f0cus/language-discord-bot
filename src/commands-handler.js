const { db, userLogin } = require('../db.js');
const { loginPoints } = require('./points/points.js');
const { TriviaManager } = require('discord-trivia');
const { quizBuilder } = require('./quiz/eng_level_quiz.js');

const slashCommandsHandler = (interaction) => {
    const { options } = interaction;
    if (interaction.commandName == 'login') {
        const id = interaction.user.id;
        const username = interaction.user.username;
        const globalName = interaction.user.globalName;
        userLogin(id, username, globalName, 0);
        db.each("SELECT id FROM users", (err, row) => {
            if (err) {
                console.error(err);
            }
            if (id != row.id) {
                interaction.reply('Thanks for registration!');
            }
            else {
                interaction.reply('You are already registered!');
            }
        })
    }
    if (interaction.commandName == 'my-points') {
        db.each("SELECT id, points FROM users", (err, row) => {
            if (err) {
                console.error(err);
            }
            interaction.reply(`You have ${row.points} points`);
        })
    }
    if (interaction.commandName == 'daily') {
        loginPoints(interaction.user.id);
        interaction.reply('You just received 10 points. Claim another 10 points in 24 hours');
    }
    if (interaction.commandName == 'eng-level-test' && options.getString('language') == 'english') {
        quizBuilder(interaction);
    }

};

module.exports = {
    slashCommandsHandler,
}