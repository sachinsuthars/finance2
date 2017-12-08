import React, { Component } from 'react';
import {connect} from 'react-redux';

//Importing main functions
const MainFunctions = require ('../../Functions/main.js');

class DonationButtons extends Component {
  
  constructor(props){
        super(props);
        
        this.state = {
          
            calculation : '',
            amountsArray : '',
            suffix: this.props.suffix
    
        };
        
  }
  
  defaultStyle = {
    
    borderColor : this.props.creative.donationColor,
    color: this.props.creative.donationColor,
    backgroundColor: '#fff',
    'font-size': '16px'
    
      
  };
  
  suffixStyle = {
      
      color: this.props.client.mainColor
      
  };
  
  selectedButton = '';
  
  defaultReset = 'border-color:' 
  + this.props.client.mainColor 
  + '; color:' 
  + this.props.client.mainColor 
  + '; background-color:#fff;' 
  ;
  
  activeStyle = 'border-color:' 
  + this.props.client.mainColor 
  + '; color:#fff; ' 
  + 'background-color:' 
  + this.props.client.mainColor 
  ;
  
  currentSuffix = this.props.suffix;
  
  componentWillMount(){
      
      //Checking if a custom donation amount was passed in
      
      //Check if an average amount was passed in
      if(MainFunctions.urlParam('AVG')){
          
          //Save that average amount
          let averagePassed = Math.floor(parseFloat(MainFunctions.urlParam('AVG')));
          
          //Check that it is not 0 or blank
          if(averagePassed && averagePassed != 0){
              
              //Check for percentage array
              if(MainFunctions.urlParam('PERCENT')){
                  
                  //Form Donation Array
                  let percentArray = MainFunctions.socialFix(MainFunctions.urlParam('PERCENT'));
                  
                  let donationAmounts = [];
                  
                  //loop through the percentage array
                  for(let w = 0; w < percentArray.length; w++){
                      
                      donationAmounts.push(  Math.floor(parseFloat(percentArray[w] * parseFloat(averagePassed) )));
                      
                  }
                  
                  //Set the donation array
                  this.props.changeAmounts(donationAmounts);
                  
              } else if(MainFunctions.urlParam('AMT')) { 
                  
                  //If avg is passed in but no percentage
                  this.props.changeAmounts( MainFunctions.socialFix(MainFunctions.urlParam('AMT')) );
                  
              }
              
             
              
          }
          
      } else if (MainFunctions.urlParam('AMT')){

        this.props.changeAmounts( MainFunctions.socialFix(MainFunctions.urlParam('AMT')) );

      }
      // console.log(1);
      // console.log(this.props.amounts);
      // console.log(this.props);
      
      //Render Donation Buttons
      this.renderDonationArray(this.props.amounts);
      
  }
  
  componentWillReceiveProps(nextProps){
      
      //  console.log(2);
      // console.log(this.props.amounts);
       //Change the suffix when the frequency changes
       this.setState({suffix: nextProps.suffix});
       
       setTimeout(()=>{
           
            this.renderDonationArray(this.props.amounts);
           
       }, 50);
          
      
  }

  handleClick(event){
      
      event.preventDefault();
      
      //setCustomAmount to blank
      document.getElementById('customAmount').value = '';
      
      //Pass the amount to the transaction state
      let id = parseFloat(event.target.attributes.getNamedItem("id").value);
      this.props.changeTransaction(id);
      this.props.changeSymbol('$');
      
      //remove styling from previous clicked button
      if (this.selectedButton) {
          this.selectedButton.setAttribute("style", this.defaultReset);
      }
      
      //add the active style to button
      this.selectedButton = event.currentTarget;
      this.selectedButton.setAttribute("style", this.activeStyle);
      
      //Set the donation type to array
      this.props.changeType('array');
  }
  
  
  renderDonationArray(amounts){
      
        let donationArrayRender = amounts.map((amount) => {
          let mySuffix = this.state.suffix;
            return ( 
                
                <div className="col-md-3" key={amount} >
                
                     <button onClick={this.handleClick.bind(this)} id={amount} className={this.props.classButton} style={this.defaultStyle}>
          
                        $ {amount}
                    
                    </button>
                     
                </div>
                
                
            );
        });
        
        
        this.setState({amountsArray: donationArrayRender});
        
      
  }
  


  render() {
    
   

    return (
        
        <div>
        
            {this.state.amountsArray}
            
        </div>

    );
  }
}


const mapStateToProps = (state) => {
    return {
       value: state.value,
       prefix: state.prefix,
       suffix: state.suffix,
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
        
        changeAmounts : (amounts) => {
            dispatch(
                {
                    type: "ChangeAmounts",
                    payload : amounts
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




export default connect(mapStateToProps, mapDispatchToProps)(DonationButtons);

