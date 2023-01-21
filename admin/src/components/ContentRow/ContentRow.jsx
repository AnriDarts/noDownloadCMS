import "./contentRow.scss";
import React from "react";
import ContentCard from "../../components/ContentCard/ContentCard";

const ContentRow = ({ contents }) => {
  return (
    <div className="content-row">
      <div className="wrapper">
        {contents.map((content) => (
          <ContentCard
            key={content.title}
            hasTitle={true}
            hasButtons={true}
            hasPreview={content.filetype === "videos" ? true : false}
            hasDownload={true}
            title={content.title}
            image={content.thumbnail}
            file={content.files}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
