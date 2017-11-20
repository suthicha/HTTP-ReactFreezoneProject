import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
// import { loggedAuthen, logoutAuthen } from '../actions/authenActions';
import * as Page from './common';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {islogged: false}
    this.handleSignout = this.handleSignout.bind(this);
  }

  componentDidMount() {
    // this.props.loggedAuthen();
  }

  handleSignout(){
    // _.delay(() => {
    //   this.props.logoutAuthen();
    //   browserHistory.push('/login');
    // },delay);
  }

  render() {
    
    const islogged            = true;
    const userInfo            = this.props.user;
    const handleSignoutEvent  = this.handleSignout;
    const wrapperStype        = { height: 'auto', minHeight: '100%'}

    return (
      <div className={islogged?"wrapper":"wrapper login-wrapper"} style={wrapperStype}>
        <Page.Header 
          islogged    = {islogged} 
          userInfo    = {userInfo} 
          handleSignoutEvent =  {handleSignoutEvent} 
        />
        <Page.Aside islogged = {islogged} userInfo={userInfo} />
        
        <div id="wrapper" className={ islogged? "content-wrapper" : "" }>
          { this.props.children }
        </div>
        
        <Page.Footer islogged = {islogged} />
   
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  },dispatch);
}

function mapStateToProps(state){
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
