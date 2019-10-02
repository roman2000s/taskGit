import {searchUsers} from "./fetch.js";

let $root = document.querySelector("#root");

$root.innerHTML = `
    <form id="seachForm">
        <input id="searchField" name="searchField"/>
        <button>search</button>
    </form>
    <button></button>
    <div id="field"></div>
`;

let $seachForm = document.querySelector("#seachForm");
let $searchField = $seachForm.querySelector("#searchField");

$seachForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let username = $searchField.value;
    su(username)
        .then(renderUsers)
})
