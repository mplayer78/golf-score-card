import * as SQLite from "expo-sqlite";

const db: SQLite.Database = SQLite.openDatabase("scoreHistory.db");

export const init = () => {
  const promise = new Promise<string>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS scoreHistory (id INTEGER PRIMARY KEY NOT NULL, date TEXT NOT NULL, score INTEGER NOT NULL);",
        [],
        _ => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, par INTEGER NOT NULL, me BIT NOT NULL);",
        [],
        _ => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      // tx.executeSql(
      //   "ALTER TABLE user ADD me BIT",
      //   [],
      //   _ => console.log("Success"),
      //   (_, err) => console.error(err)
      // );
    });
  });
  return promise;
};

export const insertScorecard = (date, score) => {
  const promise = new Promise<string>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO scoreHistory (date, score) VALUES (?, ?)",
        [date, score],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchScorecards = () => {
  const promise = new Promise<string>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM scoreHistory",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertUser = (name, par, me) => {
  const promise = new Promise<string>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO scoreHistory (name, par, me) VALUES (?, ?, ?)",
        [name, par, me],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchMe = () => {
  const promise = new Promise<string>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM user WHERE me=1",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
