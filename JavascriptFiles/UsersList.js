let tbodyEle = document.getElementById("tableBody");
let localstore = JSON.parse(localStorage.getItem("users"));

for (let i = 0; i < localstore.length; i++) {
  let row = document.createElement("tr");
  let td = document.createElement("td");
  td.textContent = localstore[i].firstName;
  row.appendChild(td);
  td = document.createElement("td");
  td.textContent = localstore[i].email;
  row.appendChild(td);
  td = document.createElement("td");
  let editLink = document.createElement("a");
  editLink.href = "../Htmlfiles/EditUser.html";
  editLink.textContent = "Edit";
  editLink.onclick = (event) => {
    EditUser(localstore[i].id);
  };
  td.appendChild(editLink);
  td.appendChild(document.createTextNode(" | "));

  let deleteLink = document.createElement("a");
  deleteLink.href = "#popup";
  deleteLink.setAttribute("data-bs-toggle", "modal");
  deleteLink.onclick = (event) => {
    DeleteLink(localstore[i].id);
  };

  deleteLink.setAttribute("disabled", isDisable(localstore[i].id));
  deleteLink.textContent = "Delete";
  td.appendChild(deleteLink);
  row.appendChild(td);
  tbodyEle.appendChild(row);
}
function EditUser(id) {
  localStorage.setItem("EditUser", id);
}

function DeleteLink(id) {
  localStorage.setItem("DeleteUser", id);
}
function isDisable(d) {
  let c = JSON.parse(localStorage.getItem("currentUser"));
  let j = c.find((data) => data.id == d);
  return !j;
}
