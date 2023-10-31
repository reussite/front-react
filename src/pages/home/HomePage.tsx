import React, { useEffect, useState } from "react";
import "./homepage.scss";
import homeImage from "../../images/home-1.jpg";
import homeImage2 from "../../images/home.jpg";
const HomePage = ()=> {
  const [curentImage, setcurentImage] = useState<string>(homeImage);
  const [fadeIn, setFadeIn] = useState<Boolean>(true);
  

  return (
    <div className="home">
      <div className="content">
        Engégistrement des Etudiants et les 
      </div>
    </div>
  );  
}

export default HomePage;
