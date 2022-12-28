import "./content.scss";
import React from "react";
import Footer from "../../components/Footer/Footer";
import ContentRowTypes from "../../components/ContentRowTypes/ContentRowTypes";

const ContentTypes = () => {
  return (
    <div className="content">
      <ContentRowTypes />

      <Footer fixed={true} />
    </div>
  );
};

export default ContentTypes;
