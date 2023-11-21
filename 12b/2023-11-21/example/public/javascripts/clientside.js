function goToPost(id) {
  fetch("/api/getPost?id=" + id)
    .then((res) => res.json())
    .then((post) => {
      const root = document.getElementById("root");
      root.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      `;
    });

  // window.location = "/post/" + id;
  history.pushState({}, "", "/clientside/post/" + id);
}

window.addEventListener("popstate", () => {
  handleNavigationChange();
});

function goToHome() {
  fetch("/api/getPosts")
    .then((r) => r.json())
    .then((posts) => {
      const root = document.getElementById("root");
      root.innerHTML = posts
        .map(
          (post) => `
          <div>
            <h2>${post.title}</h2>
            <p>${post.content}
              <a href="javascript:goToPost(${post.id})">Read more</a>
            </p>
          </div>
        `
        )
        .join("");
    });
}

function handleNavigationChange() {
  if (window.location.pathname == "/clientside") {
    goToHome();
  } else {
    const id = window.location.pathname.split("/")[3];
    goToPost(id);
  }
}

handleNavigationChange();
