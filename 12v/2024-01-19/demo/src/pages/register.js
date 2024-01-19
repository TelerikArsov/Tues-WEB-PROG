import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    mutate: createPost,
  } = useMutation(
    async (newPost) => {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
    }
  );

  return (
    <>
      <div>
        Email{" "}
        <input
          type="text"
          className="border"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div>
        Password{" "}
        <input
          type="password"
          className="border"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <button
        className="bg-blue-600 p-2 hover:bg-blue-700 text-white disabled:bg-gray-500"
        onClick={() =>
          createPost({
            title: email,
            content: password,
          })
        }
        disabled={!email || !password || isLoading}
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
      <div className="text-red-600">{error?.message}</div>
    </>
  );
}
