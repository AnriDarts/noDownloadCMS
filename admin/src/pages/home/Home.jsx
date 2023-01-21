import "./home.scss";
import React from "react";
import HomeSection from "../../components/HomeSection/HomeSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <HomeSection
          title={"Setanta Sports"}
          description={
            "Setanta Sports is the most extensive media platform in 14 CEE countries, which broadcasts over 5000 live events of the world’s best sporting competitions during the season in 13 different countries. Along with the growth of the sports industry and the development of technology, the media needs to keep pace with all of it. Setanta Sports is how we envision the future of sports television and streaming platforms. Our main objective is to give users access to the world’s most significant sporting events from the device of their choice. We are Sports and Tech Geeks, Love What We Do - That’s why we have gathered as a team and mixed our experiences to create Fantastic World - Setanta Sports."
          }
          video={"/videos/setanta-intro.mp4"}
          videoPosition={"right"}
          textPosition={"left"}
        />

        <HomeSection
          title={"Setanta Content Pool Guide"}
          description={
            "The platform integrates a wide variety of content of Setanta Sports and allows partner companies to view and download the content they need. To enter the system, each company needs its own unique username and password, which it does not create itself. Setanta Sports provides companies with a username and password created specifically for them. If you lose your password, write to us at adartsmelia@setantasports.com and our support team will help you recover it.            "
          }
          video={"/videos/setanta-intro.mp4"}
          videoPosition={"left"}
          textPosition={"right"}
        />

        <Footer fixed={false} />
      </div>
    </div>
  );
};

export default Home;
