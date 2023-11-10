const { db } = require('../../../db.js');
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

const randomWord = (interaction) => {
    const random = Math.round(Math.random() * 500);
    db.get(`SELECT * FROM english_A1_vocabulary LIMIT 1 OFFSET ${random - 1}`, (err, row) => {
        if (err) {
            console.error(err);
        }
        const word = row.word;
        const translate = row.translate;
        const embed = new EmbedBuilder()
            .setTitle(`${word}`)
            .setDescription(`A: ${1} \nB: ${2} \nC: ${3}`)

        const buttons = new ActionRowBuilder();
        buttons.addComponents(new ButtonBuilder().setLabel('A').setStyle(ButtonStyle.Primary).setCustomId('1'));
        buttons.addComponents(new ButtonBuilder().setLabel('B').setStyle(ButtonStyle.Primary).setCustomId('2'));
        buttons.addComponents(new ButtonBuilder().setLabel('C').setStyle(ButtonStyle.Primary).setCustomId('3'));

        interaction.channel.send({ embeds: [embed], components: [buttons]});
    })
}

module.exports = {
    randomWord
}