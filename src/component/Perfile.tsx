import React, { useEffect } from "react";
import { animate } from "animejs";
import "../style/Perfile.css";
import profileimg from "../assets/satoru_gojo.jpg"

const Perfile: React.FC = () => {
  useEffect(() => {
    animate( 
      ".animated-text span", 
      { 
        translateX: [-130, 0],
        opacity: [1, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: 100
      }
    );
  }, []);

  const text = "Backend Dev & SysAdmin"
  const animatedText = text.split("").map((char, index) => (
    <span key={index}>{char === " " ? "\u00A0" : char}</span>
  ));

  return (
    <div className="perfile-container">
    <div className="text-container">
      <h1 className="animated-text">{animatedText}</h1>
    </div>
    <div className="image-container">
      <img
        src={profileimg}
        alt="Imagen de perfil"
        className="profile-image"
      />
    </div>
  </div>
  );
};

export default Perfile;