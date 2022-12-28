import "./navbar.scss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);

  const logOut = () => {
    dispatch(logout());
  };

  const sports = [
    "football",
    "basketball",
    "racing",
    "tennis",
    "hockey",
    "MMA",
  ];

  const [showMore, setShowMore] = useState(false);

  console.log(showMore);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <img
            src="/images/navbar/setanta-logo.png"
            alt=""
            className="setanta-logo"
          />
        </div>

        <div className="middle">
          {sports.length <= 4 &&
            sports.map((sport) => (
              <Link className="nav-link" key={sport} to={`/content/${sport}`}>
                <div className="link-content">
                  <img
                    src={`/images/navbar/${sport}.png`}
                    alt=""
                    className="sport-icon"
                  />
                  <div className="sport-name">{sport}</div>
                </div>
              </Link>
            ))}

          {sports.length > 4 &&
            sports.slice(0, 4).map((sport) => (
              <Link className="nav-link" key={sport} to={`/content/${sport}`}>
                <div className="link-content">
                  <img
                    src={`/images/navbar/${sport}.png`}
                    alt=""
                    className="sport-icon"
                  />
                  <div className="sport-name">{sport}</div>
                </div>
              </Link>
            ))}

          {sports.length > 4 && (
            <div className="more" onClick={() => setShowMore(!showMore)}>
              <img src="/images/navbar/more.png" alt="" className="more-img" />

              <div className="items">
                {showMore &&
                  sports.slice(4).map((sport) => (
                    <Link
                      className="more-sport"
                      key={sport}
                      to={`/content/${sport}`}
                    >
                      <img
                        src={`/images/navbar/${sport}.png`}
                        alt=""
                        className="more-sport-icon"
                      />

                      <div className="more-sport-name">{sport}</div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="right">
          <input type="text" className="search" placeholder="Search" />

          <button className="log-out-btn" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
