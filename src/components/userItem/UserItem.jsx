import React, { Component } from 'react';
import styles from './userItem.module.css';

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: "",
      userAvatarUrl: "",
      userName: "",
      createdTime: "",
      userLocation: "",
      userEmail: "",
      userCompany: "",
      userBlog: ""
    }
  }

  getuser(userLogin) {
    const BASE_URL = "https://api.github.com";
    return fetch(BASE_URL + "/users/" + userLogin)
      .then(response => response.json())
  }

  componentDidMount() {
    this.getuser(this.props.match.params.userlogin)
      .then(user => {
        this.setState({ 
          userLogin: user.login,
          userAvatarUrl: user.avatar_url,
          userName: user.name,
          createdTime: user.created_at,
          userLocation: user.location,
          userCompany: user.company,
          userEmail: user.email,
          userBlog: user.blog
         })
      });
  }

  render() {
    return <div className={styles.userinfo}>
      <div >Login: {this.state.userLogin} </div>
      {this.state.userName ? <div >Name: {this.state.userName}</div> : false}
      {this.state.userEmail ? <div >Email: {this.state.userEmail}</div> : false}
      {this.state.userLocation ? <div >Location: {this.state.userLocation}</div> : false}
      {this.state.userCompany ? <div >Company: {this.state.userCompany}</div> : false}
      {this.state.userBlog ? <div >Blog: {this.state.userBlog}</div> : false}
      <div >Cteared: {this.state.createdTime}</div>
      <img src={this.state.userAvatarUrl} alt={this.state.userLogin} className={styles.avatar}/>
    </div>
  }
}

export default UserItem;
