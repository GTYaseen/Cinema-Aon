import "./App.css";
import Header from "./components/NavBar/header.jsx";
import Main from "./components/Main/Main.jsx";
import Mid from "./components/Mid/card.jsx";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Mid />
    </div>
  );
}
export default App;
