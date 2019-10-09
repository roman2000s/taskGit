import React, { Component } from "react";
import { searchUsers } from "../../helpers/searchUsers";
import { sortUsers } from "../../helpers/sortUsers";
import Header from "../header/Header";
import UsersList from "../usersList/usersList";
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import UserPage from "../userPage/UserPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      comparator: "desc"
    }
  }

  handleSearchUsers = (userName) => {
    this.props.history.push('/users');
    searchUsers(userName)
      .then(users => {
        this.setState({ users })
      });
  }

  handleSortUsers = () => {
    this.setState(state => ({
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
        <Switch>
          <Route exact path="/users">
            <UsersList usersList={this.state.users} />
          </Route>
          <Route path="/users/:userlogin" render={(params) => <UserPage userLogin={params.match.params.userlogin} />} />
          <Route>
            <Redirect to={{
              pathname: "/users"
            }} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
