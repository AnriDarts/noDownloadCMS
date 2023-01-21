import "./contentRow.scss";
import React from "react";
import ContentCard from "../../components/ContentCard/ContentCard";

const ContentRowTypes = () => {
  return (
    <div className="content-row">
      <div className="wrapper">
        <ContentCard
          key={"Videos"}
          hasTitle={false}
          hasButtons={false}
          hasPreview={false}
          hasDownload={false}
          hasLink={true}
          link={`videos`}
          image={"/images/types/videos.webp"}
        />

        <ContentCard
          key={"Visuals"}
          hasTitle={false}
          hasButtons={false}
          hasPreview={false}
          hasDownload={false}
          hasLink={true}
          link={`visuals`}
          image={"/images/types/visuals.webp"}
        />

        <ContentCard
          key={"thumbnails"}
          hasTitle={false}
          hasButtons={false}
          hasPreview={false}
          hasDownload={false}
          hasLink={true}
          link={`match-thumbnails`}
          image={"/images/types/match-thumbnails.webp"}
        />
      </div>
    </div>
  );
};

export default ContentRowTypes;
