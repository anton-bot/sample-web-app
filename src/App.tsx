import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" render={() => <Login />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
