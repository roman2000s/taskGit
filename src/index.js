const url = "https://api.github.com/search/users?q=";
const userMode = "%20in:login";
let item = document.querySelector(".items");
const button = document.querySelector(".search_button");
button.addEventListener("click", displayUser)

async function getResource() {
  let nameMode = document.querySelector(".search_input").value;
  if (nameMode) {
    const res = await fetch(url + nameMode + userMode);
    // if (!res.ok) {
    //     throw new Error(`Could not fetch ${url}` +
    //         `, rceived ${res.status}`)
    // }
    return await res.json();
  };
};

async function displayUser() {
  const res = await getResource();
  return item.innerHTML = res.items.map(el =>
    `<div class="item">
         <img class="img_user" height=200 alt="" src=${el.avatar_url} >
         <div class="login">${el.login}</div>
         </div>`)
}
