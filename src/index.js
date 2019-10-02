import {searchUsers} from "./fetch.js";

searchUsers('roman')
  .then(console.log)
  .catch((err) => alert(err.message))
