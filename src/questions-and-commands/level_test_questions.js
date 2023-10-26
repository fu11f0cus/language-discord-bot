const { CustomQuestionBuilder } = require('discord-trivia');
const { EmbedBuilder } = require('discord.js');

const eng_questions = [
  new CustomQuestionBuilder.Boolean()
    .setValue("The sun rises in the West?")
    .setCorrectAnswer("false"),
  new CustomQuestionBuilder.Boolean()
    .setValue("I usually goes to the gym on Mondays")
    .setCorrectAnswer("false"),
  new CustomQuestionBuilder.Boolean()
    .setValue('В английском языке существует три артикля: "a," "an," и "the."')
    .setCorrectAnswer("true"),
  new CustomQuestionBuilder.Boolean()
    .setValue(
      '"He had been studying English for two years when he moved to London" - это предложение в Past Perfect Continuous времени.'
    )
    .setCorrectAnswer("true"),
  new CustomQuestionBuilder.Boolean()
    .setValue("Английский алфавит содержит 26 букв")
    .setCorrectAnswer("true"),
  new CustomQuestionBuilder.Boolean()
    .setValue(
      '"The book, which I read, was very interesting" - это пример ограничительной придаточной части'
    )
    .setCorrectAnswer("true"),
  new CustomQuestionBuilder.Boolean()
    .setValue(
      'Правильный порядок слов в вопросительном предложении: "You are coming to the party?"'
    )
    .setCorrectAnswer("false"),
  new CustomQuestionBuilder.Boolean()
    .setValue(
      '"I could care less" - это правильное выражение, обозначающее, что вас не особенно волнует что-то.'
    )
    .setCorrectAnswer("false"),
];

const eng_trueFalse = [
    {
        question_text: 'The sun rises in the West?',
        option1: true,
        option2: false,
        correct: false
    },
    {
        question_text: 'В английском языке существует три артикля: "a," "an," и "the."',
        option1: true,
        option2: false,
        correct: true
    },
    {
        question_text: '"He had been studying English for two years when he moved to London" - это предложение в Past Perfect Continuous времени.',
        option1: true,
        option2: false,
        correct: true
    },
    {
        question_text: '"The book, which I read, was very interesting" - это пример ограничительной придаточной части',
        option1: true,
        option2: false,
        correct: true
    },
    {
        question_text: 'Правильный порядок слов в вопросительном предложении: "You are coming to the party?"',
        option1: true,
        option2: false,
        correct: false
    },
    {
        question_text: '"I could care less" - это правильное выражение, обозначающее, что вас не особенно волнует что-то.',
        option1: true,
        option2: false,
        correct: false
    }
];

