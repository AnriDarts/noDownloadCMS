import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const ImageUpload = (props) => {
  return (
    <div className="left">
      <div className="thumbnail">
        {props.state && (
          <img
            src={props.image.replaceAll(" ", "-")}
            alt="img"
            className="image"
            effect="blur"
          />
        )}

        {props.uploadBox && (
          <>
            <div className="upload-image">
              <label className="upload-title" htmlFor="image-upload-input">
                <span className="icon">
                  <CloudUploadOutlinedIcon className="mui-icon" />
                </span>
                <span className="text"> Choose Image to Upload</span>
              </label>

              <input
                type="file"
                id="image-upload-input"
                onChange={(e) => props.FileHandler(e)}
              />
            </div>
          </>
        )}

        {props.spinner && (
          <div className="spinner-container">
            <div
              className={
                props.spinner ? "loading-spinner active" : "loading-spinner"
              }
            ></div>
            <span className="spinner-text">Your file will appear soon</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
