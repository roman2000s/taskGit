import React, { Component } from "react";
import { searchUsers } from "../../helpers/searchUsers";
import { sortUsers } from "../../helpers/sortUsers";
import Header from "../header/Header"


class App extends Component {
  constructor(props) {
    super(props);
    const users = [];
    this.state = {
      users,
      comparator: "desc",
    }
  }

  handleSearchUsers = (userName) => {
    searchUsers(userName)
      .then(users => {
        this.setState({ users })
      });
  }

  handleSortUsers = () => {
    this.setState(state=>({
      users: sortUsers(state.users, state.comparator),
      comparator: state.comparator === "asc" ? "desc" : "asc"
    }))
  }

  render() {
    return (
      <div className="App">
        <Header
          onSearchUsers={this.handleSearchUsers}
          onSortUsers={this.handleSortUsers}
        />
        {this.state.users.map(el => el.login)}
      </div>
    )
  }
}

export default App;
