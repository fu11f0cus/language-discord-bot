const commands = [
  {
    name: "language-level-test",
    description: "start language test",
    options: [
      {
        name: "language",
        description: "choose language",
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
    name: 'daily',
    description: 'get your daily points'
  },
  {
    name: 'login',
    description: 'login/register in bot system'
  }
];

module.exports = {
  commands,
};
