import "./content.scss";
import React from "react";
import Footer from "../../components/Footer/Footer";
import ContentRowRounds from "../../components/ContentRowRounds/ContentRowRounds";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ContentRounds = () => {
  const params = useParams();

  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    const GetRounds = async () => {
      try {
        await axios
          .get(
            `https://apiscts.adjara.com/api/week_card/week?sport=${params.sport.replaceAll(
              "-",
              " "
            )}&league=${params.league.replaceAll("-", " ")}`,
            {
              headers: {
                token:
                  "Bearer " +
                  JSON.parse(localStorage.getItem("user")).accessToken,
              },
            }
          )
          .then((res) => {
            setRounds(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    };

    GetRounds();
  }, [params]);

  return (
    <div className="content">
      <ContentRowRounds rounds={rounds} />

      <Footer fixed={rounds.length > 3 ? false : true} />
    </div>
  );
};

export default ContentRounds;
