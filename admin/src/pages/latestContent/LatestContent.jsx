import "./content.scss";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ContentRow from "../../components/ContentRow/ContentRow";

const LatestContent = () => {
  const params = useParams();

  const [content, setContent] = useState([]);

  useEffect(() => {
    const GetContent = async () => {
      try {
        await axios
          .get(`https://apiscts.adjara.com/api/content/latest`, {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          })
          .then((res) => {
            setContent(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    };
    GetContent();
  }, [params]);

  return (
    <div className="content">
      <ContentRow contents={content} />

      <Footer fixed={content.length > 3 ? false : true} />
    </div>
  );
};

export default LatestContent;
