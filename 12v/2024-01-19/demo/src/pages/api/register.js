import { db } from "@/lib/db";
import bcrypt from "bcrypt";
const saltRounds = 10;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, saltRounds);

    await db.run("INSERT INTO users (email, password_hash) VALUES (?, ?)", [
      email,
      passwordHash,
    ]);

    res.json({});
  } else {
    res.status(404);
  }
}
