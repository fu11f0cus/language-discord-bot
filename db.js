const sqlite3 = require('sqlite3');
const { eng_level_test, eng_trueFalse } = require('./src/questions-and-commands/level_test_questions.js');
const { tenses } = require('./src/rules/english_A1_rules.js')
const { AllIrregularVerbs } = require('./src/vocabulary/irregularVerbs.js');

const db = new sqlite3.Database('discord-bot.db');

const databasePushing = () => {
    db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INT UNIQUE, name TEXT, globalname TEXT, points INT, engLevel TEXT, polishLevel TEXT)");
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
    db.run("CREATE TABLE IF NOT EXISTS english_A1_rules (name TEXT, description TEXT, example TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS english_A2_rules (name TEXT, description TEXT, example TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS english_B1_rules (name TEXT, description TEXT, example TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS english_B2_rules (name TEXT, description TEXT, example TEXT)");
});
}


const englishA1Rules = () => {
    const rules = db.prepare("INSERT OR IGNORE INTO english_A1_rules VALUES (?, ?, ?)");
    for (let i = 0; i < tenses.length; i++) {
        let rule = tenses[i];
        rules.run(rule.name, rule.description, rule.example);
    }
}

const irregularVerbsTable = () => {
    db.run("CREATE TABLE IF NOT EXISTS irregularVerbs (infinitive TEXT, PastSimpleV2 TEXT, Participle2V3 TEXT, translate TEXT)");
    const sql = db.prepare("INSERT INTO irregularVerbs VALUES (?, ?, ?, ?)");
    for (let i = 0; i < AllIrregularVerbs.length; i++) {
        let verb = AllIrregularVerbs[i];
        sql.run(verb.infinitive, verb.pastSimple, verb.participle, verb.translate);
    }
}


const userEnglishLevel = (engLevel, userId) => {
    const request = "UPDATE users SET engLevel = ? WHERE id = ?";
    db.run(request, [engLevel, userId], (err) => {
        if (err) {
            console.error(err);
        }
        console.log('level has been updated');
    })
}

const getUserLevel = (interaction, userId, language) => {
    db.get("SELECT id, engLevel, polishLevel FROM users WHERE id = ?", [userId], (err, row) => {
        if (err) {
            console.error(err);
        }
        if (language == 'english') {
            if (row.engLevel == 'no data') {
                interaction.reply('Complete language test first!');
            }
            else {
                interaction.reply(`Your english level is ${row.engLevel}`);
            }
        }
        if (language == 'polish') {
            if (row.polishLevel == 'no data') {
                interaction.reply('Complete language test first!');
            }
            else {
                interaction.reply(`Your polish level is ${row.polishLevel}`);
            }
        }
    })
}

// const userLevel = (interaction, userId, language) => {
//     db.get("SELECT id, engLevel, polishLevel FROM users WHERE id = ?", [userId], (err, row) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         if (language == 'english') {
//             level = row.engLevel;
//         }
//         else {
//             level = row.polishLevel;
//         }
//     })
// }

const userLevel = (userId, language) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT id, engLevel, polishLevel FROM users WHERE id = ?", [userId], (err, row) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          let level;
          if (language == 'english') {
            level = row.engLevel;
          }
          resolve(level);
        }
      });
    });
  }

const getEnglishA1Rule = (interaction, rule) => {
    db.get("SELECT name, description, example FROM english_A1_rules WHERE name = ?", [rule], (err, row) => {
        if (err) {
            console.error(err);
        }
        if (rule == 'presentSimple') {
            interaction.reply(`${row.name} \n${row.description} \n ${row.example}`);
        }
        if (rule == 'pastSimple') {
            interaction.reply(`${row.name} \n${row.description} \n ${row.example}`);
        }
        if (rule == 'presentContinious') {
            interaction.reply(`${row.name} \n${row.description} \n ${row.example}`);
        }
        if (rule == 'pastContinious') {
            interaction.reply(`${row.name} \n${row.description} \n ${row.example}`);
        }
    })
}

const wordKnowledgeTable = (userId) => {
    db.run(`CREATE TABLE IF NOT EXISTS ${userId} (word TEXT, answer1 INT, answer2 INT, answer3 INT, knowledge INT)`);
}

const userLogin = function(id, name, globalName, points) {
    const userPush = db.prepare("INSERT OR IGNORE INTO users VALUES (?, ?, ?, ?, ?, ?)");
    userPush.run(id, name, globalName, points, 'no data', 'no data');
    userPush.finalize();
}

const SentencesA1Table = () => {
    db.run("CREATE TABLE IF NOT EXISTS englishA1_sentences (sentence TEXT, answer1 TEXT, answer2 TEXT, answer3 TEXT, correct TEXT)");
}

module.exports = {
    db,
    userLogin,
    userEnglishLevel,
    getUserLevel,
    getEnglishA1Rule,
    wordKnowledgeTable,
    userLevel
}