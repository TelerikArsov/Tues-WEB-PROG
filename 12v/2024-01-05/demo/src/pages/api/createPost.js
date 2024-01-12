import { db } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (title.startsWith("x")) {
      res.status(400).json({
        message: "Title cannot start with x",
      });
      return;
    }

    const { lastID } = await db.run(
      "INSERT INTO posts (title, content) VALUES (?, ?)",
      [title, content]
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
