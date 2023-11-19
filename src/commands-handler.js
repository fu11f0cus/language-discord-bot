const { db, userLogin, checkingForDublicates } = require('../db.js');
const { loginPoints, checkMyPoints } = require('./points/points.js');
const { quizBuilder } = require('./quiz/eng_level_quiz.js');
const { getUserLevel, getEnglishA1Rule, wordKnowledgeTable, userLevel } = require('../db.js');
const { randomWord, allWordsTest } = require('./words-to-translate/eng/english_A1_words.js');

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
                wordKnowledgeTable(`${username}_${id}`);
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
    if (interaction.commandName == 'language-level-test') {
        userLevel(interaction.user.id, 'english')
            .then((level) => {
                if (level == 'no data') {
                    if (options.getString('language') == 'english') {
                        interaction.reply('Starting test. You have 15 seconds for each question.');
                        quizBuilder(interaction);
                    }
                }
                else {
                    interaction.reply('Test is already completed!');
                }
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    }
    if (interaction.commandName == 'my-level') {
        if (options.getString('language') == 'english') {
            getUserLevel(interaction, interaction.user.id, 'english');
        }
        if (options.getString('language') == 'polish') {
            getUserLevel(interaction, interaction.user.id, 'polish');
        }
    }
    if (interaction.commandName == 'english-a1-rules') {
        if (options.getString('rule') == 'presentSimple') {
            getEnglishA1Rule(interaction, 'presentSimple');
        }
        if (options.getString('rule') == 'pastSimple') {
            getEnglishA1Rule(interaction, 'pastSimple');
        }
        if (options.getString('rule') == 'presentContinious') {
            getEnglishA1Rule(interaction, 'presentContinious');
        }
        if (options.getString('rule') == 'pastContinious') {
            getEnglishA1Rule(interaction, 'pastContinious');
        }
    }
    if (interaction.commandName == 'word') {
        randomWord(interaction);
    }
};

module.exports = {
    slashCommandsHandler,
}