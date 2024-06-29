document.addEventListener("DOMContentLoaded", () => {
  let paragraph = document.getElementById("welcom");
  let loc = JSON.parse(localStorage.getItem("currentUser"));
  paragraph.textContent = "Welcome" + loc[0].firstName;
});
