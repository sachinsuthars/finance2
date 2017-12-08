import React, { Component } from 'react';
import {connect} from 'react-redux';




class Frequency extends Component {
  
  constructor(props){
        super(props);
        
        
        this.state = {
        };
        
  }
  
  
  //Current Button Selected
  selectedButton = '';
  
  //Default Button Colors
  defaultObject = {
    color: '#e5e5e5',
    backgroundColor: "#fff",
    borderColor: "#ddd"
  };
  

  //Reser Back to Default
  resetStyle = 'olor:#e5e5e5; background-color:#fff; border-color:#e5e5e5;';
  
  //Active Color
  activeStyle = 'color:#fff; background-color:' 
            + this.props.clientStyle.frequencyColor 
            + '; border-color:' 
            + this.props.clientStyle.frequencyColor 
            + ';';
 
 
  
  changeFrequency(event){
    
      event.preventDefault();
      
       
      //Check if a previous button was clicked and reset it
      if (this.selectedButton) {
          this.selectedButton.setAttribute("style", this.resetStyle);
      }
    
      
      //Grab the current clicked button and change it's style
      this.selectedButton = event.currentTarget;
      this.selectedButton.setAttribute("style", this.activeStyle);
      
  
      //Set the value of the frequency to the button chosen
      let dataFrequency = event.target.attributes.getNamedItem("data-frequency").value;
      this.props.changeFrequency(dataFrequency);
      
      
      if(dataFrequency == 'single'){
        
        //Change the suffix of the buttons
        this.props.changeSuffix(this.props.creative.suffix);
      
        
      } else {
        
        //Change the suffix of the buttons
        this.props.changeSuffix(this.props.creative.monthlySuffix);
      
        
      }
      
      
      
    
  }
  

  componentDidMount(){
  
    //select single by default
    document.getElementById('singleButton').click();
  
  }

  render() {
    
   

    return (
        
      
      <section className="row " id="Frequency">
        
      
            <div className="col-md-6">
      
                <button id="singleButton" data-frequency="single" onClick={this.changeFrequency.bind(this)} className={this.props.buttonClass} style={this.defaultObject} ref="single">{this.props.single}</button>
        
            </div>
            
            <div className="col-md-6">
            
                <button id="recurringButton" data-frequency="recurring" onClick={this.changeFrequency.bind(this)} className={this.props.buttonClass} style={this.defaultObject} ref="recurring">{this.props.recurring}</button>
            
            </div>
            
        
       
      
      </section> 

    );
  }
}



const mapStateToProps = (state) => {
    return {
      frequency : state.frequency,
      
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        changeFrequency : (frequency) => {
            dispatch(
                {
                    type: "ChangeFrequency",
                    payload : frequency
                }
            );
        },
     
        changeSuffix : (suffix) => {
            dispatch(
                {
                    type: "ChangeSuffix",
                    payload : suffix
                }
            );
        },


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Frequency);

