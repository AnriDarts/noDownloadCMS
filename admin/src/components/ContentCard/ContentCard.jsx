import "./contentCard.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ContentCard = ({
  hasTitle,
  hasButtons,
  hasPreview,
  hasDownload,
  image,
  title,
  hasLink,
  link,
  file,
}) => {
  const navigate = useNavigate();

  const NavigateToRounds = () => {
    navigate(link);
  };

  return (
    <div className="content-card">
      {!hasLink && (
        <div
          className="card"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {hasTitle && <div className="title">{title}</div>}
          {hasButtons && (
            <div className="btns">
              {hasPreview && (
                <Link
                  to={"/watch"}
                  state={{ from: window.location.pathname, videoToPlay: file }}
                  className="preview-h"
                >
                  <button className="preview">PREVIEW</button>
                </Link>
              )}
              {hasDownload && (
                <a href={file}>
                  <button className="download">DOWNLOAD</button>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {hasLink && (
        <div
          className="card"
          onClick={NavigateToRounds}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {hasTitle && <div className="title">{title}</div>}
        </div>
      )}
    </div>
  );
};

export default ContentCard;
