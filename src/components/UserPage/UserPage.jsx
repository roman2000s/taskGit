import React, { useState, useEffect } from 'react'
import { searchUser } from '../../helpers/searchUsers'
import styles from './UserPage.module.css'

export default function UserPage({ username }) {
  let [user, setUser] = useState(null)

  useEffect(() => {
    searchUser(username)
      .then(setUser)
  }, [username])

  if (!user) return <div className={styles.user}>No user</div>

  return <div className={styles.user}>
    <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
    {user.login ? <div>Login: {user.login}</div> : false}
    {user.name ? <div>Name: {user.name}</div> : false}
    {user.email ? <div>Email: {user.email}</div> : false}
    {user.company ? <div>Company: {user.company}</div> : false}
    {user.blog ? <div>Blog: {user.blog}</div> : false}
    {user.created_at ? <div>Created: {user.created_at}</div> : false}
  </div>
}
