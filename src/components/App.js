import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Contents from './Contents'
import Pagination from './Pagenation'


const App = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState(" ")
  const [search, setSearch] = useState(false)

  const getMovie = (page) => {
    fetch("http://127.0.0.1:8080/movies?page=" + page , {
      method: "GET",
      mode: "cors",
    })
    .then(res => res.json())
    .then(r => {
      setMovies(r["results"])
      setSearch(false)
    })
  }

  const getMovieByKeyword = (e, page) => {
    console.log("page is" + page)
    if (e !== null) {
      e.preventDefault()
    }
    if (typeof page === "undefined") {
      page = 1
      setPage(1)
    }
    if (keyword === "") {
      window.location.reload()
    }
    fetch("http://127.0.0.1:8080/movies/search?keyword=" + keyword + "&page=" + page , {
      method: "GET",
      mode: "cors",
    })
    .then(res => res.json())
    .then(r => {
      console.log(r["results"])
      setMovies(r["results"])
      setSearch(true)
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (search) {
      console.log("mount search")
      getMovieByKeyword(null, page)
    } else {
      getMovie(page)
    }
  }, [page])

  return (
    <div className="App">
      <Header setKeyword={setKeyword} getMovieByKeyword={getMovieByKeyword}/>
      <Contents contents={movies} />
      <Pagination page={page} updatePage={setPage}/>
    </div>
  );
}

export default App;
