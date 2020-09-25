import React from 'react';
import LoginForm from './components/Login';
import classes from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <div className={classes.LoginForm}>
                  <LoginForm />
                </div>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
