import React from "react";
import Row from "./components/Row";
import requests from "./Requests";
function App() {
  return (
    <div className="App">
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
