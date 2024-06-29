function Authenticaiton() {
  let email = document.getElementById("email").value;
  let firstName = document.getElementById("fullName").value;
  let password = document.getElementById("password").value;
  let confPassword = document.getElementById("confirmPassword").value;

  if (!firstName.trim()) {
    alert("Please enter FirstName");
    return false;
  }
  if (password != confPassword) {
    alert("Passwords Do not match!!!");
    return false;
  }
  let local = localStorage.getItem("users");
  if (!local) {
    local = [];
    localStorage.setItem("users", JSON.stringify(local));
  }
  local = getParsedStorage();
  if (local.find((data) => data.email == email)) {
    alert("User already registered");
    return false;
  }
  let r = addUser(email, firstName, password);
  return r;
}

function addUser(email, firstName, password) {
  let local = getParsedStorage();
  let id = generateUniqueId();
  let userData = {
    id: id,
    email: email,
    firstName: firstName,
    password: password,
  };
  local.push(userData);

  localStorage.setItem("users", JSON.stringify(local));

  return true;
}

function generateUniqueId() {
  return Date.now() + "-" + Math.floor(Math.random() * 1000);
}
function getParsedStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

function setUsersStorage(storage) {
  localStorage.setItem("users", JSON.stringify(storage));
}
