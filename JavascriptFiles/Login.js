function validation() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  if (!localStorage) {
    alert("local storage is not available");
  }
  let localStore = localStorage.getItem("users");
  if (!localStore) {
    alert("Please Register first");
    return false;
  } else {
    let local = JSON.parse(localStore);
    if (local.find((data) => data.email == email && data.password == pass)) {
      let currentUsers = createLoggedInUsers();
      updateLoggedInUsers(local, email, currentUsers);
      return true;
    } else {
      alert("Email or Password is incorrect");
      return false;
    }
  }
}

function createLoggedInUsers() {
  let currentUser = localStorage.getItem("currenUser");
  if (!currentUser) {
    localStorage.setItem("currentUser", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("currentUser"));
  }
  return JSON.parse(currentUser);
}

function updateLoggedInUsers(localStore, email, currentUser) {
  const newUser = localStore.filter((data) => data.email == email);
  localStorage.setItem("currentUser", JSON.stringify(newUser));
}
