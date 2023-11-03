const rendered = new Set();
async function longPolling() {
  while (1) {
    console.log("fetching");
    const message = await fetch("/api/getNextMessage").then((res) =>
      res.json()
    );
    console.log(message);
    const messagesDiv = document.getElementById("messages");
    rendered.add(message.id);
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<h3>${message.name}</h3><p>${message.content}</p>`;
    messagesDiv.appendChild(messageDiv);
  }
}

longPolling();
