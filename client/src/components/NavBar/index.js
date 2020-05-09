//! Dependencies
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { useAuth0 } from "../../react-auth0-spa";

import "./style.css"
import door from "../../assets/Door.jpg"

//! Define NavBar component 
const NavBar = () => {
  // define login variables
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

    // JSX for HTML elements
  return (
    <div className="container">
        <Container>
          {/* Image that links home */}
          <a href="/">
            <img
              src={door}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="fancy door" 
            />
          </a>
          {/* render a log in button if user is currently not authenticated */}
            <div className="auth">
              {!isAuthenticated && (
                  <Button 
                    id="qsLoginBtn"
                    className="btn-margin"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
              )}
              </div>
              <div className="auth">
              {/* render user button if user is authenticated */}
              {isAuthenticated && (
                <UncontrolledDropdown>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                
              )}
              </div>
            )}
        </Container>
            </div>
    
  );
};

export default NavBar;
