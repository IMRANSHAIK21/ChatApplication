function DeleteData() {
  let deleteId = localStorage.getItem("DeleteUser");
  let local = JSON.parse(localStorage.getItem("users"));
  let newArray = local.filter((data) => data.id != deleteId);
  localStorage.setItem("users", JSON.stringify(newArray));
}
