import React, { Component } from 'react';
import "./usersList.css";

class UsersList extends Component {
  renderUsersList(users) {
    console.log(users)
    return <div className="usersList">
      {
        users.map(user => {
          return <div className="userInfo">
            <div className="userLogin">{user.login}</div>
            <img src={user.avatar_url} alt={user.login} />
          </div>
        })
      }
    </div>
  }

  renderEmptyList() {
    return <div className="usersList">
        Users not found
      </div>
  }

  render() {
    return this.props.usersList ? this.renderUsersList(this.props.usersList) : this.renderEmptyList()
  }
}

export default UsersList;
