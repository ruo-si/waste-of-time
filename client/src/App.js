/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head";
import Footer from "./components/Footer";
import userAPI from "./utils/userAPI";
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import TheChallenge from "./pages/TheChallenge";
import Dashboard from "./pages/Dashboard";
import BannerQuote from "./components/BannerQuote";

// import ReactDOM from "react-dom";
function App() {
  const [userState, setUserState] = useState({});
  // console.log(userState)
  useEffect(() => {
    // auth user on first render
    authenticate();
  }, []);

  console.log(userState.name);

  // userState for testing ONLY
  // const [demoUser, setUserDemo] = useState({
  //   email: "userState.email",
  //   gameScore: 30,
  //   highScore: 40,
  //   name: "vvv",
  //   status: null,
  //   username: "VVV",
  // });

  //user authentication
  function authenticate() {
    return userAPI
      .authenticateUser()
      .then(({ data }) => {
        console.log("user:", data);
        setUserState(data);
      })
      .catch((err) => console.log("registered user:", err.response));
  }

  // console.log(userState)

  // logout user
  function logout() {
    console.log("logout");
    userAPI
      .logout()
    //   .then(window.location.href = "/")
  }

  return (
    <Router>
      <BannerQuote />
      <Head logout={logout} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/TheChallenge"
          component={() => (
            <TheChallenge userState={userState} setUserState={setUserState} />
          )}
        />
        <Route
          exact
          path="/Login"
          render={(props) => (
            <Login
              {...props}
              authenticate={authenticate}
              user={userState}
              setUserState={setUserState}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup {...props} authenticate={authenticate} user={userState} />
          )}
        />
        <Route
          exact
          path="/logout"
          authenticate={authenticate}
          user={userState}
        />

        <Route exact path={["/", "/Dashboard"]}>
          <Dashboard {...userState} />
        </Route>

        <Route exact path="/Dashboard">
          <Dashboard {...userState} />
        </Route>

        <Route component={NoMatch} />
      </Switch>

      {userState.email ? <Redirect to="/Dashboard" /> : <></>}

      <Footer />
    </Router>
  );
}

export default App;
