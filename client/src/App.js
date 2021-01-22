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

// import ReactDOM from "react-dom";

function App() {
  const [userState, setUserState] = useState("hi"
);
console.log(userState)
  useEffect(() => {
    // auth user on first render
    authenticate()
  }, []);

  //user authentication
  function authenticate() {
    return userAPI.authenticateUser()
      .then(({ data }) => {
        console.log('user:', data);
        setUserState(data);
      })
      .catch((err) => console.log('registered user:', err.response));
  }
  console.log(userState)
  return (
    <Router>
      <Head />
      
        <Switch>
          <Route
            exact path='/'
            component={Home}
          />
          <Route
            exact path='/TheChallenge'
            component={()=>(<TheChallenge {...userState} setUserState={setUserState} />)}
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
            
            <Dashboard {...userState} />
            
          </Route>

          <Route exact path='/Dashboard' >

            <Dashboard userState={userState} />

          </Route>

          <Route component={NoMatch} />

        </Switch>

    

      {userState.email ? <Redirect to="/Dashboard" /> : <></>}
      <Footer />
    </Router>
  );
}

export default App;
