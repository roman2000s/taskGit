import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { userlogin: '' }
  }

  handleGetUserLogin(e) {
    e.preventDefault();
    this.state.userlogin ? this.props.onSearchUsers(this.state.userlogin) : alert("Login should not be empty");
  }

  handleChangeSUF(e) {
    this.setState({
      userlogin: e.target.value
    })
  }

  handleSortUsers(e) {
    this.props.onSortUsers(e)
  }

  render() {
    return <div className="header">
      <form className="searchUsersForm" id="searchUsersForm" onSubmit={(e) => this.handleGetUserLogin(e)}>
        <span>Login: </span>
        <input 
          className="searchUsersField" 
          name="searchUsersField"
          value={this.state.userlogin}
          onChange={e => this.handleChangeSUF(e)} />
        <input 
          className="searchUsersSubmit" 
          type="submit" 
          value="Search users" />
      </form>
      <button className="sortUsersBtn" type="button" onClick={(e) => this.handleSortUsers(e)}>Sort Users</button>
    </div>
  }
}

export default Header;
