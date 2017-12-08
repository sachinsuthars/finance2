import React, { Component } from 'react';
import {connect} from 'react-redux';
import history from '../../../history';
import cookie from 'react-cookies';

//Stripe
import {injectStripe} from 'react-stripe-elements';

//Importing main functions
const MainFunctions = require ('../../../Functions/main.js');

//Import main data
let dataMain = require('../../../Data/data.js');

//import form elements
import Section from '../../../Form/SectionDivider/section.js';
import Frequency from '../../../Form/Frequency/Frequency.js';
import DonationButtons from '../../../Form/Donations/donationsButtons.js';
import DonationCustom from '../../../Form/Donations/donationsCustom.js';

//Form Sections specific to this template
import Employee from '../Employee/employee.js';
import Billing from '../Billing/billing.js';
import Dynamic from '../../../Form/Dynamic/dynamic.js';
import Payment from '../Payment/payment.js';
import RepeatUser from '../Repeat/repeat.js';

//Import jquery
const jQuery = require("jquery");

//Import axios
const axios = require('axios');


let buttonStyle = {

  backgroundColor: window.clientFound.mainColor,
   border:'none'
};

class Form extends Component {

  constructor(props){
        super(props);

        this.state = {

            role: this.props.role,
            client: window.clientFound,
            creativeFound: window.creativeFound,
            otherPlaceHoder: window.creativeFound.giftOtherLabel,
            amountsArray : '',
            dynamic: {display: "none"},
            userCookie: {
                last4: ''
            },
            repeatUser: this.props.repeatUser,
            welcomeBack: 'Welcome back '

        };
  }

  componentWillMount(){


      //Hide and Show Dynamic Section
      if(MainFunctions.urlParam('debug')){
          this.setState({dynamic : {display: 'block'}});
      }else{
          this.setState({dynamic : {display: 'none'}});
      }


      //Se the prefix and suffix of donation levels to the creative found
      this.props.changePrefix(this.state.creativeFound.prefix);
      this.props.changeSuffix(this.state.creativeFound.suffix);


  }

  componentDidMount(){

      //check if a user cookie is present
      this.loadUser();

  }

  trackVisitImpression(){

      if(!MainFunctions.urlParam('admin')){


            //If an admin parameter is not passed then build a tracking object.

            let trackingObject = {

            'source' : jQuery('#source').val(),
            'banner' : jQuery('#banner').val(),
            'reference' : jQuery('#reference').val(),
            'customCode' : jQuery('#customCode').val(),
            'pageid' : jQuery('#pageID').val(),
            'layout' : jQuery('#layout').val(),

            };

            console.log(trackingObject);

            //format the request url
            let requestURL = dataMain.main.apiUrl + 'trackImpression';


           axios.post(requestURL, {

            params: {
              trackingObject: trackingObject
            }

           }).then((response) => {

               console.log(response);

           }).catch((error) => {
              console.log(error);

           });



        } else {
            console.log('Admin visit will not be tracked.');
        }


  }


  loadUser(){

      if(MainFunctions.urlParam('userToken')){

          let requestURL = dataMain.main.apiUrl + 'findUser';

          let userToken = MainFunctions.urlParam('userToken');


           axios.get(requestURL, {
            params: {
              customer: userToken
            }
           })
          .then((response) => {


            let cookieUser = {
                token : response.data.id,
                last4: response.data.sources.data[0].last4,
                name: response.data.sources.data[0].name,
                title: response.data.metadata.title,
            };


            this.setState({userCookie :cookieUser});
            this.previousTracking(response.data.metadata);

            //Save a cookie for the user
            cookie.save('userCookie', cookieUser, { path: '/' , maxAge: 86400 * 365  });

            //Format user name
           let welcomeMessage = "Welcome back " + cookieUser.title + ' ' + cookieUser.name;
           this.setState({welcomeBack: welcomeMessage});

           //Activate repeatUser payment section
           this.props.changeRepeat(true);

           //Set the field to record that a repeat Donor has come to the page
           this.props.changeRepeatDonor(true);

            //register the impression
            this.trackVisitImpression();

          })
          .catch((error) => {
            console.log(error);
            this.trackVisit();

            //register the impression
            this.trackVisitImpression();
          });



      } else if(cookie.load('userCookie')){

           let cookieUser = cookie.load('userCookie');

           this.setState({userCookie :cookieUser});

           let requestURL = dataMain.main.apiUrl + 'findUser';

           axios.get(requestURL, {
            params: {
              customer: cookieUser.token
            }
           })
          .then((response) => {

            this.previousTracking(response.data.metadata);

            //register the impression
            this.trackVisitImpression();
          })
          .catch((error) => {
            console.log(error);
            this.trackVisit();

            //register the impression
            this.trackVisitImpression();
          });

           //Format user name
           let welcomeMessage = "Welcome back " + cookieUser.title + ' ' + cookieUser.name;
           this.setState({welcomeBack: welcomeMessage});

           //Activate repeatUser payment section
           this.props.changeRepeat(true);

           //Set the field to record that a repeat Donor has come to the page
           this.props.changeRepeatDonor(true);
      }

  }


