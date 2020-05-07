import React from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import Unauth from "../../components/Unauthenticated"

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();


  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : <Unauth />;

  return <Route path="/" render={render} {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
};


export default withRouter(PrivateRoute);