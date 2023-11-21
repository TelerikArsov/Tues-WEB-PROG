const slowdown = 1000;

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("/tmp/database1.db");
db.run(
  "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT)"
);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
module.exports = {
  createPost: async (title, content) => {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO posts (title, content) VALUES (?, ?)",
        [title, content],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  },

  getPosts: async () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM posts", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  getPostById: async (id) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  },
};
