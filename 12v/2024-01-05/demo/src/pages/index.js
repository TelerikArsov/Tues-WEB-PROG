// import { db } from "@/lib/db";
import Link from "next/link";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

function CreatePost({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    mutate: createPost,
  } = useMutation(
    async (newPost) => {
      const res = await fetch("/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        const { message } = await res.json();

        throw new Error(message);
      }

      const post = await res.json();
      return post;
    },
    {
      onSuccess: (post) => {
        queryClient.invalidateQueries("posts");
      },
      onError: (err) => {
        setError(err.message);
      },
    }
  );

  return (
    <>
      <div>
        Title{" "}
        <input
          type="text"
          className="border"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
      </div>
      <div>
        Content{" "}
        <textarea
          className="border"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
      </div>
      <button
        className="bg-blue-600 p-2 hover:bg-blue-700 text-white disabled:bg-gray-500"
        onClick={() =>
          createPost({
            title,
            content,
          })
        }
        disabled={!title || !content || isLoading}
      >
        {isLoading ? "Creating post..." : "Post"}
      </button>
      <div className="text-red-600">{error?.message}</div>
    </>
  );
}

export default function Home() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery("posts", () => fetch("/api/getPosts").then((res) => res.json()));

  return (
    <div className="p-2">
      <h1 className="text-3xl">My website</h1>
      <CreatePost />
      <div className="text-3xl">Recent posts</div>
      <div>
        {isLoading
          ? "Loading posts..."
          : posts.map((post) => (
              <div key={post.id}>
                <h2 className="text-2xl">{post.title}</h2>
                <p>{post.content}</p>
                <Link href={`/post/${post.id}`}> Read more ...</Link>
              </div>
            ))}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const posts = await db.all("SELECT * FROM posts ORDER BY id DESC");

//   return {
//     props: {
//       initialPosts: posts,
//     },
//   };
// }
