import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/NavBar/Header.jsx';
import Main from './components/Main/Main.jsx';
import CardComponent from './components/Mid/CardComponent.jsx';

function App() {
  const [apiData, setApiData] = useState([]);
  const [queryUrl, setQueryUrl] = useState('');
  const fetchData = async () => {
    const url = `https://www.omdbapi.com/?s=${queryUrl}&apikey=ef380c44`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setApiData(result.Search || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [queryUrl]);

  return (
    <>
      <div className="App">
        <Header onSearch={setQueryUrl} />
        <Main data={apiData}/>
        <CardComponent data={apiData} />
      </div>
    </>
  );
}

export default App;