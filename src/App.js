import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateAccount from './components/CreateAccount';
import ResetPassword from './components/ResetPassword';
import SignUpForm from './components/SignInForm'

function App() {

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={SignUpForm} />
            <Route exact path='/signup' component={CreateAccount} />
            <Route exact path='/reset' component={ResetPassword} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

// <div className="login">
// <form>
//   <div>
//     <label>Username</label>
//     <input type='text'></input>
//   </div>
//   <div>
//     <label>Password</label>
//     <input type='password'></input>
//   </div>
//   <div>
//     <button>Login</button>
//   </div>
// </form>
// </div>
