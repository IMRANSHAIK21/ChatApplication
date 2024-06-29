function updateTheChat() {
  let inputData = document.getElementById("inputData").value;
  let currentuser = JSON.parse(localStorage.getItem("currentUser"));
  let paragraph = document.createElement("p");
  let date = getCurrentDateAndTime();
  paragraph.innerHTML +=
    "[" + date + "]" + currentuser[0].firstName + ": " + inputData + "<br>";
  updateChatHistoryStorage(
    currentuser[0].id,
    currentuser[0].firstName,
    inputData,
    date
  );
}

window.onload = () => {
  let uname = document.getElementById("userName");
  let h3 = document.createElement("h3");
  let currentuser = JSON.parse(localStorage.getItem("currentUser"));
  h3.textContent = currentuser[0].firstName;
  uname.appendChild(h3);
  createChatStorage();
  updataChatHistoryOnUI();
};

function createChatStorage() {
  let chatStorage = localStorage.getItem("chatContent");
  if (!chatStorage) {
    localStorage.setItem("chatContent", JSON.stringify([]));
  }
}

function updateChatHistoryStorage(userid, uname, message, date) {
  chatStorage = JSON.parse(localStorage.getItem("chatContent"));
  const chat = {
    id: userid,
    date: date,
    userName: uname,
    message: message,
  };
  chatStorage.push(chat);
  localStorage.setItem("chatContent", JSON.stringify(chatStorage));
}

function updataChatHistoryOnUI() {
  let chatStorage = localStorage.getItem("chatContent");
  if (chatStorage) {
    let chat = JSON.parse(chatStorage);
    if (chat.length > 0) {
      let chatdata = document.getElementById("chatData");
      let paragraph = document.createElement("p");
      chat.forEach((element) => {
        paragraph.innerHTML +=
          "[" +
          element.date +
          "]" +
          element.userName +
          ": " +
          element.message +
          "<br>";
      });
      chatdata.appendChild(paragraph);
    }
  }
}

function getCurrentDateAndTime() {
  let date = new Date(Date.now());
  let formattedDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
  return formattedDate;
}
