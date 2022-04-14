import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="d-flex flex-justify-center align-items-center">
      <div className="card nav-yellow-shadow  login-container flex-column">
        <div className="d-flex flex-justify-center">
          <h3 className="white-text-color">Signup</h3>
        </div>
        <div className=" mt-2 ml-1 d-flex flex-column">
          <label htmlFor="input-email" className="ml-2 white-text-color">
            Email
          </label>
          <input
            className="input input-login black-light-bg white-text-color"
            id="input-email"
            placeholder="you@dreamstore.com"
          />
        </div>
        <div className=" mt-2 ml-1 d-flex flex-column">
          <label htmlFor="input-fname" className="ml-2 white-text-color">
            First Name
          </label>
          <input
            className="input input-login black-light-bg white-text-color"
            id="input-fname"
            placeholder="Buddy"
          />
        </div>
        <div className=" mt-2 ml-1 d-flex flex-column">
          <label htmlFor="input-lname" className="ml-2 white-text-color">
            Last Name
          </label>
          <input
            className="input input-login black-light-bg white-text-color"
            id="input-lname"
            placeholder="Puppy"
          />
        </div>
        <div className=" mt-2 ml-1 d-flex flex-column">
          <label htmlFor="input-password" className="ml-2 white-text-color">
            Password
          </label>
          <input
            className="input input-login black-light-bg white-text-color"
            id="input-password"
            placeholder="*******"
          />
        </div>
        <div className=" mt-2 ml-1 d-flex flex-column">
          <label
            htmlFor="input-conf-password"
            className="ml-2 white-text-color"
          >
            Confirm Password
          </label>
          <input
            className="input input-login black-light-bg white-text-color"
            id="input-conf-password"
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
              I accept all terms and conditions
            </label>
          </span>
        </div>
        <button
          type="button"
          className="btn orange-bg login-button ml-3 font-weight-bold"
        >
          Create New Account
        </button>
        <div className="d-flex flex-justify-center align-items-center">
          <Link
            className="black-text-color d-flex flex-justify-center align-items-center"
            to="/login"
          >
            Already have an account
            <span className="material-icons pl-1 fs-small">
              arrow_forward_ios
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
