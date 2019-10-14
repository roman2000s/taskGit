const express = require('express');
const app = express();

const PORT = 3001;
const USERS = require('./mockedData');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  let users = []

  USERS.items.map( (user) => {
    user.login.includes(req.query.q) ? users.push(user) : false
  })
  res.json(users);
});

app.get('/users/:username', (req, res) => {
  let response = USERS.items.find(user => {
    if (user.login === req.params.username)
      return res.json(user)
  })
  if(!response)
    return res.json({ error: "User not found" })
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
