const comparators = {
  asc: compareUsersAsc,
  desc: compareUsersDesc
};

export function sortUsers(users, order = 'asc') {
  return [...users].sort(comparators[order]);
}

function compareUsersAsc(user1, user2) {
  return user2.login >= user1.login ? 1 : -1;
}

function compareUsersDesc(...args) {
  return -1 * compareUsersAsc(...args);
}
