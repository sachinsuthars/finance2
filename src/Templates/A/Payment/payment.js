import React, { Component } from 'react';
import {CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement} from 'react-stripe-elements';

import Select from '../../../Form/Inputs/select.js';
let optionsMonths = [
    {value: '01', key: '01'},
    {value: '02', key: '02'},
    {value: '03', key: '03'},
    {value: '04', key: '04'},
    {value: '05', key: '05'},
    {value: '06', key: '06'},
    {value: '07', key: '07'},
    {value: '08', key: '08'},
    {value: '09', key: '09'},
    {value: '10', key: '10'},
    {value: '11', key: '11'},
    {value: '12', key: '12'},
    ];

    let optionsYears = [
    {value: '2017', key: '2017'},
    {value: '2018', key: '2018'},
    {value: '2019', key: '2019'},
    {value: '2020', key: '2020'},
    {value: '2021', key: '2021'},
    {value: '2022', key: '2022'},
    {value: '2023', key: '2023'},
    {value: '2024', key: '2024'},
    {value: '2025', key: '2025'},
    {value: '2026', key: '2026'},
    {value: '2027', key: '2027'},
    ];

class Payment extends Component {
 
 
  constructor(props){
        super(props);
        
        this.state = {
          
            default: '',
            base: {base: {
                display: "inline-block !important",
                width: '100% !important',
                maxWidth: '470px !important',
                border: '1px solid #d9d6cf !important',
                padding: '5px 7px !important',
                borderRadius: '5px !important',
                boxShadow: 'inset 3px 3px 3px #f0f0f0 !important'
                
            }}
    
        };
  }
  

  componentWillMount(){

  }
  
  render() {
    
   

    return (
        
        <section id="billing">
        
           
             {/* First Name */}
            <div className="row field">
                
                   <span className="error">A first name is required.</span>
                   
                   <div className="col-sm-3 col-md-3  ">
                   
                        <label htmlFor="firstName"><sup>*</sup>First Name:</label>
                
                   </div>
                   
                   <div className="col-sm-8 col-md-9">
                   
                        <input type="text" className="myfield" name="firstName" id="firstName"  />
                   
                   </div>
                
            </div>
            
            
            {/* Last Name */}
            <div className="row field">

                   <span className="error">A last name is required.</span>
                
                   <div className="col-sm-3 col-md-3  ">
                   
                        <label htmlFor="lastName"><sup>*</sup>Last Name:</label>
                
                   </div>
                   
                  <div className="col-sm-8 col-md-9">
                   
                        <input type="text" className="myfield" name="lastName" id="lastName"  />
                   
                   </div>
                
            </div>


             {/* Email Address */}
            <div className="row field">
                
                  <span className="error">An email address is required.</span>

                   <div className="col-sm-3 col-md-3  mt-10">
                   
                        <label htmlFor="email"><sup>*</sup>Email Address:</label>
                
                   </div>
                   
                  <div className="col-sm-8 col-md-9">
                   
                        <input type="text" className="myfield" name="email" id="email"  />
                   
                   </div>
                
            </div>
        
        
            <div className="row field">

                   <span className="error">The credit card number is required.</span>
                   
                   <div className="col-sm-3 col-md-3 mt-10 ">
                        <label htmlFor="cardno"><sup>*</sup>Card Number:</label>
                   </div>
                   
                    <div className="col-sm-8 col-md-9">
                        <CardNumberElement className="inputClass mediumInput"/>
                   </div>
            </div>
            
            
                  {/* State */}
            <div className="row field">

                
                  <div className="col-sm-3 col-md-3 mt-10 ">
                   
                          <label htmlFor="postal"><sup>*</sup>Exp. Date:</label>
                
                   </div>
                   
                  <div className="col-sm-4 col-md-5 ">
                   
                        <Select options={optionsMonths} data-stripe='exp-month' name="exp_month" id="exp_month"  />
                   
                   </div>
                    <div className="col-sm-5 col-md-4">
                     <Select options={optionsYears} name="exp_yr" data-stripe='exp-year' id="exp_yr"  />
                   </div>
                
            </div>
            
            
            <div className="row field">
                   <div className="col-sm-3 col-md-3 mt-10  ">
                        <label htmlFor="cvv"><sup>*</sup>Security Code"</label>
                   </div>
                   <div className="col-sm-5 col-md-5">
                        <CardCVCElement  className="inputClass mediumInput"/>
                   </div>

                    <div className="col-sm-4 col-md-4 top12px">
                     <a href="http://help.convio.net/site/PageServer?s_site=tsan&pagename=user_donation_cvv" className="csv_help"> What is this? </a>
                    </div>
            </div>
        
        
        
        </section>
        
    
    );
  }
}



export default (Payment);