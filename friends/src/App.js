import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login"
import FriendsList from "./components/FriendList"

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
          <Switch>
            <PrivateRoute exact path='/friends' component={FriendsList}/>
            <Route path='/login' component={Login} />
            <Route component={Login} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;



// for this project the app file will be housing all of my components which i will be importing in.
// i will create a simple login page with a username and password to fill out (THIS IS REMINDING ME OF BUILD WEEK!). i will need to create a PrivateRoute for the login info. this is going to be holding my local storage 
// *IMPORTANT STUFF BELOW
// // Private Route requirements:
// 1. It has the same API as <Route />
// 2. It renders a <Route /> and passes all the props to it
// 3. It checks if the user is authenticated. If they are, render the component passed in as a prop. Otherwise, redirect to /login

//privateroute will hold my tocken inside of it
//will also need to come up with a utilities folder which will have my axioswithauth in it

//lastly i will need to create folder for the friends list that i will be creating. 