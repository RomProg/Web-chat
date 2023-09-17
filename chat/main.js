const SendMessage = document.body.querySelector("#send");
const userInput = document.body.querySelector("#input");
const messagesList = document.body.querySelector("#message-list");

// import { name } from "../script.js";
// console.log("HI " + name);

const Nickname = localStorage.getItem("nickname");

const listElement = (signature, message) => {
  return `<div class="message">
          <div class="nickname">${signature}</div>
          <div class="text">${message}</div>
        </div>`;
};
fetch("http://localhost:5050/Webchat/")
  .then((res) => res.json())
  .then((res) => {
    const chatList = res.map((el) => {
      return listElement(el.userName, el.userMessage);
    });
    console.log("chatList", chatList);

    messagesList.insertAdjacentHTML("beforeend", chatList.join(""));
  });
const newMessage = {
  userName: `${Nickname}`,
  userMessage: "",
};

const sendNewMessage = (e) => {
  newMessage.userMessage = userInput.value;
  fetch("http://localhost:5050/Webchat/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessage),
  })
    .then((res) => res.json())
    .then(() => {
      userInput.value = "";
    })
    .catch((err) => console.error(err));
};

SendMessage.addEventListener("click", sendNewMessage);

window.onbeforeunload = closingCode;
function closingCode() {}
