import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data);
      
    })
    .catch((err) => {
      console.log("Something Went Wrong", err);
    });
  }, []); // empty dependency array to run effect only once on mount
  
  return (
    <>
      <h1>Enjoy Jokes From Bhanoo Lohar</h1>
      <h4>Number of jokes: {jokes.length}</h4>
       {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h5>{joke.name}</h5>
            <h6>{joke.content}</h6>
          </div>
        ))
      } 
    </>
  );
}

export default App;