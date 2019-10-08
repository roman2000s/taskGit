import React, { Component } from "react";
import { searchUsers } from "../../helpers/searchUsers";
import { sortUsers } from "../../helpers/sortUsers";
import Header from "../header/Header";
import UsersList from "../usersList/usersList";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import UserItem from "../userItem/UserItem";

import history from './history';

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
      <Router history={history}>
        <div className="App">
          <Header
            onSearchUsers={this.handleSearchUsers}
            onSortUsers={this.handleSortUsers}
          />
            <Switch>
              <Route exact path="/">
                <Redirect to={{
                  pathname: "/users"
                }} />
              </Route>
              <Route exact path="/users">
                <UsersList usersList={this.state.users}/>
              </Route>
              <Route path="/users/:userlogin" component={UserItem} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
