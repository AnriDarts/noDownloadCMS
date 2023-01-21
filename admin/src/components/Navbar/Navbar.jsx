import "./navbar.scss";
import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useContext } from "react";
import { useEffect } from "react";

const Navbar = ({ setSearch }) => {
  const [showMore, setShowMore] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const logOut = () => {
    dispatch(logout());
  };

  const [sports, setSports] = useState(
    JSON.parse(localStorage.getItem("user")).sport
  );

  useEffect(() => {
    setSports(JSON.parse(localStorage.getItem("user")).sport);
  }, []);

  const params = useParams();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/home">
            <img
              src="/images/navbar/setanta-logo.png"
              alt=""
              className="setanta-logo"
            />
          </Link>
        </div>

        {typeof params.sport === "undefined" && (
          <div className="middle-main">
            <Link to={"/content"} className="nav-item">
              Content
            </Link>
            <Link to={"/latest-uploads"} className="nav-item">
              Latest Uploads
            </Link>
            <Link to={"/upload-content"} className="nav-item">
              Upload Content
            </Link>
          </div>
        )}

        {typeof params.sport !== "undefined" && (
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
                <img
                  src="/images/navbar/more.png"
                  alt=""
                  className="more-img"
                />

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
        )}

        <div className="right">
          <input
            type="text"
            className="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="log-out-btn" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
