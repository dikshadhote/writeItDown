import React from "react";
import handLogo from "../../assets/hand.png";
import { useAuth } from "../../Context/auth-context";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { authState, setAuthState } = useAuth();
  const navigateTo = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("token");
    setAuthState({ isUserLoggedIn: false });
    navigateTo("/login");
  };

  return (
    <div>
      <div className="nav-bar nav-yellow-shadow">
        <div className="nav-logo-section">
          <img src={handLogo} className="mb-1 mr-1" />
          <h3 className="mr-4 aqua-color">Write it down!</h3>
        </div>
        <div className="nav-items">
          <a className="black-text-color">
            <span
              className="material-icons ml-1 aqua-color"
              title="profile details"
            >
              account_circle
            </span>
          </a>
          <div>
            {authState.isUserLoggedIn && localStorage.getItem("token") ? (
              <button
                type="button"
                className="btn orange-bg login-button ml-3 font-weight-bold btn-size"
                onClick={() => logOutHandler()}
              >
                Logout
              </button>
            ) : (
              <Link
                type="button"
                className="btn orange-bg login-button ml-3 font-weight-bold btn-size black-text-color"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
