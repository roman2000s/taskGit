import { sortUsers } from './sortUsers';

let users = [
  {
    login: 'f',
  },
  {
    login: 'a',
  },
  {
    login: 't',
  },
  {
    login: 'z',
  },
  {
    login: 'b',
  }
];

let usersDesc = [
  {
    login: 'a',
  },
  {
    login: 'b',
  },
  {
    login: 'f',
  },
  {
    login: 't',
  },
  {
    login: 'z',
  }
];

let usersAsc = [
  {
    login: 'z',
  },
  {
    login: 't',
  },
  {
    login: 'f',
  },
  {
    login: 'b',
  },
  {
    login: 'a',
  }
];

test('array should be sorted "asc"', () => {
  expect(sortUsers(users, 'asc')).toEqual(usersAsc);
});

test('array should be sorted "desc"', () => {
  expect(sortUsers(users, 'desc')).toEqual(usersDesc);
});

