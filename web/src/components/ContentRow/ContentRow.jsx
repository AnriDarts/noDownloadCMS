import "./contentRow.scss";
import React from "react";
import ContentCard from "../../components/ContentCard/ContentCard";
import { useParams } from "react-router-dom";

const ContentRow = ({ contents }) => {
  const params = useParams();

  return (
    <div className="content-row">
      <div className="wrapper">
        {params.type === "videos" &&
          contents.map((content) => (
            <ContentCard
              key={content.title}
              hasTitle={true}
              hasButtons={true}
              hasPreview={true}
              hasDownload={true}
              title={content.title}
              image={content.thumbnail}
            />
          ))}

        {params.type !== "videos" &&
          contents.map((content) => (
            <ContentCard
              key={content.title}
              hasTitle={true}
              hasButtons={true}
              hasPreview={false}
              hasDownload={true}
              title={content.title}
              image={content.thumbnail}
            />
          ))}
      </div>
    </div>
  );
};

export default ContentRow;
