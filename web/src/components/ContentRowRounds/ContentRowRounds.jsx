import "./contentRow.scss";
import React from "react";
import ContentCard from "../../components/ContentCard/ContentCard";
import { useParams } from "react-router-dom";

const ContentRowRounds = ({ rounds }) => {
  const params = useParams();

  return (
    <div className="content-row">
      <div className="wrapper">
        {rounds.length > 0 &&
          rounds.map((round) => (
            <ContentCard
              key={round.title}
              hasTitle={true}
              title={round.title}
              hasButtons={false}
              hasPreview={false}
              hasDownload={false}
              hasLink={true}
              link={`/content/${params.sport}/${params.league}/${round.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              image={"/images/rounds/thumbnail.webp"}
            />
          ))}
      </div>
    </div>
  );
};

export default ContentRowRounds;
