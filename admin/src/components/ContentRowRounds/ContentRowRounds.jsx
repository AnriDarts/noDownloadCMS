import "./contentRow.scss";
import React from "react";
import ContentCard from "../../components/ContentCard/ContentCard";

const ContentRowRounds = ({ rounds }) => {
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
              link={`${round.title.toLowerCase().replaceAll(" ", "-")}`}
              image={"/images/rounds/thumbnail.webp"}
            />
          ))}
      </div>
    </div>
  );
};

export default ContentRowRounds;
