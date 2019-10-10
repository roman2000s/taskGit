import React, { useState } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import UsersListPage from '../UsersListPage/UsersListPage'
import UserPage from '../UserPage/UserPage'

export default function App() {
  let [sort, setSort] = useState('desc')
  let [search, setSearch] = useState('')
  let history = useHistory()

  return <>
    <Header
      onSearch={(query) => {
        history.push('/users')
        setSearch(query)
      }}
      onSortChange={setSort}
      sort={sort}
    />

    <Switch>
      <Route
        exact
        path="/users"
        render={() => <UsersListPage search={search} sort={sort} />}
      />
      <Route
        path="/users/:username"
        render={({ match }) => <UserPage username={match.params.username} />}
      />
      <Route render={() => <Redirect to="/users" />} />
    </Switch>
  </>
}
