import React, { Component } from 'react';
import styles from './userPage.module.css';
import { searchUser } from "../../helpers/searchUsers";

class UserPage extends Component {
  state = {
    user: []
  }

  componentDidMount() {
    searchUser(this.props.userLogin)
      .then(user => {
        this.setState({ user })
      });
  }

  render() {
    return <div className={styles.userinfo}>
      <div >Login: {this.state.user.login} </div>
      {this.state.user.name ? <div >Name: {this.state.user.name}</div> : false}
      {this.state.user.email ? <div >Email: {this.state.user.email}</div> : false}
      {this.state.user.location ? <div >Location: {this.state.user.location}</div> : false}
      {this.state.user.company ? <div >Company: {this.state.user.company}</div> : false}
      {this.state.user.blog ? <div >Blog: {this.state.user.blog}</div> : false}
      <div >Cteared: {this.state.user.created_at}</div>
      <img src={this.state.user.avatar_url} alt={this.state.user.login} className={styles.avatar}/>
    </div>
  }
}

export default UserPage;
