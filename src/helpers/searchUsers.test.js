import { searchUser, searchUsers } from './searchUsers';

it('shoud search one user by login', () => {
  expect.assertions(1);
  return searchUser('roman')
    .then(data => expect(data.login).toEqual('roman'));
});

it('shoud search some users by login', () => {
  expect.assertions(1);
  return searchUsers('roman')
    .then(data => expect(data[0].login).toEqual('roman'));
});
