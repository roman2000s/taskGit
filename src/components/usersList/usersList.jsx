import React, { Component } from 'react';
import styles from "./usersList.module.css";

class UsersList extends Component {
  renderUsersList(users) {
    return <div className={styles.usersList}>
      {
        users.map(user => {
          return <div className={styles.userInfo}>
            <div className={styles.userLogin}>{user.login}</div>
            <img src={user.avatar_url} alt={user.login} />
          </div>
        })
      }
    </div>
  }

  renderEmptyList() {
    return <div className={styles.usersList}>
        Users not found
      </div>
  }

  render() {
    return this.props.usersList ? this.renderUsersList(this.props.usersList) : this.renderEmptyList()
  }
}

export default UsersList;
