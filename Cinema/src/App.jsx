import "./App.css";
import Header from "./components/NavBar/header.jsx";
import Main from "./components/Main/Main.jsx";
import Mid from "./components/Mid/card.jsx";
import { Carousel } from 'antd';
import { Col, Divider, Row } from "antd";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Carousel>
      {items.map((item, index) => (
        <div key={index}>
          <Mid />
          {item}
        </div>
      ))}
    </Carousel>
    </div>
  );
}
export default App;
