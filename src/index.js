//when merge, change variable 'data' to the fetched data
const data = [
  {
    "login": "simonjefford",
    "id": 136,
  },
  {
    "login": "josh",
    "id": 137,
    
  },
  {
    "login": "stevedekorte",
    "id": 138,
    
  }
]

//where do you append 
const rt = document.getElementById("root");

//button with sorting function 
let button = document.createElement("BUTTON");
let sortRevert = -1;
button.onclick = function sorting(){
  sortRevert = sortRevert * -1;
  data.sort(function (a, b) {
    if (a.login > b.login) {
      return sortRevert;
    }
    if (a.login < b.login) {
      return sortRevert * -1;
    }
    return 0;
  });
  console.log(data);
};
button.innerHTML = "Sort";

rt.appendChild(button);
