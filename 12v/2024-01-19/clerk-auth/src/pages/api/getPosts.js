import { db } from "@/lib/db";
import { getAuth, clerkClient } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const posts = await db.all(
      "SELECT id, title, content FROM posts ORDER BY id DESC"
    );

    res.json(posts);
  } else {
    res.status(404);
  }
}
