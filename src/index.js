import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './Styled/styled'
import './index.css';
import App from './App';
import AddTodos from './AddTodos.js'
import  { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const theme = {
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
  primary: ' #0f077a',
  secondary: '#fff'
}

ReactDOM.render(

  <React.StrictMode>
   <ThemeProvider theme={theme}>
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
   </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
