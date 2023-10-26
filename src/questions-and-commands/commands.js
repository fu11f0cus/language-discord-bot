const commands = [
  {
    name: "langtest",
    description: "start langtest",
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
    name: "eng-level-test",
    description: "test your english language level",
  },
];

module.exports = {
  commands,
};
