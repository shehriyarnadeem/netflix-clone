import React from "react";
import Row from "./components/Row";
function App() {
  return (
    <div className="App">
      <Row title="Netflix Orignals" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Latest" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
