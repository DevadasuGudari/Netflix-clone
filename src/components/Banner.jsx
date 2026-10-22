import { Link } from 'react-router-dom'

function Banner({ movie, isDetail }) {
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'
  const bigPoster = hasPoster ? movie.Poster.replace('SX300', 'SX1200') : ''

  return (
    <div className="banner">
      {hasPoster && (
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(${bigPoster}), url(${movie.Poster})` }}
        ></div>
      )}

      <div className="banner-text">
        <span className="badge">{movie.Type === 'series' ? 'SERIES' : 'FILM'}</span>
        <h1>{movie.Title}</h1>
        <p className="meta">
          <span className="green">★ {movie.imdbRating} IMDb</span>
          <span>{movie.Year}</span>
          <span className="rated">{movie.Rated}</span>
          <span>{movie.Runtime}</span>
        </p>
        <p className="genre">{movie.Genre}</p>
        <p className="plot">{movie.Plot}</p>
        <div className="buttons">
          <button className="play">▶ Play</button>
          {isDetail ? (
            <button className="info">+ My List</button>
          ) : (
            <Link to={'/title/' + movie.Title} className="info">ⓘ More Info</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner