import {searchUsers} from "./fetch";
import {sortUsers} from "./sortUsers"

let $root = document.querySelector("#root");

$root.innerHTML = `
    <form id="seachForm">
        <input id="searchField" name="searchField"/>
        <button>search</button>
    </form>
    <button id="sortUsers">sort</button>
    <div id="usersList"></div>
`;

let gitUsers = [];
let $seachForm = document.querySelector("#seachForm");
let $searchField = $seachForm.querySelector("#searchField");
let $usersList = document.querySelector("#usersList");
let $sortUsersBtn = document.querySelector("#sortUsers");
let userSortDirection;

$seachForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let userName = $searchField.value;

    searchUsers(userName)
        .then(renderUsers);
})

$sortUsersBtn.addEventListener("click", sorting);

function renderUsers(usersData) {
    gitUsers = usersData;

function renderUsers(usersData) {
    $usersList.innerHTML = usersData.map(el => `
    <div class="User">
        <img src="${el.avatar_url}"  alt="UserPic">
        <span> ${el.login}</span>
    </div>
    `).join('');
}

function sorting() {
    userSortDirection ==='desc' ? userSortDirection='asc': userSortDirection='desc';
    renderUsers(sortUsers(gitUsers, userSortDirection))
}
