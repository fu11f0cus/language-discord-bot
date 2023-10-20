import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { TriviaManager } from 'discord-trivia'
import { CategoryNames, CustomQuestionBuilder, QuestionDifficulties } from 'discord-trivia'
import { eng_questions, polish_questions } from './src/questions-and-commands/level_test_questions.js'
import { commands } from './src/questions-and-commands/commands.js'


config();

// xcode default dark custom version

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
    const { options } = interaction;
    if (interaction.commandName == 'langtest' && options.getString('language') == 'english') {
        const game = trivia.createGame(interaction);
        TriviaOptions(game);
        game.setCustomQuestions(eng_questions);
        game.setup()
        .catch(console.error);
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