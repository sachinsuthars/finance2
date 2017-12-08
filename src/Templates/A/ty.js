import React, { Component } from 'react';
import {connect} from 'react-redux';

//Import axios
const axios = require('axios');

//Importing main functions
const MainFunctions = require ('../../Functions/main.js');


//Import main data
let dataMain = require('../../Data/data.js');

//import theme styles
import './a.scss';

//import form elements
import Section from '../../Form/SectionDivider/section.js';
import Logo from '../../Form/Logo/logo.js';
import Intro from './Intro/intro.js';
import Footer from './Footer/footer.js';


class TemplateTY extends Component {
  
  constructor(props){
        super(props);
        
        this.state = {
          
            role: this.props.role,
            client: window.clientFound,
            creativeFound: window.creativeFound,
    
        };
  }
  
  componentWillMount(){
     
     if(!this.props.responseObject.title){
         
         console.log('This is not a ty page');
         
         let requestURL = dataMain.main.apiUrl + 'findTransaction?page=' + MainFunctions.urlParam('page');
    
          
           axios.get(requestURL)
          .then((response) => {
              
              console.log(response);
              this.props.changeResponseObject(response.data);
              
          })
          .catch((error)=>{
              console.log(error);
          });
          
     }
      
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
       
       <div className="content-area" >
        
         <div className="row">
         
           <div className="col-md-8 col-md-offset-2">
        
               <p>Dear {this.props.responseObject.title} {this.props.responseObject.name}</p>
               
               <p>Note: Please retain the following for your records. {window.clientFound.name} affirms that you received no goods or services in return for your generous contribution.</p>
           
               <div className="transaction-summary-entries">
               
                    <div className="transaction-summary-entry">
                        <span className="entry-label">Title:</span>
                        <span className="entry-value">{this.props.responseObject.title}</span>
                    </div>
                    
                     <div className="transaction-summary-entry">
                        <span className="entry-label">Name:</span>
                        <span className="entry-value">{this.props.responseObject.name}</span>
                    </div>
                    
                     <div className="transaction-summary-entry">
                        <span className="entry-label">Email:</span>
                        <span className="entry-value">{this.props.responseObject.email}</span>
                    </div>
                    
                     <div className="transaction-summary-entry">
                        <span className="entry-label">Address 1:</span>
                        <span className="entry-value">{this.props.responseObject.street1}</span>
                    </div>
                    
                     <div className="transaction-summary-entry">
                        <span className="entry-label">Address 2:</span>
                        <span className="entry-value">{this.props.responseObject.street2}</span>
                    </div>
                    
                     <div className="transaction-summary-entry">
                        <span className="entry-label">City:</span>
                        <span className="entry-value">{this.props.responseObject.city}</span>
                    </div>
                    
                    <div className="transaction-summary-entry">
                        <span className="entry-label">State/Province:</span>
                        <span className="entry-value">{this.props.responseObject.state}</span>
                    </div>
                    
                    <div className="transaction-summary-entry">
                        <span className="entry-label">Amount:</span>
                        <span className="entry-value">${this.props.responseObject.amount}</span>
                    </div>
                    
                    <div className="transaction-summary-entry">
                        <span className="entry-label">Card Type:</span>
                        <span className="entry-value">{this.props.responseObject.cardType}</span>
                    </div>
                    
                    <div className="transaction-summary-entry">
                        <span className="entry-label">Card Number:</span>
                        <span className="entry-value">***************{this.props.responseObject.last4}</span>
                    </div>
                    
                    <div className="transaction-summary-entry">
                        <span className="entry-label">Expiration Date:</span>
                        <span className="entry-value">{this.props.responseObject.expirationDate}</span>
                    </div>
                    
                    {this.props.frequency == "monthly" && (
                        <div className="transaction-summary-entry">
                            <span className="entry-label">Your payment will recur:</span>
                            <span className="entry-value">{this.props.responseObject.frequency}</span>
                        </div>
                    )}
               
               </div>
               
           
           </div>
           
         </div>  
           
       </div>  
        
        <Footer data={this.state.client} />
     
    </div>
    
    );
  }
}

const mapStateToProps = (state) => {
    return {
        initial : state.initial,
        role : state.role,
        amounts : state.amounts,
        transaction : state.transaction,
        responseObject : state.responseObject
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        changeResponseObject : (response) => {
            dispatch(
                {
                    type: "UpdateResponseObject",
                    payload : response
                }
            );
        },
        

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateTY);

