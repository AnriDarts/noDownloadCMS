import "./contentRow.scss";
import React from "react";
import ContentCard from "../../components/ContentCard/ContentCard";
import { useParams } from "react-router-dom";

const ContentRowTypes = () => {
  const params = useParams();

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
          link={`/content/${params.sport}/${params.league}/${params.round}/videos`}
          image={"/images/types/videos.webp"}
        />

        <ContentCard
          key={"Visuals"}
          hasTitle={false}
          hasButtons={false}
          hasPreview={false}
          hasDownload={false}
          hasLink={true}
          link={`/content/${params.sport}/${params.league}/${params.round}/visuals`}
          image={"/images/types/visuals.webp"}
        />

        <ContentCard
          key={"thumbnails"}
          hasTitle={false}
          hasButtons={false}
          hasPreview={false}
          hasDownload={false}
          hasLink={true}
          link={`/content/${params.sport}/${params.league}/${params.round}/match-thumbnails`}
          image={"/images/types/match-thumbnails.webp"}
        />
      </div>
    </div>
  );
};

export default ContentRowTypes;
