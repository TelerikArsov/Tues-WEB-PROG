import { db } from "@/lib/db";
import { getAuth, clerkClient } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const auth = getAuth(req);
    console.log(auth);
    const { userId } = auth;
    // const user = await clerkClient.users.getUser(userId);
    // console.log(user);
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
      [title, content + "posted by " + userId]
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
