export const commands = [{
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