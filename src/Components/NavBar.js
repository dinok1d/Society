import { observer } from "mobx-react";
import Logo from "../jam3ya1.png";
import { NavLink } from "react-router-dom";
import authStore from "../Stores/authStore";
import SignupModal from "./SignupModal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import SigninModal from "./signInModal";

function NavBar() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/home">
          <img
            className="m-1"
            id="logo"
            src={Logo}
            alt="Logo"
            width="120"
            height="20"
          />
        </NavLink>

        <NavLink to="/home">
          <button type="button" className="btn btn-outline-secondary">
            Home
          </button>{" "}
        </NavLink>
        <NavLink to="/SocietyList">
          <button type="button" className="btn btn-outline-secondary">
            Jam3yat
          </button>
        </NavLink>
        {authStore.user ? (
          <>
            <h5 className=" nav-item badge bg-secondary text-wrap">
              Welcome Back {authStore.user.username}!
            </h5>
            <h5 className="nav-item">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => authStore.logout()}
              >
                Logout
              </button>{" "}
            </h5>
          </>
        ) : (
          <>
            <h5>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  setSignupIsOpen(true);
                  setSignIn(false);
                }}
              >
                Sign up
              </button>
              <SignupModal
                signIn={signIn}
                closeModal={() => setSignupIsOpen(false)}
                isOpen={signupIsOpen}
              />
            </h5>
            <h5>
              <button
                type="button"
                className=" btn btn-outline-secondary"
                onClick={() => {
                  setSignupIsOpen(true);
                  setSignIn(true);
                }}
              >
                Sign in
              </button>
              {/* <SigninModal
                signIn={signIn}
                closeModal={() => setSignupIsOpen(false)}
                isOpen={signupIsOpen} */}
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
