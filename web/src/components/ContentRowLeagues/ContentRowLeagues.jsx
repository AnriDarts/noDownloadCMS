import "./contentRow.scss";
import React from "react";
import ContentCard from "../ContentCard/ContentCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ContentRowLeagues = () => {
  const params = useParams();
  const [leagues, setleagues] = useState([]);

  useEffect(() => {
    setleagues(JSON.parse(localStorage.getItem("user")).league[0]);
  }, []);

  console.log(leagues);

  return (
    <div className="content-row">
      {Object.keys(leagues).length > 0 && (
        <div className="wrapper">
          {params.sport !== "tennis" &&
            leagues[params.sport].map((league) => (
              <ContentCard
                key={league}
                hasTitle={false}
                hasButtons={false}
                hasPreview={false}
                hasDownload={false}
                hasLink={true}
                link={`/content/${params.sport}/${league.replaceAll(" ", "-")}`}
                image={`/images/leagues/${league.replaceAll(" ", "-")}.webp`}
              />
            ))}

          {params.sport === "tennis" &&
            leagues[params.sport].map((league) => (
              <ContentCard
                key={league}
                hasTitle={true}
                hasButtons={false}
                hasPreview={false}
                hasDownload={false}
                title={league}
                hasLink={true}
                link={`/content/${params.sport}/${league.replaceAll(" ", "-")}`}
                image={
                  league === "Wimbledon"
                    ? `/images/leagues/${league.replaceAll(" ", "-")}.webp`
                    : `/images/leagues/${league.slice(0, 3)}.webp`
                }
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ContentRowLeagues;
