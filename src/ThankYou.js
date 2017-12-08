import React, { Component } from 'react';


//Import Sass
import "./Sass/main.scss";

//Importing Themes
import TemplateTY from './Templates/A/ty.js';

class ThankYou extends Component {
 
 
  constructor(props){
        super(props);
        
  }
  

  componentWillMount(){
    
  }

  render() {
    
   

    return (
        
      
      <div className="wrapper">
      
         <div className="container-fluid">
         
            <div className="row">
            
                
                <TemplateTY />
               
                
            
            </div>
         
         </div>
      
        
      </div>

    );
  }
}



export default (ThankYou);


