const Nickname = document.getElementById("nickname");
const send = document.getElementById("Send");
const SendNickname = function () {
  save();
  window.location.href = "./chat/main.html";
};

if (send) {
  send.addEventListener("click", SendNickname);
}

function save() {
  localStorage.setItem("nickname", Nickname.value);
}

// export { name };
