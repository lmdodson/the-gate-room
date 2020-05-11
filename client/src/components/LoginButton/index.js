import React from "react";

import { Button } from "reactstrap"

import { useAuth0 } from "../../react-auth0-spa";

const Login = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
    <Button 
    id="qsLoginBtn"
    className="btn-margin"
    onClick={() => loginWithRedirect({})}
  >
    Log in
  </Button>
  )
}

export default Login;