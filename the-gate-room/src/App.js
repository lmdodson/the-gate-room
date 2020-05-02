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
            <Route path="/ats" component={Story} />
            <Route path="/arrival" component={Room1} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
