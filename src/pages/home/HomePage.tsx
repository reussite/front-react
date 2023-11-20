import React, { useEffect, useState } from "react";
import "./homepage.scss";
import homeImage from "../../images/home-1.jpg";
import homeImage2 from "../../images/home.jpg";
import Navbar from "../../components/Navbar/Navbar";
const HomePage = ()=> {
  const [curentImage, setcurentImage] = useState<string>(homeImage);
  const [fadeIn, setFadeIn] = useState<Boolean>(true);
  

  return (
    <>
    <Navbar />
    <div className="home">
      <div className="content">
          Enrégistrements des étudiants dans les établissements
      </div>
    </div>
    </>
  );  
}

export default HomePage;
