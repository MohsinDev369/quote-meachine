import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [author, setAuthor] = useState();
  // api = https://zenquotes.io/api/random

  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    // convert the data to json
    const json = await data.json();

    // set state with the result
    setData(json.setup);
    setAuthor(json.punchline);
  };

  useEffect(() => {
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{data}</div>
        <div id="author">{author}</div>
        <button id="new-quote" onClick={fetchData}>
          new quote
        </button>
        <a href="twitter.com/intent/tweet" target="_blank"  id="tweet-quote">
          Tweet this{" "}
        </a>
      </div>
    </div>
  );
}

export default App;
