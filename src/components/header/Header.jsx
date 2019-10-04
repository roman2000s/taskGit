import React from 'react';
import './header.css';

class Header extends React.Component {
  render (){
    return <div className="header">
      <form className="searchUsersForm" id="searchUsersForm">
        <input className="searchUsersField" name="searchUsersField" />
        <input className="searchUsersSubmit" type="submit" value="Search users" />
      </form>
      <input className="sortUsersBtn" type="button" value="Sort users"/>
    </div>
  }
}

export default Header;
