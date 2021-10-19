import { observer } from "mobx-react";
import Logo from "./logo";
import { NavLink } from "react-router-dom";
import authStore from "../Stores/authStore";
import SignupModal from "./SignupModal";
import { useState } from "react";
import { Button } from "react-bootstrap";

function NavBar() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NavLink to="/home">
          <img id="logo" src={Logo} alt="Logo" width="77" height="77" />
        </NavLink>
        <NavLink to="/home"> Home</NavLink>
        <NavLink to="societies">societies</NavLink>
        {authStore.user ? (
          <>
            <h5 className="nav-item">Hello {authStore.user.username}</h5>
            <h5 className="nav-item">
              <Button onClick={() => authStore.logout()}>Logout</Button>{" "}
            </h5>
          </>
        ) : (
          <>
            <h5 className="nav-item">
              <Button
                onClick={() => {
                  setSignupIsOpen(true);
                  setSignIn(false);
                }}
              >
                Sign up
              </Button>
            </h5>
            <h5>
              <Button
                onClick={() => {
                  setSignupIsOpen(true);
                  setSignIn(true);
                }}
              >
                Sign in
              </Button>
              <SignupModal
                signIn={signIn}
                closeModal={() => setSignupIsOpen(false)}
                isOpen={signupIsOpen}
              />
            </h5>
          </>
        )}
      </div>
    </nav>
  );
}

export default observer(NavBar);
// we are creating a Navigation bar that links each icon to a path
//the only difference between Link and Navlink is that gives can give it a style when css's
