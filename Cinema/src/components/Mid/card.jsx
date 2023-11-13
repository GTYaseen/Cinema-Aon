import React from "react";
import { Card } from "antd";
const { Meta } = Card;
function card() {
  return (
    <div className="Mcar">
      <Card hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="MovieName"/>
        <div className="CB">
          <p>2020/4/21</p>
          <p>
            <span>IMDB</span>
            7.8
          </p>
        </div>
      </Card>
    </div>
  );
}

export default card;