  //Load previous tracking info
  previousTracking(data){
      jQuery('#ipAddress').val(data.ipAddress);
      jQuery('#ipCity').val(data.ipCity);
      jQuery('#ipState').val(data.ipState);
      jQuery('#ipCountry').val(data.ipCountry);
      jQuery('#ipZip').val(data.ipZip);
      jQuery('#isp').val(data.isp);
      jQuery('#ipUser').val(data.ipUser);
  }

  //Maxmind Tracking
  trackVisit(){

          let onSuccess = (location) =>{


               let locationInfo = location;


                  //console.log(location);

                  jQuery('#ipAddress').val(locationInfo.traits.ip_address);
                  jQuery('#ipCity').val(locationInfo.city.names.en);
                  jQuery('#ipState').val(locationInfo.subdivisions[0].iso_code);
                  jQuery('#ipCountry').val(locationInfo.country.iso_code);
                  jQuery('#ipZip').val(locationInfo.postal.code);
                  jQuery('#isp').val(locationInfo.traits.organization);
                  jQuery('#ipUser').val(locationInfo.traits.user_type);

              };

              let onError = function(error){
                console.log(
                    "Error:\n\n"
                    + JSON.stringify(error, undefined, 4)
              );


          };


          jQuery(document).ready(function(){

               window.geoip2.insights(onSuccess, onError);


          });

    }

  //Form Submit Main Event
  handleSubmit(event){

      event.preventDefault();
        
        var err =0;
        jQuery("#mainForm .field").each(function(index, el) {
          var inp_val = jQuery(this).find(".myfield").val();
         
          if(inp_val=="")
          {
            err++;
            jQuery(this).addClass('is-required');
          } 
          else
          {
            jQuery(this).removeClass('is-required');
          }

          
        });

        if(jQuery("#state").val()=="")
        {
           err++;
           jQuery("#state").closest('.field').addClass('is-required');
        }
        else
        {
          
           jQuery("#state").closest('.field').removeClass('is-required');
        }

        if(jQuery("#email").val()!="")
        {
          var email = jQuery("#email").val();
           var re = /\S+@\S+\.\S+/;
          if(re.test(email))
          {
            jQuery("#email").closest('.field').find(".error").html("The email address is required.");
             jQuery("#email").closest('.field').removeClass('is-required');
          }
          else
          {
              err++;
              
            jQuery("#email").closest('.field').find(".error").html("The email address is invalid.");
             jQuery("#email").closest('.field').addClass('is-required');
          }
          
        }
        else
        {
           jQuery("#email").closest('.field').find(".error").html("The email address is required.");
 
        }

        console.log(jQuery('input[name=cardnumber]').val())
         
        if(err>0)
        {
          jQuery(".errorMessageContainer").show();
        }
        else
        {
          
          jQuery(".errorMessageContainer").hide();
        }


      // Check if donor has chosen a donation amount.
      if(this.props.transaction <= 0){

          jQuery('#errors').empty();

          jQuery('html, body').animate({
            scrollTop: jQuery("#intro").offset().top
          }, 500);

          jQuery('#errors').append('<h2>Please enter a valid donation amount</h2>');

          return;

      }

      if(this.props.repeatUser == false){

          this.submitNewPaymentMethodCard();

      } else {

          console.log('Repeat Payment method');
          this.submitStoredPayment();

      }




  }

