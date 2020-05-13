import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import ATS from "./Pages/ATS";
import Profile from "./Pages/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./Utils/history";
import Rooms from "./components/ArrivalRouter";


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
            <PrivateRoute path="/arrival" component={Rooms} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
