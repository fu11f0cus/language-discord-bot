const { db } = require('../../db.js');

const loginPoints = (userId) => {
    db.each("SELECT id, points FROM users", (err, row) => {
        if (err) {
            console.error(err);
        }
        if (userId == row.id) {
            row.points += 10;
            console.log(row.points);
        }
    })
};

module.exports = {
    loginPoints
}