  //Payment for repeat donor with stored payment methods
  submitStoredPayment(){

      //Grab all form fields and serialize them
     let formData = jQuery('#mainForm').serializeArray();

     //add our stripe token to the request
     formData.push({name: "token", value: this.state.userCookie.token});



     //Setting request url
       let requestURL = dataMain.main.apiUrl + 'transaction';


      //post to the server
      jQuery.post(requestURL, formData, ( data ) => {


      }).fail((data)=>{

          console.log(data);

      }).done((data)=>{


          if(data.status == 'Error'){

              jQuery('#errors').empty();

              jQuery('html, body').animate({
                scrollTop: jQuery("#intro").offset().top
              }, 500);

              let formatError = '<h2>An error has occured.</h2>'
              + '<h4>' + data.message + '</h4>';

              jQuery('#errors').append(formatError);

              return;

          }


          if(data.status == 'Success'){

             this.props.changeResponseObject(data);


             //Format the thank you page for staging or live
             let thankYouPage = '/success?dir='
             + window.clientFound.acronym
             + '&creative=' + window.creativeFound.creativeName
             + '&page=' + data.receiptID;


             if(window.location.href.includes('prod')){


                thankYouPage = '/success?dir='
                 + window.clientFound.acronym
                 + '&creative=' + window.creativeFound.creativeName
                 + '&page=' + data.receiptID;

             }


              let saveUserCookie = {
                  token : data.customer,
                  last4: data.last4,
                  name: data.name,
                  title: data.title,

              };


             cookie.save('userCookie', saveUserCookie, { path: '/' , maxAge: 86400 * 365  });


            jQuery('html, body').animate({
                scrollTop: jQuery("#intro").offset().top
            }, 200);

             history.push(thankYouPage);

          }


      });

  }

  //Payment with new card/debit card
  submitNewPaymentMethodCard(){

      this.props.stripe.createToken(
          {type: 'card',
          name: document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value,
          address_city: document.getElementById('city').value,
          address_country: 'United States',
          address_line1: document.getElementById('street1').value,
          address_line2: document.getElementById('street2').value,
          address_state: document.getElementById('state').value,
          address_zip: document.getElementById('postal').value

          }


          ).then(({token}) => {

            if(!token){

                jQuery('#errors').empty();

                jQuery('html, body').animate({
                  scrollTop: jQuery("#intro").offset().top
                }, 500);

                 let formatError = '<h2>An error has occured.</h2>'
                 + '<h4>Please fill in all payment information fields and try again</h4>';

                 jQuery('#errors').append(formatError);

                 return;

            } else {


                //Grab all form fields and serialize them
                let formData = jQuery('#mainForm').serializeArray();

                //add our stripe token to the request
                formData.push({name: "token", value: token.id});


                //Check for a returning donor with a new payment method
                if(document.getElementById('repeatDonor').value == 'true'){

                    console.log('Updating payment method');

                    formData.push({name: "userToken", value: this.state.userCookie.token});
                }

                  //Setting request url
                  let requestURL = dataMain.main.apiUrl + 'transaction';

                  //post to the server
                  jQuery.post(requestURL, formData, ( data ) => {


                  }).fail((data)=>{

                      console.log(data);

                  }).done((data)=>{



                      if(data.status == 'Error'){

                          jQuery('#errors').empty();

                          jQuery('html, body').animate({
                            scrollTop: jQuery("#intro").offset().top
                          }, 500);

                          let formatError = '<h2>An error has occured.</h2>'
                          + '<h4>' + data.message + '</h4>';

                          jQuery('#errors').append(formatError);

                          return;

                      }

                      if(data.status == 'Success'){

                         this.props.changeResponseObject(data);


                         //Format the thank you page for staging or live
                         let thankYouPage = '/success?dir='
                         + window.clientFound.acronym
                         + '&creative=' + window.creativeFound.creativeName
                         + '&page=' + data.receiptID;


                         if(window.location.href.includes('prod')){

                               thankYouPage = '/success?dir='
                                 + window.clientFound.acronym
                                 + '&creative=' + window.creativeFound.creativeName
                                 + '&page=' + data.receiptID;

                         }


                         let saveUserCookie = {
                          token : data.customer,
                          last4: data.last4,
                          name: data.name,
                          title: data.title,

                        };

                        cookie.save('userCookie', saveUserCookie, { path: '/' , maxAge: 86400 * 365  });

                         jQuery('html, body').animate({
                            scrollTop: jQuery("#intro").offset().top
                        }, 200);

                         history.push(thankYouPage);

                      }


                  });

            }


          }).catch((error)=>{

             console.log(error);

          });



  }


