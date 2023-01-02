import "./content.scss";
import React from "react";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ContentRow from "../../components/ContentRow/ContentRow";

const SearchedContent = ({ search }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const searchContent = async () => {
      try {
        const res = await axios.get(
          `https://apiscts.adjara.com/api/content/search?search=${search}`,
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

    searchContent();
  }, [search]);

  return (
    <div className="content">
      <ContentRow contents={content} />

      <Footer fixed={content.length > 3 ? false : true} />
    </div>
  );
};

export default SearchedContent;
