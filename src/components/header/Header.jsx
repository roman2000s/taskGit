import React, { Component } from 'react';
import styles from './header.module.css';
import history from '../app/history';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { userlogin: '' }
  }

  handleGetUserLogin(e) {
    e.preventDefault();
    history.push('/users');
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
    return <div className={styles.header}>
      <form className={styles.searchUsersForm} id="searchUsersForm" onSubmit={(e) => this.handleGetUserLogin(e)}>
        <span>Login: </span>
        <input 
          className={styles.searchUsersField}
          name="searchUsersField"
          value={this.state.userlogin}
          onChange={e => this.handleChangeSUF(e)} />
        <input 
          className={styles.searchUsersSubmit} 
          type="submit" 
          value="Search users" />
      </form>
      <button className={styles.sortUsersBtn} type="button" onClick={(e) => this.handleSortUsers(e)}>Sort Users</button>
    </div>
  }
}

export default Header;
