export const commands = [{
    name: 'langtest',
    description: 'start langtest',
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