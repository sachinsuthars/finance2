import React, { Component } from 'react';


class Input extends Component {
 

  render() {
    

    return (
      
      <input type={this.props.type} className={this.props.classInput} name={this.props.name} id={this.props.name}  />
    
    );
  }
}



export default (Input);

