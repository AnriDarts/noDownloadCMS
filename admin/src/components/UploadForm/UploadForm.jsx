import "./uploadForm.scss";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ImageUpload from "../../pages/uploadContent/ImageUpload";
import VideoUpload from "../../pages/uploadContent/VideoUpload";

const UploadForm = () => {
  const params = useParams();
  const sport = params.sport;
  const league = params.league;
  const week = params.round;
  const type = params.type;

  const [popUp, setPopUp] = useState(false);

  const [uploadedFileName, setUploadedFileName] = useState("");

  const [image, setImage] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [spinner, setSpinner] = useState(false);
  const [uploadBox, setUploadBox] = useState(true);

  const [uploadEnabled, setUploadEnabled] = useState(false);
  const [createEnabled, setCreateEnabled] = useState(false);

  const [selectedFile, setSelectedFile] = useState("");

  // Thumbnail
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState({});
  const [dataToSend, setDataToSend] = useState({});

  useEffect(() => {
    const getTemplates = async () => {
      try {
        const data = await axios.get("https://apiscts.adjara.com/api/template");
        setSelectedTemplate(data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getTemplates();
  }, []);
  // Thumbnail

  // File Upload
  const FileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadedFileName(e.target.files[0].name);
  };

  const UploadFile = async () => {
    let formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post(
        `https://apiscts.adjara.com/api/amazon/uploadfile?navigation=${
          sport.toLocaleLowerCase() +
          "/" +
          league +
          "/" +
          week.toLocaleLowerCase() +
          "/" +
          type
        }&title=${title.replaceAll(" ", "-")}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            isAdmin: "true",
          },
        }
      )
      .then((res) => {
        setSpinner(false);
        setCreateEnabled(true);
        setUploadDone(true);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };
  // File Upload

  // Time sleep
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // Time sleep

  useEffect(() => {
    if (selectedFile !== "" && homeTeam !== "" && awayTeam !== "") {
      setUploadEnabled(true);
    }
  }, [selectedFile, awayTeam, homeTeam]);

  useEffect(() => {
    if (homeTeam !== "" && awayTeam !== "") {
      setTitle(homeTeam + " Vs " + awayTeam + " " + type);
    }
  }, [homeTeam, awayTeam, type]);

  const DataHandler = () => {
    setDataToSend({
      title: title.replaceAll(" ", "-"),
      generalTitle: selectedTemplate.generalTitle,
      size: selectedTemplate.size,
      elements: [
        {
          name: homeTeam,
          src: `/ottVersus/${homeTeam}.png`,
          x: selectedTemplate.elements[0].x,
          y: selectedTemplate.elements[0].y,
        },
        {
          name: awayTeam,
          src: `/ottVersus/${awayTeam}.png`,
          x: selectedTemplate.elements[1].x,
          y: selectedTemplate.elements[1].y,
        },
        {
          name: league.replaceAll("-", " "),
          src: `/ottVersus/${league.replaceAll("-", " ")}.png`,
          x: selectedTemplate.elements[2].x,
          y: selectedTemplate.elements[2].y,
        },
      ],
      destination: selectedTemplate.destination,
      sport: sport,
      league: league.replaceAll("-", " "),
      teams: [homeTeam, awayTeam],
    });
  };

  const CreateData = async (res) => {
    try {
      await axios
        .post("https://apiscts.adjara.com/api/designer", dataToSend)
        .then((res) => {
          console.log("done");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const mongoUploadImage = async () => {
    try {
      await axios
        .post(
          `https://apiscts.adjara.com/api/content?isAdmin=${
            JSON.parse(localStorage.getItem("user")).isAdmin
          }`,
          {
            title: title,
            files: `https://setantasports-stcms.s3.amazonaws.com/${
              sport.toLocaleLowerCase() +
              "/" +
              league +
              "/" +
              week.toLocaleLowerCase() +
              "/" +
              type +
              "/" +
              title.replaceAll(" ", "-") +
              "." +
              uploadedFileName.split(".")[1]
            }`,
            thumbnail: `https://setantasports-stcms.s3.amazonaws.com/${
              sport.toLocaleLowerCase() +
              "/" +
              league +
              "/" +
              week.toLocaleLowerCase() +
              "/" +
              type +
              "/" +
              title.replaceAll(" ", "-") +
              "." +
              uploadedFileName.split(".")[1]
            }`,
            teams: [homeTeam, awayTeam],
            sport: params.sport,
            league: params.league,
            week: params.round,
            filetype: params.type,
          },
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        )
        .then(() => {
          setUploadEnabled(false);
          setCreateEnabled(false);
          setPopUp(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const mongoUploadVideo = async () => {
    try {
      await axios
        .post(
          `https://apiscts.adjara.com/api/content?isAdmin=${
            JSON.parse(localStorage.getItem("user")).isAdmin
          }`,
          {
            title: title,
            files: `https://setantasports-stcms.s3.amazonaws.com/${
              sport.toLocaleLowerCase() +
              "/" +
              league +
              "/" +
              week.toLocaleLowerCase() +
              "/" +
              type +
              "/" +
              title.replaceAll(" ", "-") +
              "." +
              uploadedFileName.split(".")[1]
            }`,
            video: `https://setantasports-stcms.s3.amazonaws.com/${
              sport.toLocaleLowerCase() +
              "/" +
              league +
              "/" +
              week.toLocaleLowerCase() +
              "/" +
              type +
              "/" +
              title.replaceAll(" ", "-") +
              "." +
              uploadedFileName.split(".")[1]
            }`,
            thumbnail: `https://setantasports-stcms.s3.eu-central-1.amazonaws.com/Versus/${title.replaceAll(
              " ",
              "-"
            )}.png`,
            teams: [homeTeam, awayTeam],
            sport: params.sport,
            league: params.league,
            week: params.round,
            filetype: params.type,
          },
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        )
        .then(() => {
          setUploadEnabled(false);
          setCreateEnabled(false);
          setPopUp(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const mongoUploadPsd = async () => {
    try {
      await axios
        .post(
          `https://apiscts.adjara.com/api/content?isAdmin=${
            JSON.parse(localStorage.getItem("user")).isAdmin
          }`,
          {
            title: title,
            files: `https://setantasports-stcms.s3.amazonaws.com/${
              sport.toLocaleLowerCase() +
              "/" +
              league +
              "/" +
              week.toLocaleLowerCase() +
              "/" +
              type +
              "/" +
              title.replaceAll(" ", "-") +
              "." +
              uploadedFileName.split(".")[1]
            }`,
            thumbnail: "no",
            teams: [homeTeam, awayTeam],
            sport: params.sport,
            league: params.league,
            week: params.round,
            filetype: params.type,
          },
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        )
        .then(() => {
          setUploadEnabled(false);
          setCreateEnabled(false);
          setPopUp(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const interval = async () => {
      await sleep(2000);

      setImage(true);
    };

    if (uploadDone) {
      interval();
    }
  }, [uploadDone]);

  return (
    <div className="upload-form">
      <div className="wrapper">
        {type === "videos" && (
          <VideoUpload
            FileHandler={FileHandler}
            url={`https://setantasports-stcms.s3.amazonaws.com/${
              sport.toLocaleLowerCase() +
              "/" +
              league +
              "/" +
              week.toLocaleLowerCase() +
              "/" +
              type +
              "/" +
              title.replaceAll(" ", "-")
            }.mp4`}
            state={image}
            spinner={spinner}
            uploadBox={uploadBox}
            fileName={uploadedFileName}
          />
        )}

        {type === "match-thumbnails" && (
          <ImageUpload
            FileHandler={FileHandler}
            image={`https://setantasports-stcms.s3.amazonaws.com/${
              sport + "/" + league + "/" + week + "/" + type + "/" + title
            }.png`}
            spinner={spinner}
            state={image}
            uploadBox={uploadBox}
            fileName={uploadedFileName}
          />
        )}

        {type === "visuals" && (
          <ImageUpload
            FileHandler={FileHandler}
            image={`/extra/psd.png`}
            spinner={spinner}
            state={image}
            uploadBox={uploadBox}
            fileName={uploadedFileName}
          />
        )}

        <div className="right">
          <div className="item">
            <label htmlFor="sport">Sport</label>
            <input type="text" name="sport" value={sport} disabled />
          </div>

          <div className="item">
            <label htmlFor="league">League</label>
            <input type="text" name="league" value={league} disabled />
          </div>

          <div className="item">
            <label htmlFor="week">Week</label>
            <input type="text" name="week" value={week} disabled />
          </div>

          <div className="item">
            <label htmlFor="type">File Type</label>
            <input type="text" name="type" value={type} disabled />
          </div>

          <div className="item">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Please Enter File Title"
              disabled
            />
          </div>

          <div className="item">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              placeholder="Please Enter File Description if needed"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {Object.keys(selectedTemplate).length > 0 && (
            <div className="item-group">
              {typeof league !== "undefined" && (
                <>
                  <div className="item">
                    <select
                      className="List"
                      onChange={(e) => setHomeTeam(e.target.value)}
                      value={homeTeam}
                    >
                      <option value="" disabled className="ListItem">
                        Select Home Team ...
                      </option>
                      {selectedTemplate.teams[0][
                        league.replaceAll("-", " ")
                      ].map((team) => (
                        <option className="ListItem" value={team} key={team}>
                          {team}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="item">
                    <select
                      className="List"
                      onChange={(e) => setAwayTeam(e.target.value)}
                      value={awayTeam}
                    >
                      <option value="" disabled className="ListItem">
                        Select Away Team ...
                      </option>
                      {selectedTemplate.teams[0][
                        league.replaceAll("-", " ")
                      ].map((team) => (
                        <option className="ListItem" value={team} key={team}>
                          {team}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="button-item">
            <button
              className={!uploadEnabled ? "upload" : "upload active"}
              disabled={!uploadEnabled ? true : false}
              onClick={() => {
                setCreateEnabled(false);
                setUploadBox(false);
                setSpinner(true);
                UploadFile();
                DataHandler();
              }}
            >
              Upload
            </button>

            {type === "videos" && (
              <button
                className={!createEnabled ? "create" : "create active"}
                disabled={!createEnabled ? true : false}
                onClick={() => {
                  CreateData();
                  mongoUploadVideo();
                }}
              >
                Create
              </button>
            )}

            {type === "match-thumbnails" && (
              <button
                className={!createEnabled ? "create" : "create active"}
                disabled={!createEnabled ? true : false}
                onClick={() => mongoUploadImage()}
              >
                Create
              </button>
            )}

            {type === "visuals" && (
              <button
                className={!createEnabled ? "create" : "create active"}
                disabled={!createEnabled ? true : false}
                onClick={() => mongoUploadPsd()}
              >
                Create
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="pop-up" hidden={popUp ? false : true}>
        <div className="wrapper">
          <div className="pop-up-box">
            <div className="upload-msg">
              File Uploaded Succesfully! <br /> What would you like to do next?
            </div>

            <div className="btn-group">
              <button
                className="button-redirect"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Upload Again
              </button>

              <button
                className="button-redirect"
                onClick={() =>
                  (window.location.href = `https://sctsadmin.adjara.com/uploads/${
                    sport + "/" + league + "/" + week + "/" + type
                  }`)
                }
              >
                Go To Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
