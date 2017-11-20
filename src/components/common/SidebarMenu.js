import $ from 'jQuery';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class SidebarMenu extends React.Component{
  render(){
  return (
    <ul className="sidebar-menu" data-widget="tree">
      <li className="header">MAIN NAVIGATION</li>
      <li>
          <Link to="/home">
            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </Link>
      </li>
      <li className="active treeview menu-open">
          <a>
            <i className="fa fa-pie-chart"></i>
            <span>Reports</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><Link to="/profitandloss"><i className="fa fa-circle-o"></i> Profit &amp; Loss Analysis</Link></li>
            <li><Link to="/topairline"><i className="fa fa-circle-o"></i> Top 10 Airline</Link></li>
            <li><Link to="/topdestairline"><i className="fa fa-circle-o"></i> Top 10 Airline Destination</Link></li>
            <li><Link to="/saleshistory"><i className="fa fa-circle-o"></i> Sales History</Link></li>
          </ul>
      </li>
    </ul>
  );
  }
}

export default SidebarMenu;