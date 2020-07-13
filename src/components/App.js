import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Contents from './Contents'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => { 
    fetch("http://127.0.0.1:8080/movies", {
      method: "GET",
      mode: "cors",
    })
    .then(res => {
      const r = res.json()
      console.log(r)  
      return r
    })
    .then(r => setMovies(r))}, []
);

  console.log({movies})

  return (
    <div className="App">
      <Header />
      <Contents contents={movies} />
    </div>
  );
}

App.defaultProps = {
  contents: [
    {"id": "1", "title": "title", "release_date": "2020-01-01"},
    {"id": "2", "title": "title2", "release_date": "2020-01-02"},
    {"id": "1", "title": "title", "release_date": "2020-01-01"},
    {"id": "2", "title": "title2", "release_date": "2020-01-02"},
    {"id": "1", "title": "title", "release_date": "2020-01-01"},
    {"id": "2", "title": "title2", "release_date": "2020-01-02"},
  ]
};

export default App;