  render() {



    return (

       <form className="content-area" id="mainForm" onSubmit={this.handleSubmit.bind(this)}>

           <div className="row">
                <div className="col-sm-10 col-sm-offset-1 text-center" id="errors">

                 </div>
           </div>

             {/* Donation Array */}
           <div className="row">
               <div className="col-sm-12" id="donationButtonsArray">
                  <span><sup>*</sup> {this.state.creativeFound.giftLabel}:  &nbsp;&nbsp;</span> 
                  <div className="mt-15">

                     <DonationButtons
                      creative={this.state.creativeFound}
                      client={this.state.client}
                      classButton="donationArrayButton"
                    />

                  </div>
               </div>
           </div>

             {/* Custom Amount */}
           <div className="row">
               <div className="col-sm-6 " id="customAmountSection2">

                 
                     <DonationCustom creative={this.state.creativeFound}
                      client={this.state.client} placeholder={this.state.otherPlaceHoder} classCustom="donationArrayButton" />

               </div>
           </div>

           <div className="row mt-20">
                <div className="col-sm-12 ">
                    <p className="frequency_p"> {this.state.creativeFound.giftRecTitle} </p>
                </div>
            </div>

           {/* One Time or Montly */}
           <div className="row">
               <div className="col-sm-12" id="frequencySelection">
                    <Frequency creative={this.state.creativeFound} clientStyle={this.state.client} buttonClass="frequencyButton" single="One-Time Gift" recurring="Monthly Gift" />
               </div>
           </div>
           {/* Repeat Users Section */}

           {this.props.repeatDonor && (
           <Section sectionName={this.state.welcomeBack} sectionClass="sectionClass" client={this.state.client}/> )}

           {this.props.repeatDonor && (
           <RepeatUser last4={this.state.userCookie.last4} /> )}


           {/* Payment Section */}
               {!this.props.repeatUser && (
                    <Section sectionName={this.state.creativeFound.paymentTitle} sectionClass="sectionClass" client={this.state.client}/>
               )}
               {!this.props.repeatUser && (
                    <Payment />
               )}

            {/* Employee Section */}
              <Section sectionName={this.state.creativeFound.empTitle}  sectionClass="sectionClass" client={this.state.client}  />
              <Employee  empLabelValue={this.state.creativeFound.empLabel}  />

            


           {/* Billing Section */}

               {!this.props.repeatUser && (
                    <Section sectionName={this.state.creativeFound.billTitle} sectionClass="sectionClass" client={this.state.client} />
               )}
               {!this.props.repeatUser && (
                    <Billing />
               )}



          <div className="row cl-agree">
                <div className="col-sm-12  text-center" id="customAmountSection">
              
                    <input type="checkbox" className="input_check" value="yes" checked /> {this.state.creativeFound.lblAccept}  

                </div>
            </div>

          

           {/* Donate Button */}
            <div className="row">
                <div className="col-sm-12  text-center" id="customAmountSection">

                    <button type="submit" className="donateSubmit" style={buttonStyle}>{this.state.creativeFound.btnTitle}</button>

                </div>
            </div>


            {/* Dynamic Section */}
            <div style={this.state.dynamic}>

                <Section sectionName="Dynamic" sectionClass="sectionClass" client={this.state.client}  />

                <Dynamic  />

            </div>


        </form>

    );
  }
}

const mapStateToProps = (state) => {
    return {
        initial : state.initial,
        role : state.role,
        amounts : state.amounts,
        value: state.value,
        prefix: state.prefix,
        suffix: state.suffix,
        transaction : state.transaction,
        transactionSymbol : state.transactionSymbol,
        repeatUser : state.repeatUser,
        repeatDonor : state.repeatDonor,
        responseObject: state.responseObject
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        changeInitial : (initial) => {
            dispatch(
                {
                    type: "ChangeInitial",
                    payload : initial
                }
            );
        },

        changeRole : (role) => {
            dispatch(
                {
                    type: "ChangeRole",
                    payload : role
                }
            );
        },

        changePrefix : (prefix) => {
            dispatch(
                {
                    type: "ChangePrefix",
                    payload : prefix
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

        changeRepeat : (repeat) => {
            dispatch(
                {
                    type: "ChangeRepeat",
                    payload : repeat
                }
            );
        },

        changeRepeatDonor : (repeat) => {
            dispatch(
                {
                    type: "ChangeRepeatDonor",
                    payload : repeat
                }
            );
        },

        changeResponseObject : (response) => {
            dispatch(
                {
                    type: "UpdateResponseObject",
                    payload : response
                }
            );
        }




    };
};

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(Form));
