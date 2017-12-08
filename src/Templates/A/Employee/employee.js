
let optionsCompany = [
    {value: "Trimantra", key:'TriMantra'},
    {value: "Doyenhub", key:'Doyenhub'},
];


import React, { Component } from 'react';
import Select from '../../../Form/Inputs/select.js';

class Employee extends Component {
 
 
  constructor(props){
        super(props);
        
        this.state = {
          
            default: ''
    
        };
  }
  

  componentWillMount(){

  }

  render() {
    
   

    return (
        
        <section id="employee">
        
            {/* Company Box */}
            <div className="row">
                
                   <div className="col-sm-12">
                   
                        <p> {this.props.empLabelValue} </p>
                
                   </div>
                   
                   <div className="col-md-10 ml-10">
                   
                        <Select className="col-md-10" options={optionsCompany} name="title" id="title" required />
                   
                   </div>
                
            </div>
        
        </section>

    );
  }
}



export default (Employee);


