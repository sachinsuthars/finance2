import React, { Component } from 'react';


class Section extends Component {
 
  defaultStyle = {
    
    color : this.props.client.secondaryColor
    
  };
  

  render() {
    
   

    return (
        
      
        
      <div className={this.props.sectionClass} >
        
         <h2 className="section-header-container" style={this.defaultStyle}>{this.props.sectionName}</h2>
      
      </div>
    
     

    );
  }
}



export default (Section);

