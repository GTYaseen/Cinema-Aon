import React from "react";
import { Carousel } from "antd";
import "./Main.css"; 

const contentStyle = {
  height: "760px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Main() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div className="Main">
    <Carousel autoplay className="custom-carousel">
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`slide-${index + 1}`} style={{ ...contentStyle, objectFit: "cover" }} />
        </div>
      ))}
    </Carousel>
    </div>
  );
}

export default Main;
