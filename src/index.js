import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import reportWebVitals from './reportWebVitals';
import FlightsContainer from './containers/FlightsContainer';
import UserContainer from './containers/UserContainer';


ReactDOM.render(
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/user" component={UserContainer} >
          </Route>
          <Route exact path="/" component={FlightsContainer} >
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
