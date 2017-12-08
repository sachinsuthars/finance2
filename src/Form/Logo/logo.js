

import React, { Component } from 'react';


class Logo extends Component {
 
 
  constructor(props){
        super(props);
        
  }
  

  componentWillMount(){
    // console.log(this.props.data);
  }

  render() {
    
   

    return (
        
      
      <header className="row" id="mainLogo">
        
        
            <div className="col-md-2">
      
                <a href={this.props.data.url}>
                
                    <img src={this.props.data.logo} className="img-logo" />
                    
                </a>
        
            </div>
        
      
      </header> 

    );
  }
}



export default (Logo);


