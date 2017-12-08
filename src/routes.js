import React from 'react';
import { Redirect, Route, Router, Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App';
import ThankYou from './ThankYou';
import history from './history';


/* Import Redux Elements */
import store from './Store/store.js';
import {Provider} from 'react-redux';


export const makeMainRoutes = () => {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}  component={App}>
          <Switch>
            <div>

              <Route exact path="/success" render={(props) => <ThankYou  {...props} />} />
              <Route exact path="/p/:client/:creative/" render={(props) => <App  {...props} />} />


              {/* For AWS Testing Server URL's */}

              <Route exact path="/prod/correct" render={(props) => <ThankYou  {...props} />} />
              <Route exact path="/prod/p/:client/:creative/" render={(props) => <App  {...props} />} />


            </div>
           </Switch>
          </Router>
      </Provider>
     </div>
  );
};
