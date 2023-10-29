const { db } = require('../../db.js');

const pointsUpdate = (points, userId) => {
    db.each("SELECT id, points FROM users", (err, row) => {
        if (err) {
            console.error(err);
        }
        if (userId == row.id) {
            row.points += points;
            const updateRequest = `UPDATE users SET points = ${row.points}`;
            db.run(updateRequest, [], (err) => {
                if (err) {
                    console.error(err);
                }
                console.log('succesfully updated');
            })
        }
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
}