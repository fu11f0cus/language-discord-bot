const { db } = require('../../../db.js');

const randomWord = () => {
    const random = Math.round(Math.random() * 500);
    db.get(`SELECT * FROM english_A1_vocabulary LIMIT 1 OFFSET ${random - 1}`, (err, row) => {
        if (err) {
            console.error(err);
        }
        console.log(row);
    })
}

module.exports = {
    randomWord
}