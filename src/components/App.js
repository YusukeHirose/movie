import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Contents from './Contents'
import Pagination from './Pagenation'


const App = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const getMovie = (page) => {
    console.log("page is" + page)
    fetch("http://127.0.0.1:8080/movies?page=" + page , {
      method: "GET",
      mode: "cors",
    })
    .then(res => {
      const r = res.json()
      console.log(r)  
      return r
    })
    .then(r => setMovies(r))
  }

  useEffect(() => getMovie(page), [page])

  console.log({movies})

  return (
    <div className="App">
      <Header />
      <Contents contents={movies} />
      <Pagination page={page} updatePage={setPage}/>
    </div>
  );
}

export default App;
