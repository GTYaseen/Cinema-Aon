import React from "react";
import "./CardComponent.css";

function CardComponent({data}) {
  return (
    <div className="Mcard">
      {data && data.search.map((result, index) => (
        <div className="card" key={index}>
          <div className="img">
            <img src={result.Poster}/>
          </div>
          <div className="content">
            <h1>{result.Title}</h1>
            <div className="info">
              <p>{result.Year}</p>
              <p><span>IMDb</span> {result.imdbRating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
