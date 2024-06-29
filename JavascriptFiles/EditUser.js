function EditUser() {
  let firstName = document.getElementById("fullName").value;
  let emailId = document.getElementById("email").value;
  let editUser = localStorage.getItem("EditUser");
  let local = getParsedStorage();
  local.forEach((obj) => {
    if (obj.id == editUser) {
      obj.firstName = firstName;
      obj.email = emailId;
    }
  });

  let currentUsers = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUsers.find((data) => data.id == editUser)) {
    currentUsers.forEach((data) => {
      data.firstName = firstName;
      data.email = emailId;
    });
    localStorage.setItem("currentUser", JSON.stringify(currentUsers));
  }
  setUsersStorage(local);
}
document.addEventListener("DOMContentLoaded", () => {
  let firstName = document.getElementById("fullName") ?? "";
  let emailId = document.getElementById("email") ?? "";
  let currentUsers = JSON.parse(localStorage.getItem("currentUser"));
  let editUser = localStorage.getItem("EditUser");
  let userToEdit = currentUsers.find((user) => user.id == editUser);
  if (userToEdit) {
    emailId.setAttribute("disabled", "disabled");
  } else {
    emailId.removeAttribute("disabled");
  }
  updateCurrentUI(editUser, firstName, emailId);
});

function updateCurrentUI(editUser, firstName, emailId) {
  let local = getParsedStorage();
  let newArray = local.filter((data) => data.id == editUser);
  if (newArray.length > 0) firstName.value = newArray[0].firstName;
  emailId.value = newArray[0].email;
}

function getParsedStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

function setUsersStorage(storage) {
  localStorage.setItem("users", JSON.stringify(storage));
}