const eng_level_test = [
  {
    question: "I ... from United Kingdom",
    option1: "is",
    option2: "are",
    option3: "am",
    correct: "am",
  },
  {
    question: "My girlfriend is ... artist",
    option1: "the",
    option2: "an",
    option3: "a",
    correct: "an",
  },
  {
    question: "This is my friend. ... name is Oscar",
    option1: "her",
    option2: "his",
    option3: "yours",
    correct: "his",
  },
  {
    question: "Matt is ...",
    option1: "my brother's friend",
    option2: "my brother friend's",
    option3: "friend from my brother",
    correct: "my brother's friend",
  },
  {
    question: "... 20 chairs in the office",
    option1: "There is",
    option2: "There are",
    option3: "This is",
    correct: "There are",
  },
  {
    question: "Melissa ... horror films",
    option1: "isn't like",
    option2: "don't like",
    option3: "doesnt't like",
    correct: "doesn't like",
  },
  {
    question: "Sorry, I can't talk. I ... right now",
    option1: "driving",
    option2: "drives",
    option3: "'m driving",
    correct: "'m driving",
  },
  {
    question: "He ... at the office last week",
    option1: "wasn't",
    option2: "didn't be",
    option3: "isn't",
    correct: "wasn't",
  },
  {
    question: "I ... the film last night",
    option1: "liked",
    option2: "likes",
    option3: "like",
    correct: "liked",
  },
  {
    question: "... a piece of cake? No, thank you",
    option1: "Do you like",
    option2: "Would you like",
    option3: "Are you like",
    correct: "Would you like",
  },
  {
    question: "The kitchen is ... than the bathroom",
    option1: "bigger",
    option2: "more big",
    option3: "more bigger",
    correct: "bigger",
  },
  {
    question: "The sightseeing bus is very old. We're going ... a new bus soon",
    option1: "buy",
    option2: "to buy",
    option3: "buying",
    correct: "to buy",
  },
  {
    question: "Jennifer is a vegeterian. She ... meat",
    option1: "often eats",
    option2: "usually eats",
    option3: "never eats",
    correct: "never eats",
  },
  {
    question: "There aren't ... buses late in the evening",
    option1: "some",
    option2: "any",
    option3: "no",
    correct: "any",
  },
  {
    question: "The car park is ... to the restaurant",
    option1: "next",
    option2: "behind",
    option3: "in front",
    correct: "next",
  },
  {
    question: "Angelina ... shopping every day",
    option1: "go",
    option2: "is going",
    option3: "goes",
    correct: "goes",
  },
  {
    question: "They ... in the park when it started to rain heavily",
    option1: "walked",
    option2: "were walking",
    option3: "are walking",
    correct: "were walking",
  },
  {
    question: "... seen a falling star before?",
    option1: "Did you ever",
    option2: "Are you ever",
    option3: "Have you ever",
    correct: "Have you ever",
  },
  {
    question: "We've been friends ... many years",
    option1: "for",
    option2: "since",
    option3: "during",
    correct: "for",
  },
  {
    question: "You ... pay for the tickets. They're free",
    option1: "have to",
    option2: "don't need to",
    option3: "doesn't have to",
    correct: "don't need to",
  },
  {
    question: "Jennifer was ill last week and he ... go out",
    option1: "can't",
    option2: "couldn't",
    option3: "needn't",
    correct: "couldn't",
  },
  {
    question: "There are the photos ... I took on holiday",
    option1: "which",
    option2: "what",
    option3: "where",
    correct: "which",
  },
  {
    question: "We'll stay at home if it ... this afternoon",
    option1: "raining",
    option2: "rains",
    option3: "will rain",
    correct: "will rain", // ?
  },
  {
    question: "He doesn't smoke now, but he ... a lot when he was young",
    option1: "has smoked",
    option2: "used to smoke",
    option3: "was smoked",
    correct: "was smoked", // ?
  },
  {
    question: "Michael plays basketball ... anyone else I know",
    option1: "better than",
    option2: "more good than",
    option3: "as better as",
    correct: "better than",
  },
  {
    question: "I promise I ... you as soon as I've finished this cleaning",
    option1: "will help",
    option2: "going to help",
    option3: "am helping",
    correct: "will help",
  },
  {
    question: "This town ... by lots of tourists during the summer",
    option1: "visits",
    option2: "visited",
    option3: "is visited",
    correct: "is visited",
  },
  {
    question:
      "He said that his friends ... to speak to him after they lost the football match",
    option1: "didn't want",
    option2: "weren't",
    option3: "aren't wanting",
    correct: "didn't want",
  },
  {
    question: "How about ... to the cinema tonight?",
    option1: "going",
    option2: "to go",
    option3: "for going",
    correct: "to go",
  },
  {
    question: "Excuse me, can you ... me the way to the station, please?",
    option1: "give",
    option2: "say",
    option3: "tell",
    correct: "say",
  },
  {
    question: "I wasn't interested in the performance very much. ...",
    option1: "So I wasn't",
    option2: "I didn't, too",
    option3: "Neither was I",
    correct: "", // ? option4 - Nor I did
  },
  {
    question: "Take a warm coat, ... you might get very cold outside",
    option1: "otherwise",
    option2: "so that",
    option3: "in case",
    correct: "otherwise",
  },
  {
    question: "... this great book and I can't wait to see how it ends",
    option1: "I don't read",
    option2: "I've read",
    option3: "I've been reading",
    correct: "I've been reading",
  },
  {
    question: "What I like more than anything else ... at weekends",
    option1: "playing golf",
    option2: "to play golf",
    option3: "is playing golf",
    correct: "is playing golf",
  },
  {
    question:
      "She ... for the cat for two days when she finally found it in the garage",
    option1: "looked",
    option2: "had been looked",
    option3: "had been looking",
    correct: "had been looking",
  },
  {
    question:
      "We won't catch the plane ... we leave home now! Please hurry up!",
    option1: "if",
    option2: "unless",
    option3: "except",
    correct: "unless",
  },
  {
    question: "If I hadn't replied to your email, I ... here with you now",
    option1: "can't be",
    option2: "wouldn't be",
    option3: "won't be",
    correct: "wouldn't be",
  },
  {
    question:
      "Do you think you ... with my mobile phone soon? I need to make a call",
    option1: "finish",
    option2: "are finishing",
    option3: "will have finished",
    correct: "", // ? option4 - are finished
  },
  {
    question: "I don't remember mentioning ... dinner together tonight",
    option1: "go for",
    option2: "to go for",
    option3: "going for",
    correct: "to go for", // ? option4 - you going to
  },
  {
    question: "Was it Captain Cook ... New Zealand?",
    option1: "who discovered",
    option2: "discovered",
    option3: "who was discovering",
    correct: "discovered", // ? option4 - that discover
  },
  {
    question:
      "You may not like the cold weather here, but you'll have to ..., I'm afraid",
    option1: "tell it off",
    option2: "sort itself out",
    option3: "put up with it",
    correct: "", // ? option4 - put it off
  },
  {
    question: "It's cold so you should ... on a warm jacket",
    option1: "put",
    option2: "wear",
    option3: "dress",
    correct: "put", // ? option4 - take
  },
  {
    question: "Lola will look ... our dogs while we're on holiday",
    option1: "at",
    option2: "for",
    option3: "into",
    correct: "for",
  },
  {
    question: "She ... a lot of her free time reading",
    option1: "does",
    option2: "spends",
    option3: "has",
    correct: "spends", // ? option4 - makes
  },
  {
    question: "She ... a lot of her free time reading",
    option1: "does",
    option2: "spends",
    option3: "has",
    correct: "spends", // ? option4 - makes
  },
  {
    question: "Hello, this is jack. Could I ... to Sharon, please?",
    option1: "say",
    option2: "speak",
    option3: "call",
    correct: "speak",
  },
  {
    question: "They're coming to our house ... Sunday",
    option1: "at",
    option2: "on",
    option3: "in",
    correct: "on",
  },
  {
    question: "I think it's very easy to ... debt these days",
    option1: "go into",
    option2: "go down to",
    option3: "get into",
    correct: "get into", // ? option4 - become
  },
  {
    question: "Come on! Quick! Let's get ... !",
    option1: "highlight",
    option2: "cracking",
    option3: "massive",
    correct: "highlight",
  },
  {
    question: "I phoned her ... I heard the news",
    option1: "during",
    option2: "by the time",
    option3: "the moment",
    correct: "by the time", // ? option4 - minute
  },
  {
    question: "I feel very .... I'm going to go to bed!",
    option1: "nap",
    option2: "sleepy",
    option3: "asleep",
    correct: "sleepy", // ? option4 - sleeper
  },
  {
    question: "I feel very .... I'm going to go to bed!",
    option1: "nap",
    option2: "sleepy",
    option3: "asleep",
    correct: "sleepy", // ? option4 - sleeper
  },
];

module.exports = {
  eng_questions,
  eng_trueFalse,
  eng_level_test,
};