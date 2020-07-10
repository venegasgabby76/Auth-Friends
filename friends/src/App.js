import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login"

function App() {
  return (
    <div className="App">
      <h1>THIS IS MY HOMEPAGE!</h1>
      <Login />

    </div>
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