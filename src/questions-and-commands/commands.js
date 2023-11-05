const commands = [
  {
    name: "language-level-test",
    description: "start language test",
    options: [
      {
        name: "language",
        description: "choose a language",
        type: 3,
        required: true,
        choices: [
          {
            name: "English",
            value: "english",
          },
          {
            name: "Polish",
            value: "polish",
          },
        ],
      },
    ],
  },
  {
    name: "my-points",
    description: "show my points",
  },
  {
    name: "daily",
    description: "get your daily points",
  },
  {
    name: "login",
    description: "login/register in bot system",
  },
  {
    name: "my-level",
    description: "shows your language level",
    options: [
      {
        name: "language",
        description: "choose a language",
        type: 3,
        required: true,
        choices: [
          {
            name: "English",
            value: "english",
          },
          {
            name: "Polish",
            value: "polish",
          },
        ],
      },
    ],
  },
  {
    name: "english-a1-rules",
    description: "all A1 english rules",
    options: [
      {
        name: "rule",
        description: "choose a rule you want to learn",
        type: 3,
        required: true,
        choices: [
          {
            name: "presentSimple",
            value: "presentSimple",
          },
          {
            name: "pastSimple",
            value: "pastSimple",
          },
          {
            name: "presentContinious",
            value: "presentContinious",
          },
          {
            name: "pastContinious",
            value: "pastContinious",
          },
        ],
      },
    ],
  },
];

module.exports = {
  commands,
};
