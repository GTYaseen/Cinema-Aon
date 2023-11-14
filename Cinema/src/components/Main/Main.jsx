import React from "react";
import { Carousel } from "antd";
import "./Main.css"; 

function Main() {
  const images = [
    "https://www.themoviedb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    "https://www.themoviedb.org/t/p/original/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
    "https://www.themoviedb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    "https://www.themoviedb.org/t/p/original/gN79aDbZdaSJkFS1iVA17HplF2X.jpg",
    "https://www.themoviedb.org/t/p/original/3H9NA1KWEQN0ItL3Wl3SFZYP6yV.jpg",
  ];

  return (
    <div className="Main">
    <Carousel autoplay className="custom-carousel">
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img id="img" src={imageUrl} alt={`slide-${index + 1}`} />
        </div>
      ))}
    </Carousel>
    </div>
  );
}

export default Main;
