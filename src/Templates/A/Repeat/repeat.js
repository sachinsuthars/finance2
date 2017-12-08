import React, { Component } from 'react';
import Select from '../../../Form/Inputs/select.js';
import {connect} from 'react-redux';
import cookie from 'react-cookies';


class RepeatUser extends Component {
 
 
  constructor(props){
        super(props);
        
        this.state = {
          
            default: ''
    
        };
  }
  

  componentWillMount(){

  }
  
  notYou(event){
      event.preventDefault();
      this.props.changeRepeat(false);
      this.props.changeRepeatDonor(false);
      cookie.remove('userCookie', { path: '/' });
      
  }
  
  handleSelectRepeatUser(event){
      
      if(event.currentTarget.value == "false"){
          this.props.changeRepeat(false);
      } else if(event.currentTarget.value == "true"){
          this.props.changeRepeat(true);
      }
      
  }

  render() {
    
   

    return (
        
        <section id="billing">
        
            <p>Would you like to donate with the payment method ending in: {this.props.last4}</p>
            
            
   
        
            {/* First Name */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="repeatUser">Same Method?</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <select onChange={this.handleSelectRepeatUser.bind(this)}  name="repeatUser" id="repeatUser" >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        
                    
                   
                   </div>
                
            </div>
            
            
            {/* Last Name */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        Is this not you? 
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <p>Please <a href='#' onClick={this.notYou.bind(this)}>click here</a></p>
                   
                   </div>
                
            </div>
            
            
            
        </section>

    );
  }
}



const mapStateToProps = (state) => {
    return {
        repeatUser : state.repeatUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        changeRepeat : (repeat) => {
            dispatch(
                {
                    type: "ChangeRepeat",
                    payload : repeat
                }
            );
        },
        
        changeRepeatDonor : (repeat) => {
            dispatch(
                {
                    type: "ChangeRepeatDonor",
                    payload : repeat
                }
            );
        }
     
     


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatUser);


