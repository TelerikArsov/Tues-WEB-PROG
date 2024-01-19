import { db } from "@/lib/db";

function getCurrentUser(req) {
  const { session } = req.cookies;

  if (!session) {
    return null;
  }

  return db.get(
    `
      SELECT users.id, users.email
      FROM sessions
      JOIN users ON users.id = sessions.user_id
      WHERE sessions.id = ?
    `,
    session
  );
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;

    const currentUser = await getCurrentUser(req);

    if (!currentUser) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (title.startsWith("x")) {
      res.status(400).json({
        message: "Title cannot start with x",
      });
      return;
    }

    const { lastID } = await db.run(
      "INSERT INTO posts (title, content) VALUES (?, ?)",
      [title, content + " posted by " + currentUser.email]
    );

    const post = await db.get(
      "SELECT id, title, content FROM posts WHERE id = ?",
      lastID
    );

    res.json(post);
  } else {
    res.status(404);
  }
}
