import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Profile from "./Pages/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./Utils/history";
import Room1 from "./components/Room1";
import Room2 from "./components/Room2";
import Room3 from "./components/Room3";



// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./Utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/ats" component={Story} />
            <PrivateRoute path="/room1" component={Room1} />
            <PrivateRoute path="/room2" component={Room2} />
            <PrivateRoute path="/room3" component={Room3} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
