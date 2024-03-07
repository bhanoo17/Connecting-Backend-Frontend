import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      setjokes(response.data);
    })
    .catch((error) => {
      console.error("Something went wrong", error);
    })
  })

  return (
    <>
      <h1>This is a Joke from My Express Server</h1>
      <h3>I am Going to fetch JOkes from there</h3>
      {
        jokes.map( (joke) => (
            <div key={joke.id}>
              <h4>{joke.name}</h4>
              <h5>{joke.content}</h5>
            </div>
        ))
      }
    </>
  )
}

export default App
