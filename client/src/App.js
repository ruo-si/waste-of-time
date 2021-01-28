/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Comments from "./pages/Dashboard";
// import { Container } from "./components/Grid";
// import Comment from "./pages/Comment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head";
import Footer from "./components/Footer";
import userAPI from "./utils/userAPI";
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
// import TheScene from "./pages/TheScene";
import TheChallenge from "./pages/TheChallenge";
import Dashboard from "./pages/Dashboard";
import BannerQuote from "./components/BannerQuote";


// import ReactDOM from "react-dom";
function App() {

  const [userState, setUserState] = useState({})
  // console.log(userState)
  useEffect(() => {
    // auth user on first render
    authenticate()
  }, []);

  console.log(userState)

  // userState for testing ONLY
  const [demoUser, setUserDemo] = useState({
    email: "userState.email",
    gameScore: 30,
    highScore: 40,
    name: "vvv",
    status: null,
    username: "VVV",
  });

  // const [demoUser, setUserDemo] = useState({
  //   email: userState.email,
  //   gameScore: userState.gameScore,
  //   highScore: userState.highScore,
  //   name: userState.name,
  //   status: userState.status,
  //   username: userState.username,
  // });

  //user authentication
  function authenticate() {
    return userAPI.authenticateUser()
      .then(({ data }) => {
        console.log('user:', data);
        setUserState(data);
      })
      .catch((err) => console.log('registered user:', err.response));
  }

  // console.log(userState)

  return (
    <Router>
      <BannerQuote />
      <Head />

      <Switch>
        <Route
          exact path='/'
          component={Home}
        />
        <Route
          exact path='/TheChallenge'
          component={() => (<TheChallenge userState={userState} setUserState={setUserState} />)}
        />
        <Route
          exact path='/Login'
          render={props => (

            <Login
              {...props}
              authenticate={authenticate}
              user={userState}
              setUserState={setUserState}
            />
          )}

        />
        <Route
          exact path='/signup'
          render={props => (

            <Signup
              {...props}
              authenticate={authenticate}
              user={userState}

            />

          )}
        />
        <Route exact path={["/", "/Dashboard"]}>

          <Dashboard {...demoUser} />

        </Route>

        <Route exact path='/Dashboard' >

          <Dashboard userState={demoUser} />

        </Route>

        <Route component={NoMatch} />


      </Switch>


      {userState.email ? <Redirect to="/Dashboard" /> : <></>}


      <Footer />
    </Router>
  );
}

export default App;
