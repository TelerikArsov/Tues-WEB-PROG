const root = document.getElementById("root");

function goToPost(id) {
  fetch(`/clientside/getPostById`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then((post) => {
      root.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      `;
    })
    .then(() => {
      // location.pathname = `/clientside/post/${id}`;
      history.pushState({}, "", `/clientside/post/${id}`);
    });
}

function goToHome() {
  fetch("/clientside/getPosts", {
    method: "POST",
  })
    .then((res) => res.json())
    .then((posts) => {
      root.innerHTML =
        `
          <div id="posts">
          ${posts
            .map(
              (post) => `
            <div>
              <h2>${post.title}</h2>
              <p>${post.content ?? "Empty content"}
              <a href="javascript:goToPost(${post.id})">Read more</a>
              </p>
              
            </div>
          `
            )
            .join("\n")}
            </div>
        ` +
        `
            <form id="createForm">
              <input type="text" name="title" placeholder="Title" />
              <input type="text" name="content" placeholder="Content" />
            <input type="submit" value="Create" />
            </form>
          `;
    })
    .then(() => {
      const form = document.getElementById("createForm");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = form.title.value;
        const content = form.content.value;

        fetch("/clientside/createPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        }).then(() => {
          const postsDiv = document.getElementById("posts");
          const postDiv = document.createElement("div");
          postDiv.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
          `;
          postsDiv.appendChild(postDiv);
        });
      });
    });
}

function handleRouteChange() {
  if (
    location.pathname === "/clientside" ||
    location.pathname === "/clientside/"
  ) {
    goToHome();
  } else {
    // -> /clientside/post/1
    goToPost(location.pathname.split("/")[3]);
  }
}

window.addEventListener("popstate", () => {
  handleRouteChange();
});

handleRouteChange();
