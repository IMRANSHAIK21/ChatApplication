function fetchFilUploadData() {
  let tbodyEle = document.getElementById("tableBody");
  let localstore = JSON.parse(localStorage.getItem("fileUploadData"));

  for (let i = 0; i < localstore.length; i++) {
    let row = document.createElement("tr");
    row.id = 0;
    let td = document.createElement("td");
    td.textContent = localstore[i].fileName;
    row.appendChild(td);
    td = document.createElement("td");
    td.textContent = localstore[i].fileDescription;
    row.appendChild(td);
    td = document.createElement("td");
    let editLink = document.createElement("a");
    editLink.href = "#editFilePopup";
    editLink.textContent = "Edit";
    editLink.setAttribute("data-bs-toggle", "modal");
    editLink.onclick = (event)=>{
      EditDocument(localstore[i].id)
    }
    td.appendChild(editLink);
    td.appendChild(document.createTextNode(" | "));

    let deleteLink = document.createElement("a");
    deleteLink.href ="#deleteFilePopup;"
    deleteLink.onclick = (event)=>{
      DeleteDocument(localstore[i].id)
    }
    deleteLink.textContent = "Delete";
    deleteLink.setAttribute("data-bs-toggle", "modal");
    td.appendChild(deleteLink);
    row.appendChild(td);
    tbodyEle.appendChild(row);
  }
}

window.onload = () => {
  fetchFilUploadData();
  createFileUploadStorage();
};

function createFileUploadStorage() {
  if (!localStorage.getItem("fileUploadData")) {
    localStorage.setItem("fileUploadData", JSON.stringify([]));
  }
}

function EditDocument(id) {
  localStorage.setItem("EditDocument", id);
}

function DeleteDocument(id) {
  localStorage.setItem("DeleteDocument", id);
}

function updateFileUploadStorage(fileDescription, fileName) {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let fileUpload = JSON.parse(localStorage.getItem("fileUploadData"));
  let file = {
    id: currentUser[0].id,
    fileDescription: fileDescription,
    fileName: fileName,
  };
  fileUpload.push(file);
  localStorage.setItem("fileUploadData", JSON.stringify(fileUpload));
}

function upload(){
  let fileDesc = document.getElementById("fileDiscription").value;
  let fileUp = document.getElementById("fileUpload").files.name;
  updateFileUploadStorage(fileDesc, fileUp);
}