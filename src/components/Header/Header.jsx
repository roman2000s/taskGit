import React, { useState } from 'react'
import styles from './Header.module.css'

export default function Header({ sort, onSortChange, onSearch }) {
  let [search, setSearch] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onSearch(search)
  }

  return <div className={styles.header}>
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <button type="submit">Search</button>
      <button
        type="button"
        onClick={() => onSortChange(sort === 'desc' ? 'asc' : 'desc')}>
        Sort ({sort})
      </button>
    </form>
  </div>
}
