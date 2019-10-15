const express = require('express');
const app = express();

const PORT = 3001;
const USERS = require('./mockedUsers');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send(
    {
      items: USERS.filter(user => {
        return user.login.includes(req.query.q)
      })
    }
  )
});

app.get('/users/:username', (req, res) => {
  const user = USERS.find(user => {
    if (user.login === req.params.username)
      return user
  })
  if (user) return res.send(user);
  return res.status(404).send({ error: 'User not found' })
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
