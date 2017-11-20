import React from 'react';

const UserHeader = ({userInfo, handleSignoutEvent}) => {
  const { Username, Fullname, UserType, Company, Department } = userInfo;
  return (
    <ul className="nav navbar-nav">
    <li className="dropdown user user-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <img src="style/vendor/img/avatar-icon.png" className="user-image" alt="User Image" />
        <span className="hidden-xs">
          { Fullname }
        </span>
      </a>
      <ul className="dropdown-menu">
        <li className="user-header">
          <img src="style/vendor/img/avatar-icon.png" className="img-circle" alt="User Image" />
          <p style={{textTransform: 'uppercase'}}>
            { Fullname } - { Department }
          </p>
        </li>
        <li className="user-footer">
          <div className="pull-left">
          </div>
          <div className="pull-right">
            <button onClick={handleSignoutEvent} className="btn btn-danger btn-flat">Sign out</button>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  );
}

export default UserHeader;