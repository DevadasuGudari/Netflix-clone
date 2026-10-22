import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Banner from './Banner'

const API = 'https://www.omdbapi.com/?apikey=61e576a4&t='

function Detail() {
  const { name } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch(API + name)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [name])

  if (!movie) return <p className="page empty">Loading...</p>

  return (
    <div>
      <Banner movie={movie} isDetail />
      <div className="details">
        <div><span>Cast</span><p>{movie.Actors}</p></div>
        <div><span>Director</span><p>{movie.Director}</p></div>
        <div><span>Writer</span><p>{movie.Writer}</p></div>
        <div><span>Language</span><p>{movie.Language}</p></div>
        <div><span>Country</span><p>{movie.Country}</p></div>
        <div><span>Awards</span><p>{movie.Awards}</p></div>
      </div>
    </div>
  )
}

export default Detail