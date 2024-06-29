export function getParsedStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

export function setUsersStorage(storage) {
  localStorage.setItem("users", JSON.stringify(storage));
}
