import "./contentCard.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContentCard = ({
  hasTitle,
  hasButtons,
  hasPreview,
  hasDownload,
  image,
  title,
  hasLink,
  link,
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
              {hasPreview && <button className="preview">PREVIEW</button>}
              {hasDownload && <button className="download">DOWNLOAD</button>}
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
