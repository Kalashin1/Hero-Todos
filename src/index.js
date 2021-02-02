import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './Styled/styled'
import './index.css';
import App from './App';
import AddTodos from './AddTodos.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



ReactDOM.render(

  <React.StrictMode>
   
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/new-todo">
            <AddTodos />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
