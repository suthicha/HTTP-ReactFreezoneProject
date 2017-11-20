import React, { PropTypes } from 'react';

const Footer = ({islogged}) => {
  return (
    <footer className={islogged?"main-footer":"main-footer hidden"}>
      <div className="pull-right hidden-xs">
        <b>Version</b> 1.0.0
      </div>
      <strong>Copyright &copy; 2017</strong> All rights
      reserved.
    </footer>
  );
}

Footer.propTypes = {
  
}
export default Footer;