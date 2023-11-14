import React from "react";
import { Card } from "antd";
import "./card.css";
const { Meta } = Card;

const cardData = [
  {
    title: "MovieName1",
    date: "2020/4/21",
    imdbRating: 7.8,
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  // Add more objects for each card
  // {
  //   title: "MovieName2",
  //   date: "2020/4/22",
  //   imdbRating: 8.0,
  //   imageUrl: "https://example.com/image2.jpg",
  // },
  // ...
];

function CardComponent() {
  return (
    <div className="Mcard">
      {cardData.map((card, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240, border: "none" }}
          cover={<img alt="example" src={card.imageUrl} />}
        >
          <Meta title={card.title} />
          <div className="CB">
            <p>{card.date}</p>
            <p>
              <span>IMDB</span> {card.imdbRating}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
