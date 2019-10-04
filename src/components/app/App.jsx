import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    const users = [];
    this.state = {
      users,
      comparator: "asc"
    }
  }

  searchUsers = (userName) => {
    const BASE_URL = "https://api.github.com";
    return fetch(BASE_URL + "/search/users?q=" + userName)
      .then(response => response.json()).then(usersPagination => usersPagination.items)
  }

  getUsersList = (userName) => {
    this.searchUsers(userName)
      .then(users => {
        this.setState({ users })
      });
  }

  compareUsersAsc = (user1, user2) => {
    return user2.login >= user1.login ? 1 : -1;
  }

  compareUsersDesc = (...args) => {
    return -1 * this.compareUsersAsc(...args);
  }

  sortUsers = () => {
    let users = this.state.users;
    this.state.comparator === "asc"
      ? this.setState({
        users: [...users].sort(this.compareUsersAsc),
        comparator: "desc"
      })
      : this.setState({
        users: [...users].sort(this.compareUsersDesc),
        comparator: "asc"
      });
  }



  render() {
    return (
      <div className="App">
        Hello World!
      </div>
    )
  }
}

export default App;
