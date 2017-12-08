import React, { Component } from 'react';
import InputSet from '../Inputs/inputSet.js';
import Select from '../Inputs/select.js';
import {connect} from 'react-redux';

const moment = require('moment');


class Dynamic extends Component {
 
 
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
        
        <section id="dynamic">
        
        
        
            {/* Page ID */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="pageID"><sup>*</sup>Page ID:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="pageID" id="pageID"  />
                   
                   </div>
                
            </div>
            
            {/* Frequency */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="frequency"><sup>*</sup>Frequency:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="frequency" id="frequency" value={this.props.frequency} />
                   
                   </div>
                
            </div>
            
            {/* Returning Donor */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="repeatUserSetting"><sup>*</sup>Repeat Donor:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="repeatDonor" id="repeatDonor" value={this.props.repeatDonor} />
                   
                   </div>
                
            </div>
            
            {/* Repeat User Same Payment */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="repeatUserSetting"><sup>*</sup>Repeat User Same Payment:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="repeatUserSetting" id="repeatUserSetting" value={this.props.repeatUser} />
                   
                   </div>
                
            </div>
            
            
            
            
            {/* Source Code */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="source"><sup>*</sup>Source Code:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="source" id="source"  />
                   
                   </div>
                
            </div>
            
            
            {/* Reference Code */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="reference"><sup>*</sup>Reference Code:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="reference" id="reference"  />
                   
                   </div>
                
            </div>
            
            {/* Layout  */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="reference"><sup>*</sup>Layout Used:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="layout" id="layout" value={window.creativeFound.layout}  />
                   
                   </div>
                
            </div>
            
            
            {/* Custom Code */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="reference"><sup>*</sup>Custom Code:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="customCode" id="customCode"  />
                   
                   </div>
                
            </div>
            
            {/* Amount*/}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="amount"><sup>*</sup>Amount:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="amount" id="amount" value={this.props.transaction} />
                   
                   </div>
                
            </div>
            
            {/* Banner */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="banner"><sup>*</sup>Banner Code:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="banner" id="banner" value={window.creativeFound.creativeName} />
                   
                   </div>
                
            </div>
            
            {/* Amount Type */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="amountType"><sup>*</sup>Amount Type:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="amountType" id="amountType" value={this.props.donationType} />
                   
                   </div>
                
            </div>
            
            {/* Time Initiated */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="timeInitiated"><sup>*</sup>Time Initiated:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="timeInitiated" id="timeInitiated" value={moment().format('MM/DD/YYYY, h:mm:ss a')}  />
                   
                   </div>
                
            </div>
            
            
            {/* IP Address */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="ipAddress"><sup>*</sup>IP Address:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="ipAddress" id="ipAddress"  />
                   
                   </div>
                
            </div>
            
            
            {/* IP City */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="ipCity"><sup>*</sup>IP City:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="ipCity" id="ipCity"  />
                   
                   </div>
                
            </div>
            
            
            {/* IP State */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="ipState"><sup>*</sup>IP State:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="ipState" id="ipState" />
                   
                   </div>
                
            </div>
            
            
            {/* IP Country */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="ipCountry"><sup>*</sup>IP Country:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="ipCountry" id="ipCountry" />
                   
                   </div>
                
            </div>
            
            {/* IP Zip */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="ipZip"><sup>*</sup>IP Zip:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="ipZip" id="ipZip" />
                   
                   </div>
                
            </div>
            
            
            {/* IP User */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="ipUser"><sup>*</sup>IP User:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="ipUser" id="ipUser"  />
                   
                   </div>
                
            </div>
            
            
            {/* ISP */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="isp"><sup>*</sup>ISP:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="isp" id="isp"  />
                   
                   </div>
                
            </div>
            
            
            {/* Large Gift Alert */}
            <div className="row field">
                
                   <div className="col-sm-2">
                   
                        <label htmlFor="largeGift"><sup>*</sup>Large Gift Alert:</label>
                
                   </div>
                   
                   <div className="col-sm-10">
                   
                        <InputSet type="text" name="largeGift" id="largeGift"  />
                   
                   </div>
                
            </div>
            
            
        </section>

    );
  }
}




const mapStateToProps = (state) => {
    return {
        transaction : state.transaction,
        frequency: state.frequency,
        donationType : state.donationType,
        repeatUser : state.repeatUser,
        repeatDonor: state.repeatDonor
        
    };
};


export default connect(mapStateToProps)(Dynamic);