import "./homeSection.scss";

import React from "react";

const HomeSection = ({
  title,
  description,
  video,
  textPosition,
  videoPosition,
}) => {
  return (
    <div className="section">
      <div className={`text ${textPosition}`}>
        <div className="title">{title}</div>

        <div className="description">{description}</div>
      </div>

      <video
        src={video}
        autoPlay
        controls
        muted
        loop
        className={`video ${videoPosition}`}
      ></video>
    </div>
  );
};

export default HomeSection;
