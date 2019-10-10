import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { searchUsers } from '../../helpers/searchUsers';
import { sortUsers } from '../../helpers/sortUsers';
import styles from './UsersListPage.module.css';

export default function UsersListPage({ search, sort }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    search && searchUsers(search)
      .then((query) => setUsers(sortUsers(query, sort)));
  }, [search, sort]);

  useEffect(() => {
    setUsers((usrs) => sortUsers(usrs, sort));
  }, [sort, search]);

  if (users.length === 0) return <div className={styles.users}>No users</div>;

  return (
    <div className={styles.users}>
      {users.map((user) => (
        <Link key={user.login} to={`/users/${user.login}`}>
          <div className={styles.userInfo}>
            {user.login}
            <img className={styles.img} src={user.avatar_url} alt={user.login} />
          </div>
        </Link>
      ))}
    </div>
  );
}

UsersListPage.propTypes = {
  search: PropTypes.string,
  sort: PropTypes.string,
};

UsersListPage.defaultProps = {
  search: '',
  sort: '',
};
