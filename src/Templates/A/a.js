import React, { Component } from 'react';
import {connect} from 'react-redux';


//import theme styles
import './a.scss';

//import form elements
import Section from '../../Form/SectionDivider/section.js';
import Logo from '../../Form/Logo/logo.js';
import Intro from './Intro/intro.js';
 
import Footer from './Footer/footer.js';


class TemplateA extends Component {
  
  constructor(props){
        super(props);
        
        this.state = {
          
            role: this.props.role,
            client: window.clientFound,
            creativeFound: window.creativeFound,
    
        };
  }
  
  componentWillMount(){
     
      
  }
  

 

  render() {
    

    return (
        
    <div>
        
    
       {/* Logo */}
       <div className="content-area">
         <Logo data={this.state.client} /> 
       </div>
       
       {/* Main Intro Banner */}
       <Intro data={this.state.creativeFound} />
      
        
        <Footer data={this.state.client} />
     
    </div>
    
    );
  }
}

const mapStateToProps = (state) => {
    return {
        initial : state.initial,
        role : state.role,
        amounts : state.amounts
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplateA);

