import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <div className="d-flex flex-justify-center align-items-center mb-2">
        <div className="card nav-yellow-shadow  login-container flex-column">
          <div className="d-flex flex-justify-center">
            <h3 className="white-text-color">Login</h3>
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label
              htmlFor="input-email"
              className="ml-2 input-label white-text-color"
            >
              Email
            </label>
            <input
              className="input input-login"
              id="input-email"
              placeholder="you@dreamstore.com"
            />
          </div>
          <div className=" mt-2 ml-1 d-flex flex-column">
            <label
              htmlFor="input-password"
              className="ml-2 input-label white-text-color"
            >
              Password
            </label>
            <input
              className="input input-login"
              id="input-password"
              placeholder="*******"
            />
          </div>

          <div className="d-flex flex-justify-around align-items-center">
            <span className="d-flex align-items-center">
              <input
                id="checkbox-unchecked"
                className="form-check-input"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-unchecked"
                className="fs-small white-text-color"
              >
                Remember me?
              </label>
            </span>
            <a href="#" className="black-text-color fs-small mr-2">
              Forgot your password?
            </a>
          </div>
          <button
            type="button"
            className="btn orange-bg login-button ml-3 font-weight-bold"
          >
            Login
          </button>
          <div className="d-flex flex-justify-center align-items-center">
            <Link
              className="white-text-color d-flex flex-justify-center align-items-center"
              to="/signup"
            >
              create new account
              <span className="material-icons pl-1 fs-small white-text-color">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
