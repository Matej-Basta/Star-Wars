import logo from './logo.svg';
import './App.css';
import {Film} from "./components/Film.jsx";
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    data && setData(data.results);
    setDataLoaded(true);

    console.log(data);
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <>
    {!dataLoaded ?
    <p>Loading</p> :
    data.map((movie, index) => (
      <Film key={index} movie={movie}/>
    ))
    }
  </>
  );
}

export default App;
