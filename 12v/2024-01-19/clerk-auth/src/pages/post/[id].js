import { db } from "@/lib/db";

import { useRouter } from "next/router";

export default function Post({ id, title, content }) {
  const { query } = useRouter();
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const post = await db.get("SELECT * FROM posts WHERE id = ?", params.id);
  console.log("POST", post);
  return {
    props: post,
  };
}
