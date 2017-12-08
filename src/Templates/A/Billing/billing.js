
let optionsStates = [
    
    {value: '', key: ''},
    {value: 'AK', key: 'AK - Alaska'},
    {value: 'AL', key: 'AL - Alabama'},
    {value: 'AR', key: 'AR - Arkansas'},
    {value: 'AZ', key: 'AZ - Arizona'},
    {value: 'CA', key: 'CA - California'},
    {value: 'CO', key: 'CO - Colorado'},
    {value: 'CT', key: 'CT - Connecticut'},
    {value: 'DC', key: 'DC - District of Columbia'},
    {value: 'DE', key: 'DE - Delaware'},
    {value: 'FL', key: 'FL - Florida'},
    {value: 'GA', key: 'GA - Georgia'},
    {value: 'HI', key: 'HI - Hawaii'},
    {value: 'IA', key: 'IA - Iowa'},
    {value: 'ID', key: 'ID - Idaho'},
    {value: 'IL', key: 'IL - Illinois'},
    {value: 'IN', key: 'IN - Indiana'},
    {value: 'KS', key: 'KS - Kansas'},
    {value: 'KY', key: 'KY - Kentucky'},
    {value: 'LA', key: 'LA - Louisiana'},
    {value: 'MA', key: 'MA - Massachusetts'},
    {value: 'MD', key: 'MD - Maryland'},
    {value: 'ME', key: 'ME - Maine'},
    {value: 'MI', key: 'MI - Michigan'},
    {value: 'MN', key: 'MN - Minnesota'},
    {value: 'MO', key: 'MO - Missouri'},
    {value: 'MS', key: 'MS - Mississippi'},
    {value: 'MT', key: 'MT - Montana'},
    {value: 'NC', key: 'NC - North Carolina'},
    {value: 'ND', key: 'ND - North Dakota'},
    {value: 'NE', key: 'NE - Nebraska'},
    {value: "NH", key: 'NH - New Hampshire'},
    {value: "NJ", key: 'NJ - New Jersey'},
    {value: "NM", key: 'NM - New Mexico'},
    {value: "NV", key: 'NV - Nevada'},
    {value: "NY", key: 'NY - New York'},
    {value: "OH", key: 'OH - Ohio'},
    {value: "OK", key: 'OK - Oklahoma'},
    {value: "OR", key: 'OR - Oregon'},
    {value: "PA", key: 'PA - Pennsylvania'},
    {value: "RI", key: 'RI - Rhode Island'},
    {value: "SC", key: 'SC - South Carolina'},
    {value: "SD", key: 'SD - South Dakota'},
    {value: "TN", key: 'TN - Tennessee'},
    {value: "TX", key: 'TX - Texas'},
    {value: "UT", key: 'UT - Utah'},
    {value: "VA", key: 'VA - Virginia'},
    {value: "VT", key: 'VT - Vermont'},
    {value: "WA", key: 'WA - Washington'},
    {value: "WI", key: 'WI - Wisconsin'},
    {value: "WV", key: 'WV - West Virginia'},
    {value: "WY", key: 'WY - Wyoming'},
    {value: "AS", key: 'AS - American Samoa'},
    {value: "FM", key: 'FM - Federated States of Micronesia'},
    {value: "GU", key: 'GU - Guam'},
    {value: "MH", key: 'MH - Marshall Islands'},
    {value: "MP", key: 'MP - Northern Mariana Islands'},
    {value: "PR", key: 'PR - Puerto Rico'},
    {value: "PW", key: 'PW - Palau'},
    {value: "VI", key: 'VI - Virgin Islands'},
    {value: "AA", key: 'AA - Armed Forces Americas'},
    {value: "AE", key: 'AE - Armed Forces'},
    {value: "AP", key: 'AP - Armed Forces Pacific'},
    {value: "AB", key: 'AB - Alberta'},
    {value: "BC", key: 'BC - British Columbia'},
    {value: "MB", key: 'MB - Manitoba'},
    {value: "NB", key: 'NB - New Brunswick'},
    {value: "NL", key: 'NL - Newfoundland and Labrador'},
    {value: "NS", key: 'NS - Nova Scotia'},
    {value: "NT", key: 'NT - Northwest Territories'},
    {value: "NU", key: 'NU - Nunavut'},
    {value: "ON", key: 'ON - Ontario'},
    {value: "PE", key: 'PE - Prince Edward Island'},
    {value: "QC", key: 'QC - Quebec'},
    {value: "SK", key: 'SK - Saskatchewan'},
    {value: "YT", key: 'YT - Yukon'},
    {value: "None", key: 'None'},
    
];

 


import React, { Component } from 'react';
import Select from '../../../Form/Inputs/select.js';
import { PostalCodeElement} from 'react-stripe-elements';

class Billing extends Component {
 
 
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
        
        <section id="billing">
        
            
        
        
        
           
            
            
            {/* Street 1 */}
            <div className="row field">

                  <span className="error">A street address is required</span>
                
                  <div className="col-sm-3 col-md-3 mt-10 ">
                    
                      
                        <label htmlFor="street1"><sup>*</sup>Street Address:</label>
                
                   </div>
                   
                  <div className="col-sm-8 col-md-9">
                   
                        <input type="text" className="myfield" name="street1" id="street1"  />
                   
                   </div>
                
            </div>
            
            
            {/* Street 2 */}
            <div className="row">
                
                    
                   <div className="col-sm-3 col-md-3 mt-10  left-10">


                        <label htmlFor="street2">Street Address 2:</label>
                
                   </div>
                   
                   <div className="col-sm-8 col-md-9">
                   
                        <input type="text" className="myfield" name="street2" id="street2" />
                   
                   </div>
                
            </div>
            
            {/* City */}
            <div className="row field">
                    
                  <span className="error">A city is required.</span>
                 
                   <div className="col-sm-3 col-md-3 mt-10 ">

                        <label htmlFor="city"><sup>*</sup>City:</label>
                
                   </div>
                   
                  <div className="col-sm-8 col-md-9">
                   
                        <input type="text" className="myfield" name="city" id="city"   />
                   
                   </div>
                
            </div>
            
            {/* State */}
            <div className="row field">
                
                  <span className="error">A state is required</span>
                   <div className="col-sm-3 col-md-3 mt-10 ">
                   
                        <label htmlFor="state"><sup>*</sup>State:</label>
                
                   </div>
                   
                  <div className="col-sm-8 col-md-9">
                   
                        <Select options={optionsStates} className="myfield" name="state" id="state"  />
                   
                   </div>
                
            </div>
            
            
            {/* Postal Code */}
            <div className="row field">
                    
                  <span className="error">A zip code is required</span>

                   <div className="col-sm-3 col-md-3 mt-10 ">
                   
                        <label htmlFor="postal"><sup>*</sup>ZIP Code:</label>
                
                   </div>
                   
                   <div className="col-sm-8 col-md-9">
                   
                        <input className="smallInput myfield"  type="text" name="postal" id="postal"  />
                   
                   </div>
                
            </div>
            
            
           
            
            
        </section>

    );
  }
}



export default (Billing);


