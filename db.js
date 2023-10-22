import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('questions.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS questions (id INT, name TEXT)");
    const stmt = db.prepare("INSERT INTO questions VALUES (?, ?)");
    stmt.run(1, 'Alice');
    stmt.run(2, 'John');
    stmt.finalize();

    db.each("SELECT id, name FROM questions", (err, row) => {
        if (err) {
            console.error(err);
        }
        console.log(row.id, row.name);
    })
})

db.close();