import React from "react";
import handLogo from "../../assets/hand.png";
export default function Navbar() {
  return (
    <div>
      <div className="nav-bar nav-yellow-shadow">
        <div className="nav-logo-section">
          <img src={handLogo} className="mb-1 mr-1" />
          <h3 className="mr-4 aqua-color">Write it down!</h3>
        </div>
        <div className="nav-items">
          <a className="black-text-color">
            <span className="material-icons ml-1 aqua-color" title="theme">
              account_circle
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
