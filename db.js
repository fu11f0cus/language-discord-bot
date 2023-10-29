const sqlite3 = require('sqlite3');
const { eng_level_test, eng_trueFalse } = require('./src/questions-and-commands/level_test_questions.js');

const db = new sqlite3.Database('discord-bot.db');

const databasePushing = () => {
    db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INT UNIQUE, name TEXT, globalname TEXT, points INT)");
    db.run("CREATE TABLE IF NOT EXISTS english_A1_questions (id INTEGER PRIMARY KEY UNIQUE, name TEXT, option1 TEXT, option2 TEXT, option3 TEXT, correct TEXT)");
    const engA1 = db.prepare("INSERT OR IGNORE INTO english_A1_questions VALUES (?, ?, ?, ?, ?, ?)");

    db.run("CREATE TABLE IF NOT EXISTS eng_level_test (id INT UNIQUE, question TEXT, option1 TEXT, option2 TEXT, option3 TEXT, correct TEXT)");
    const eng_level_test_push = db.prepare("INSERT OR IGNORE INTO eng_level_test VALUES (?, ?, ?, ?, ?, ?)");
    for (let i = 0; i < eng_level_test.length; i++) {
        let question = eng_level_test[i];
        eng_level_test_push.run(i, question.question, question.option1, question.option2, question.option3, question.correct);
    }
    db.run("CREATE TABLE IF NOT EXISTS english_A1_truefalse (id INTEGER PRIMARY KEY UNIQUE, question TEXT, option1 TEXT, option2 TEXT, correct TEXT)");
    const engA1trueFalse_push = db.prepare("INSERT OR IGNORE INTO english_A1_truefalse VALUES (?, ?, ?, ?, ?)");
    for (let i = 0; i < eng_trueFalse.length; i++) {
        let question = eng_trueFalse[i];
        engA1trueFalse_push.run(i, question.question_text, question.option1, question.option2, question.correct);
    }
});
}

const userLogin = function(id, name, globalName, points) {
    const userPush = db.prepare("INSERT OR IGNORE INTO users VALUES (?, ?, ?, ?)");
    userPush.run(id, name, globalName, points);
    userPush.finalize();
}

module.exports = {
    db,
    userLogin
}