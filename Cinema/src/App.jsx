import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/NavBar/Header.jsx';
import Main from './components/Main/Main.jsx';
import CardComponent from './components/Mid/CardComponent.jsx';

function App() {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const queryUrl = "game"; // Provide a search query
    const url = `https://www.omdbapi.com/?s=${queryUrl}&apikey=ef380c44`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setApiData(result.Search || []); // Use result.Search as the data array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <CardComponent data={apiData} />
      </div>
    </>
  );
}

export default App;