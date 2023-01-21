import "./uploadContent.scss";

import React from "react";
import UploadForm from "../../components/UploadForm/UploadForm";

const UploadContent = () => {
  return (
    <div className="upload-content">
      <div className="wrapper">
        <div className={"sport-content active"}>
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default UploadContent;
