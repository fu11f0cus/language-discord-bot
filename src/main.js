import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { TriviaManager } from 'discord-trivia'
import { CategoryNames, CustomQuestionBuilder, QuestionDifficulties } from 'discord-trivia'
import { eng__questions } from '../questions/level_test_questions.js'

config();

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

const trivia = new TriviaManager();

const questions = [
    new CustomQuestionBuilder.Boolean()
    .setValue('true or false')
    .setCorrectAnswer('true'),
    new CustomQuestionBuilder.Multiple()
    .setValue('choose an answer')
    .setCorrectAnswer('roflan')
    .setIncorrectAnswers(['loh', 'xz', 'idk'])
]

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.login(TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
})

function TriviaOptions(game) {
    game.setGameOptions({
        minPlayerCount: 1
    })
    game.setQuestionOptions({
        amount: 1
    })
}

client.on('interactionCreate', (interaction) => {
    if (interaction.commandName == 'order') {
        let food = interaction.options.getString('food');
        let drink = interaction.options.getString('drink');
        interaction.reply({ content: `You asked about ${food} and ${drink}`});
    }
    if (interaction.commandName == 'trivia') {
        const game = trivia.createGame(interaction);
        TriviaOptions(game);
        game.setCustomQuestions(questions);
        game.setup()
        .catch(console.error);
    }
})


async function main() {

    const commands = [{
        name: 'trivia',
        description: 'start trivia',
        options: [{
            name: 'language',
            description: 'choose language',
            type: 3,
            required: true,
            choices: [
                {
                    name: 'English',
                    value: 'english'
                }, 
                {
                    name: 'Polish',
                    value: 'polish'
                }
            ]
        }],
    }];

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