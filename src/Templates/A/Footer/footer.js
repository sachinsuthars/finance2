

import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



class Footer extends Component {
 
 
  constructor(props){
        super(props);

        this.state = {
      
            versLogo:"",
            bbLogo:"",
        };
        
  }
  
 componentDidMount() {

  console.log(this.props.data);
    var versImage = "https://d3t0jwn5a2vj5g.cloudfront.net/clients/" 
    + this.props.data.acronym + '/' + window.creativeFound.creativeName + '/' + window.creativeFound.versionLogo;
 
    var bbLogo = "https://d3t0jwn5a2vj5g.cloudfront.net/clients/" 
    + this.props.data.acronym + '/' + window.creativeFound.creativeName + '/' + window.creativeFound.bbLogo;
    console.log(versImage);
    console.log(bbLogo);
    this.setState({bbLogo:bbLogo });
    this.setState({versLogo:versImage });
 }
 
  render() {
    return (
        
    <div>  
         <footer id="Footer">
         
           <div className="content-area">
            
              <div  className="footer-module col-md-4 col-sm-6 col-xs-12">
                 <h1 className="footer-headline"  >{ ReactHtmlParser(window.creativeFound.footerLeftTitle) }</h1>
                   <p>{ ReactHtmlParser(window.creativeFound.footerLeftIntro) }</p>

                   <address className="bold">{ ReactHtmlParser(this.props.data.address) }</address>

              </div>
              <div    className="footer-module col-md-4 col-sm-6 col-xs-12">
                 <h1 className="footer-headline"  >{ ReactHtmlParser(window.creativeFound.footerMiddleTitle) }</h1>
                    <p>{ ReactHtmlParser(window.creativeFound.footerMiddleIntro) }</p>
                    <p className="p_privacy"><a href={this.props.data.policies} className="redColor" target="_blank">Privacy Policy</a> { ReactHtmlParser(window.creativeFound.copyrightTitle) } </p>
              </div>
               <div  className="footer-module col-md-4 col-sm-6 col-xs-12">
                 <h1 className="footer-headline"  >{window.creativeFound.footerRightTitle}</h1>
                        <a href={window.creativeFound.versLink} > 
                             <img src={this.state.versLogo} className="footerlogo hgt70"   ></img> 
                        </a>
                        <a href={window.creativeFound.bbLink} > 
                             <img src={this.state.bbLogo} className="footerlogo" ></img> 
                        </a>
                

                 
              </div>

          
           </div>

        </footer>

      </div>
      

    );
  }
}



export default (Footer);


