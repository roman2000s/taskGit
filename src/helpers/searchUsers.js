const BASE_URL = "";

export function searchUsers(userName) {
  return fetch(BASE_URL + "/users?q=" + userName)
    .then(response => response.json())    
    .then(usersPagination => usersPagination.items)
}

export function searchUser(userName) {
  return fetch(BASE_URL + "/users/" + userName)
    .then(response => response.json())
}
