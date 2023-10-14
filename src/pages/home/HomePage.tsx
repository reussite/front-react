import React, { useEffect, useState } from "react";
import "./homepage.scss";
import homeImage from "../../images/home-1.jpg";
import homeImage2 from "../../images/home.jpg";
const HomePage = ()=> {
  const [curentImage, setcurentImage] = useState<string>(homeImage);
  const [fadeIn, setFadeIn] = useState<Boolean>(true);
  

  return (
    <div className="home">
      {/* <img
        className={`home ${fadeIn ? "fade-in" : "fade-out"}`}
        src={curentImage}
        alt="student"
        title="student"
      /> */}
      
    </div>
  );
}

export default HomePage;
