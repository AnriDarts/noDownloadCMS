import "./content.scss";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ContentRow from "../../components/ContentRow/ContentRow";

const Content = () => {
  const params = useParams();

  const [content, setContent] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await axios.get(
          `https://apiscts.adjara.com/api/content/type?sport=${params.sport}&league=${params.league}&week=${params.round}&type=${params.type}`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );

        setContent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getContent();
  }, [params]);

  return (
    <div className="content">
      <ContentRow contents={content} />

      <Footer fixed={content.length > 3 ? false : true} />
    </div>
  );
};

export default Content;
