import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
  
  constructor(props){
        super(props);
        
  }
  
  componentWillMount() {
    
    
  }
  
  

  
  
  login() {
    this.props.auth.login();
  }
  
  
  render() {
    
    const { isAuthenticated } = this.props.auth;
    
    return (
      
      <div>
          <div className="container-fluid">
            {
              isAuthenticated() && (
                  <h4>
                    You are logged in! You can now view your{' '}
                    <Link to="profile">profile area</Link>
                    .
                  </h4>
                )
            }
            
            { this.props.role === 'admin' && (<p>Welcome Team Member</p>)}
            { this.props.role !== 'admin' && (<p>Welcome Client {this.props.role}</p>)}
            
            {
              !isAuthenticated() && (
                  <h4>
                    You are not logged in! Please{' '}
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </a>
                    {' '}to continue.
                  </h4>
                )
            }
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        initial : state.initial,
        role : state.role
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        changeInitial : (initial) => {
            dispatch(
                {
                    type: "ChangeInitial",
                    payload : initial
                }
            );
        },
        changeRole : (role) => {
            dispatch(
                {
                    type: "ChangeRole",
                    payload : role
                }
            );
        }
     


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
