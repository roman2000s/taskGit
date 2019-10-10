import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchUser } from '../../helpers/searchUsers';
import styles from './UserPage.module.css';

export default function UserPage({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    searchUser(username)
      .then(setUser);
  }, [username]);

  if (!user) return <div className={styles.user}>No user</div>;

  return (
    <div className={styles.user}>
      <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
      {user.login ? (
        <div>
          <span>Login:</span>
          {user.login}
        </div>
      ) : false}
      {user.name ? (
        <div>
          <span>Name:</span>
          {user.name}
        </div>
      ) : false}
      {user.email ? (
        <div>
          <span>Email:</span>
          {user.email}
        </div>
      ) : false}
      {user.company ? (
        <div>
          <span>Company:</span>
          {user.company}
        </div>
      ) : false}
      {user.blog ? (
        <div>
          <span>Blog:</span>
          {user.blog}
        </div>
      ) : false}
      {user.created_at ? (
        <div>
          <span>Created:</span>
          {user.created_at}
        </div>
      ) : false}
    </div>
  );
}

UserPage.propTypes = {
  username: PropTypes.string,
};

UserPage.defaultProps = {
  username: '',
};
