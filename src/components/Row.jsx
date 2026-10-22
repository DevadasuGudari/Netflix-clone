import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API = 'https://www.omdbapi.com/?apikey=61e576a4&t='
const saved = {}

function getMovie(name) {
  if (!saved[name]) {
    saved[name] = fetch(API + name).then((res) => res.json())
  }
  return saved[name]
}

function Row({ title, names }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all(names.map(getMovie))
      .then((data) => {
        setMovies(data.filter((m) => m.Response === 'True' && m.Poster !== 'N/A'))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row-list">
        {loading && [1, 2, 3, 4, 5, 6].map((n) => <div className="card skeleton" key={n}></div>)}
        {!loading && movies.length === 0 && <p className="empty">No results found</p>}
        {movies.map((m) => (
          <Link className="card" key={m.imdbID} to={'/title/' + m.Title}>
            <img
              src={m.Poster.replace('SX300', 'SX600')}
              alt={m.Title}
              onError={(e) => { e.target.onerror = null; e.target.src = m.Poster }}
            />
            <h3>{m.Title}</h3>
            <p>{m.Year} • ⭐ {m.imdbRating}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Row