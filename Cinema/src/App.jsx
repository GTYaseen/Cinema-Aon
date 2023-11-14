import "./App.css";
import Header from "./components/NavBar/header.jsx";
import Main from "./components/Main/Main.jsx";
import Mid from "./components/Mid/card.jsx";
import {motion} from "framer-motion"
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <motion.div className="carousel">
          <motion.div drag="x" className="innar-carousel">
            <Mid />
          </motion.div>
      </motion.div>
    </div>
  );
}
export default App;
