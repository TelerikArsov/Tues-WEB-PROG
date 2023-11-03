var socket = io();

const sendButton = document.getElementById("sendButton");

function addMessage(message) {
  console.log(message);
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<h3>${message.name}</h3><p>${message.content}</p>`;
  messagesDiv.appendChild(messageDiv);
}

const sendForm = document.getElementById("sendForm");
sendForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(sendForm);
  const name = formData.get("name");
  const content = formData.get("content");
  socket.emit("message", {
    name,
    content,
  });
});

socket.on("newMessage", (data) => {
  addMessage(data);
});
