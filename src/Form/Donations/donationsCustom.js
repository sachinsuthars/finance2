import React, { Component } from 'react';
import {connect} from 'react-redux';

class DonationCustom extends Component {
  
  constructor(props){
        super(props);
        
        this.state = {
          
            calculation : ''
    
        };
        
  }
  
  componentWillMount(){
      
     
      
  }


    defaultStyle = {
    
    borderColor : this.props.creative.donationColor,
    color: this.props.creative.donationColor,
    backgroundColor: '#fff',
    'font-size': '14px',
    width:'100%'
      
  };
  
    componentDidMount(){
      console.log(this.props.creative.donationColor);
   }
  
  // defaultStyle = 'border-color:' 
  // + this.props.client.mainColor 
  // + '; color:' 
  // + this.props.client.mainColor 
  // + '; background-color:#fff;' 
  // ;
  
  
  handleClick(event){
      
      //Set transaction amount to 0
      this.props.changeTransaction('');
      this.props.changeSymbol('');
      
      // //setCustomAmount to blank
      // document.getElementById('customAmount').value = '';
      
      
      // //Remove active styling from all array buttons
      
      // let allDonationButtons = document.querySelectorAll('.donationArrayButton');
      
      // for(let i = 0; i < allDonationButtons.length; i++){
          
      //   allDonationButtons[i].setAttribute("style", this.defaultStyle);
          
      // }
      
      //Set the donation type to custom
      // this.props.changeType('custom');
      
      
  }
  
  handleChange(event){
      
      let inputValue = parseFloat(event.currentTarget.value);
      
      this.props.changeTransaction(inputValue);
      this.props.changeSymbol('$');
      
  }
  


  render() {
    
   

    return (
        
        
        <input type="text" 
        className={this.props.classCustom} 
        style={this.defaultStyle} 
        name="customAmount" 
        id="customAmount" 
        placeholder={this.props.placeholder}
        onClick={this.handleClick.bind(this)}
        onChange={this.handleChange.bind(this)}/>

    );
  }
}


const mapStateToProps = (state) => {
    return {
       value: state.value,
       transaction: state.transaction,
       amounts: state.amounts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        changeTransaction : (amount) => {
            dispatch(
                {
                    type: "ChangeTransaction",
                    payload : amount
                }
            );
        },
        
        changeType : (type) => {
            dispatch(
                {
                    type: "ChangeType",
                    payload : type
                }
            );
        },
        
        changeSymbol : (symbol) => {
            dispatch(
                {
                    type: "ChangeSymbol",
                    payload : symbol
                }
            );
        }
        
    };
};




export default connect(mapStateToProps, mapDispatchToProps)(DonationCustom);

