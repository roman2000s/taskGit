const BASE_URL = "https://api.github.com";

export function searchUsers(userName) {
  return fetch(BASE_URL + "/search/users?q=" + userName)
    .then(response => response.json())    
    .then(usersPagination => usersPagination.items)
}

export function searchUser(userName) {
  return fetch(BASE_URL + "/users/" + userName)
    .then(response => response.json())
}
