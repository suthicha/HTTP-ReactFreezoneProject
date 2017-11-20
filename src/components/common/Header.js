import React, {PropTypes} from 'react';
import UserHeader from './UserHeader';

const Header = ({islogged, userInfo, handleSignoutEvent}) => {
  if (!islogged){
    return <div></div>;
  }
  return (
    <header className="main-header" >
      <a className="logo">
        <span className="logo-mini"><b>C</b>TI</span>
        <span className="logo-lg"><b>CTI</b></span>
      </a>
      <nav className="navbar navbar-static-top">
        <a className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
         <UserHeader userInfo={userInfo} handleSignoutEvent={handleSignoutEvent} />
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  userInfo: PropTypes.object.isRequired
}
export default Header;