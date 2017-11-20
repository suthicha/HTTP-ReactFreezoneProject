import React, { PropTypes } from 'react';
import SidebarMenu from './SidebarMenu';

const userInfoObj = {Fullname:''}

const Aside = ({islogged, userInfo}) => {
  const user  = userInfo || userInfoObj;

  return (
    <aside className={islogged?"main-sidebar":"main-sidebar hidden"}>
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="style/vendor/img/avatar-icon.png" className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info">
            <p>{user.Fullname}</p>
            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <SidebarMenu />
      </section>
    </aside>
  );
}

Aside.propTypes = {

}

export default Aside;