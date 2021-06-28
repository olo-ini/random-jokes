import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((response) => response.json())
      .then((data) => {
				setJokes(data)
			})
  }, []);

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <h3>Refresh page for 10 new jokes</h3>
      {jokes && jokes.length > 0 ? jokes.map((item) => (
        <div className="card">
             <h3>{item.setup}</h3>
             <h4>{item.punchline}</h4>
        </div>
       
      )): "nothing to show"}
      <a href="http://olo-ini.com/">built by olo-ini</a>
    </div>
  );
}

export default App;
