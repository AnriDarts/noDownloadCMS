import "./content.scss";
import React from "react";
import Footer from "../../components/Footer/Footer";
import ContentRowLeagues from "../../components/ContentRowLeagues/ContentRowLeagues";
import { useParams } from "react-router-dom";

const ContentLeagues = () => {
  const params = useParams();

  return (
    <div className="content">
      <ContentRowLeagues />

      <Footer
        fixed={
          params.sport === "football" || params.sport === "tennis"
            ? false
            : true
        }
      />
    </div>
  );
};

export default ContentLeagues;
