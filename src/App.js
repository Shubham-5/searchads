import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [adData, setAdData] = useState([]);

  useEffect(() => {
    if (text) {
      async function getAds() {
        const { data } = await axios.get("/api/ads", {
          params: { search: text },
        });

        setAdData(data.data);
      }
      getAds();
    } else {
      setAdData("");
    }
  }, [text]);

  return (
    <div className='App'>
      <Navbar />
      <SearchBar text={text} setText={setText} />
      <div className='container flex flex-row flex-wrap align-center mx-auto'>
        {adData.length > 0 && adData.map((ad) => <Card {...ad} />)}
      </div>
    </div>
  );
}

export default App;
