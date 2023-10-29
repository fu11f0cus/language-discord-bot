const { config } = require('dotenv');
const { Client, GatewayIntentBits, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { TriviaManager } = require('discord-trivia');
const { CategoryNames, CustomQuestionBuilder, QuestionDifficulties } = require('discord-trivia');
const { eng_questions } = require('./src/questions-and-commands/level_test_questions.js');
const { commands } = require('./src/questions-and-commands/commands.js');
const { userLogin, db } = require('./db.js');
const { quizBuilder, answerHandler } = require('./src/quiz/eng_level_quiz.js');
const { loginPoints } = require('./src/points/points.js');
const { slashCommandsHandler } = require('./src/commands-handler.js');

config();

// xcode default dark custom version
// one dark dark+

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.login(TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
})


client.on('interactionCreate', (interaction) => {
    const { options } = interaction;
    slashCommandsHandler(interaction);
    if (interaction.isButton()) {
        answerHandler(interaction);
    }
})


async function main() {
    try {
        console.log('started refreshing application (/) commands.')
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: commands,
        });
        client.login(TOKEN);
    } catch(err) {
        console.log(err);
    }
}

main();