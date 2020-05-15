import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import history from "./Utils/history";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

// Import pages to define routes
import Home from "./Pages/Home";
import ATS from "./Pages/ATS";
import Profile from "./Pages/Profile";
import Cabin from "./Pages/Cabin";
import ComputerCore from "./Pages/ComputerCore";
import Corridor from "./Pages/Corridor";
import Elevator from "./Pages/Elevator";
import FlightDeck from "./Pages/FlightDeck";
import Intro from "./Pages/Intro";
import LifeSupport from "./Pages/LifeSupport";


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
        <div className="d-flex flex-column h-100">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/ats" component={ATS} />
            <PrivateRoute path="/cabin" component={Cabin} />
            <PrivateRoute path="/computercore" component={ComputerCore} />
            <PrivateRoute path="/corridor" component={Corridor} />
            <PrivateRoute path="/elevator" component={Elevator} />
            <PrivateRoute path="/flightdeck" component={FlightDeck} />
            <PrivateRoute path="/intro" component={Intro} />
            <PrivateRoute path="/lifesupport" component={LifeSupport} />
          </Switch>
        </div>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
