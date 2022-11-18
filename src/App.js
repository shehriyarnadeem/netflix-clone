import React from "react";
import Banner from "./Banner";
import Row from "./components/Row";
import Nav from "./components/Nav";
import requests from "./Requests";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* Banner */}
     {/*<Nav /> */}
      <Banner />
      <Row
        title="Netflix Orignals"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Latest" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
