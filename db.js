import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('discord-bot.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INT UNIQUE, name TEXT, globalname TEXT, points INT)");
    db.run("CREATE TABLE IF NOT EXISTS english_A1_questions (id INTEGER PRIMARY KEY UNIQUE, name TEXT, option1 TEXT, option2 TEXT, option3 TEXT, correct TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS english_A1_truefalse (id INTEGER PRIMARY KEY UNIQUE, question TEXT, option1 TEXT, option2 TEXT, correct TEXT)");
    const engA1 = db.prepare("INSERT OR IGNORE INTO english_A1_questions VALUES (?, ?, ?, ?, ?, ?)");
    const engA1trueFalse = db.prepare("INSERT OR IGNORE INTO english_A1_truefalse VALUES (?, ?, ?, ?, ?)");
    engA1trueFalse.run('1', 'The sun rises in the West?', 'true', 'false', 'false');
    engA1trueFalse.run('2', 'I usually goes to the gym on Mondays', 'true', 'false', 'false');
    engA1trueFalse.run('3', 'В английском языке существует три артикля: "a," "an," и "the."', 'true', 'false', 'true');
    engA1trueFalse.run('4', 'Английский алфавит содержит 26 букв', 'true', 'false', 'true');
    engA1trueFalse.run('5', '"The book, which I read, was very interesting" - это пример ограничительной придаточной части', 'true', 'false', 'true');
    engA1trueFalse.finalize();

    // db.each("SELECT id, name, option1, option2, option3, correct FROM english_A1_questions", (err, row) => {
    //     if (err) {
    //         console.error(err);
    //     }
    //     console.log(row.id, row.name, row.option1, row.option2, row.option3, row.correct);
    // })
})

export function userLogin(id, name, globalName, points) {
    const userPush = db.prepare("INSERT OR IGNORE INTO users VALUES (?, ?, ?, ?)");
    userPush.run(id, name, globalName, points);
    userPush.finalize();
}
