import "./footer.scss";

import React from "react";

const Footer = ({ fixed }) => {
  return (
    <div className={fixed ? `footer fixed` : "footer"}>
      <div className="wrapper">
        <div className="title">SEANTA SPORTS</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata
        </div>

        <div className="channels">
          <a
            href="https://www.facebook.com/setantageo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/footer/fb.png" alt="icon" />
          </a>

          <a
            href="https://www.instagram.com/setantageo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/footer/insta.png" alt="icon" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC-M4dS7_cd-k5ZGr-8rHi0g"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/footer/yt.png" alt="icon" />
          </a>
        </div>

        <div className="copyright">© 2019 all rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
