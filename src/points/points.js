const { db } = require('../../db.js');

const checkMyPoints = (interaction, userId) => {
    db.get("SELECT id, points FROM users WHERE id = ?", [userId], (err, row) => {
        if (err) {
            console.error(err);
        }
        interaction.reply(`You have ${row.points} points`);
    })
}

const pointsUpdate = (points, userId) => {
    const sql = "UPDATE users SET points = points + ? WHERE id = ?";
    db.run(sql, [points, userId], (err) => {
        if (err) {
            console.error(err);
        }
        console.log('succesfully updated');
    })
}

const loginPoints = (userId) => {
    const points = 10;
    pointsUpdate(points, userId);
};

const languageTestPoints = (userId) => {
    const points = 30;
    pointsUpdate(points, userId);
}

const dailyTestPoints = (userId) => {
    const points = 20;
    pointsUpdate(points, userId);
}

const dailyWordPoints = (userId) => {
    const points = 5;
    pointsUpdate(points, userId);
}

const learnStreak = (userId) => {
    const points = 50;
    pointsUpdate(points, userId);
}

module.exports = {
    loginPoints,
    languageTestPoints,
    dailyTestPoints,
    dailyWordPoints,
    learnStreak,
    checkMyPoints
}