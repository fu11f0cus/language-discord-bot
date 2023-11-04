const { db, userLogin } = require('../db.js');
const { loginPoints, checkMyPoints } = require('./points/points.js');
const { quizBuilder } = require('./quiz/eng_level_quiz.js');
const { getUserLevel } = require('../db.js');

const DAY = 86400;

const slashCommandsHandler = async (interaction) => {
    const { options } = interaction;
    if (interaction.commandName == 'login') {
        const id = interaction.user.id;
        const username = interaction.user.username;
        const globalName = interaction.user.globalName;
        const sql = "SELECT COUNT(*) AS count FROM users WHERE id = ?";
        db.get(sql, id, (err, row) => {
            if (err) {
                console.error(err);
            }
            if (row.count > 0) {
                interaction.reply(`${username}, you are already registered!`);
            }
            else {
                userLogin(id, username, globalName, 0);
                interaction.reply(`${username}, thanks for registration!`);
            }
        })
    }
    if (interaction.commandName == 'my-points') {
        checkMyPoints(interaction, interaction.user.id);
    }
    if (interaction.commandName == 'daily') {
        loginPoints(interaction.user.id);
        interaction.reply('You just received 10 points. Claim another 10 points in 24 hours');
    }
    if (interaction.commandName == 'language-level-test' && options.getString('language') == 'english') {
        interaction.reply('Starting test. You have 15 seconds for each question.');
        quizBuilder(interaction);
    }
    if (interaction.commandName == 'my-level' && options.getString('language') == 'english') {
        getUserLevel(interaction, interaction.user.id);
    }

};

module.exports = {
    slashCommandsHandler,
}