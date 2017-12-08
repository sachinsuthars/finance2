import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './history';
import {connect} from 'react-redux';

//Importing main functions

const MainFunctions = require ('./Functions/main.js');

//Importing Themes
import TemplateA from './Templates/A/a.js';


//Import Sass
import "./Sass/main.scss";

class App extends Component {

  constructor(props){
        super(props);

        this.state = {

            role: this.props.role,
            template: 'A'

        };
  }

  componentWillMount(){

    //Update value if parameter is there
    this.updateValue();

  }

  componentDidMount(){

      //Populate parameters from url
      MainFunctions.parameterPopulateDefault('source', 'source', 'blank');
      MainFunctions.parameterPopulateDefault('pid', 'pageID', '');
      MainFunctions.parameterPopulateDefault('ref', 'reference', '');
      MainFunctions.parameterPopulateDefault('custom', 'customCode', '');
      //MainFunctions.parameterPopulateDefault('banner', 'banner', '');
      MainFunctions.parameterPopulateDefault('large', 'largeGift', '200');



      //Check for chosen param
      this.chosenParam();

      console.log('Version 1.0.0.4');

  }

  //Update value if parameter is there
  updateValue(){

      if(MainFunctions.urlParam('value')){

          this.props.changeValue(parseFloat(MainFunctions.urlParam('value')));

      }

  }

  //Check for chosen param
  chosenParam(){

      if(MainFunctions.urlParam('chosen')){

          let chosenAmount = MainFunctions.urlParam('chosen');

          if(document.getElementById(chosenAmount)){
              console.log('Button found');
              document.getElementById(chosenAmount).click();

          } else {
              console.log('Button not found');
              document.getElementById('customAmount').click();
              document.getElementById('customAmount').value = chosenAmount;

          }


      }

  }





  render() {



    return (
      <div className="wrapper">

         <div className="container-fluid">

            <div className="row">


                <TemplateA />


            </div>

         </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        initial : state.initial,
        role : state.role,
        value : state.value
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

        changeValue : (value) => {
            dispatch(
                {
                    type: "ChangeValue",
                    payload : value
                }
            );
        }



    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
