import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
 

  //** if not using fetch button **/
  //const [jokes, setJokes] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/api/jokes")
  //     .then((response) => {
  //       setJokes(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  //** if using fetch button **/
  const [jokes, setJokes] = useState([]);

  const fetchJokes = () => {
    axios
      // .get("http://localhost:3000/api/jokes")
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hideJokes = () => {
    setJokes([]);
  };

  

  return (
    <>
      <h1>Simple Fullstack Basics</h1>
      <h3>A list of jokes fetched from the backend</h3>
      <p>Jokes: {jokes.length}</p>

      <button onClick={fetchJokes}>Fetch Jokes</button>
      <button onClick={hideJokes}>Hide Jokes</button>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h4>{joke.title}</h4>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
