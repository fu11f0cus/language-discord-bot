const { db } = require('../../db.js');

const pointsUpdate = (points) => {
    const updateRequest = `UPDATE users SET points = ${points}`;
    db.run(updateRequest, [], (err) => {
        if (err) {
            console.error(err);
        }
        console.log('succesfully updated');
    })
}

const loginPoints = (userId) => {
    db.each("SELECT id, points FROM users", (err, row) => {
        if (err) {
            console.error(err);
        }
        if (userId == row.id) {
            const newPoints = row.points + 10;
            pointsUpdate(newPoints);
            console.log(row.points);
        }
    })
};

const languageTestPoints = (userId) => {
    
}

const dailyTestPoints = (userId) => {

}

const dailyWordPoints = (userId) => {

}

const learnStreak = (userId) => {
    
}

module.exports = {
    loginPoints
}