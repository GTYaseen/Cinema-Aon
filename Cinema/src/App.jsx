import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/NavBar/Header.jsx';
import Main from './components/Main/Main.jsx';
import CardComponent from './components/Mid/CardComponent.jsx';

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const fetchData = async () => {
    const queryUrl = encodeURIComponent(query);
    const url = `https://www.omdbapi.com/?s=${queryUrl}&apikey=ef380c44`;
  
    try {
      const response = await fetch(url);
      const result = await response.json();
  
      if (result.Response === "True") {
        setApiData(result);
        setLoading(false);
      } else {
        setApiData(null);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [query]);


  return (
    <>
      <div className="App">
        <Header query={query} setQuery={setQuery} />
        <Main />
        {loading ? <p>Loading...</p> : <CardComponent data={apiData} />}
      </div>
    </>
  );
}

export default App
