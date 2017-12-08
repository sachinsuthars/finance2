import React, { Component } from 'react';


class Select extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
          
            options: '',
    
        };
  }
 
 
  componentWillMount(){
      this.loadOptions(this.props.options);
  }
  
  loadOptions(options){
      
      let optionsRender = options.map((option) => {
          
        return ( 
            
            <option key={option.value} value={option.value}>{option.key}</option>
                
        );
    });
      
    this.setState({options: optionsRender});
      
      
  }
 

  render() {
    

    return (
      
      <select className={this.props.classInput} name={this.props.name} id={this.props.name}>
            {this.state.options}
      </select>
    
    );
  }
}



export default (Select);

