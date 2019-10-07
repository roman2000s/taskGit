import React, { Component } from "react";
import { searchUsers } from "../../helpers/searchUsers";
import { sortUsers } from "../../helpers/sortUsers";
import Header from "../header/Header";
import UsersList from "../usersList/usersList";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      comparator: "desc"
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
        <UsersList usersList={this.state.users}/>
      </div>
    )
  }
}

export default App;
