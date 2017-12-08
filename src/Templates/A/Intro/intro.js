import React, { Component } from 'react';
//Stripe
import {StripeProvider} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import Form from './../Form/form.js';



class Intro extends Component {
  
  constructor(props){
        super(props);
        
        this.state = {
            themeColor: {color: window.clientFound.mainColor},
            backgroundColor: {backgroundColor: this.props.data.backgroundColor},
            desktop: '',
            mobile: '',
            giftTitle:this.props.data.giftTitle,
            headerTitle:this.props.data.introHeadline,
            headerDesc:this.props.data.description,
            backImg:{'background-image':'url('+this.props.data.headerImage+')'}
        };
        
  }
  
  componentWillMount(){
    this.creativeDekstopUrl(this.props.data);
    this.creativeMobileUrl(this.props.data);
  }

  componentDidMount(){

     var desktopImage = "https://d3t0jwn5a2vj5g.cloudfront.net/clients/" 
    + this.props.data.acronym + '/' + this.props.data.creativeName + '/' + this.props.data.headerImage;
    this.setState({backImg: {'background-image':'url('+desktopImage+')'}});
     // console.log();
      
  }
  
  creativeDekstopUrl(data){
    // console.log(data);
     
    var desktopImage = "https://d3t0jwn5a2vj5g.cloudfront.net/clients/" 
    + data.acronym + '/' + data.creativeName + '/' + data.headerImage;
     this.setState({backImg: {'background-image':'url('+desktopImage+')'}});
  }
  
  creativeMobileUrl(data){
    
    let mobileImage = "https://d3t0jwn5a2vj5g.cloudfront.net/clients/" 
    + data.acronym + '/' + data.creativeName + '/' + data.mobileImage;
    
     this.setState({backImg: {'background-image':'url('+mobileImage+')' }});
    // this.setState({mobile: mobileImage});
    
  }


  render() {
    
   

    return (
        
      
      <section className="" id="intro" style={this.state.backImg}>
        
        <div className="row content-area " style={this.defaultObject}>

          
        
            <div className="col-md-6 content-bar " >
              <div className="errorMessageContainer">
                <div className="ErrorMessage page-error">
                <span className="field-error-indicator"></span>
                 <span className="field-error-text">
                        There was a problem processing your request.
                </span>
                </div>
           </div>

            <div className="form-row">
                  <div className="intro">
                      <h1 style={this.state.themeColor}>{ ReactHtmlParser(this.state.headerTitle) }</h1>
                      <p>{ ReactHtmlParser(this.state.headerDesc) }</p>
                  </div>
            </div>

            <h2 className="section-header-container" style={this.state.themeColor}> { ReactHtmlParser(this.state.giftTitle) } </h2>

               <StripeProvider apiKey="pk_test_dQc76uiF0BvqNeKWHKuCu7y4">
                  <Elements>
                   {/* Form Area */}
                     <Form />
                  </Elements>
                </StripeProvider>
       
                
            </div>
        
        </div>
      
      </section> 

    );
  }
}



export default (Intro);

