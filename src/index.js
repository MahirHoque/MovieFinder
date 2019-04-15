import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MovieListings from "./MovieListings";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MovieListings />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
