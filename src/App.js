import React from "react";
import Row from "./Row";
import requests from "./requests";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Netflix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchURL={requests.fetchDocumantaries}
      />
    </div>
  );
};

export default App;
