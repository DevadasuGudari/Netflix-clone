import { useState, useEffect } from 'react'
import Banner from './Banner'
import Row from './Row'

const API = 'https://www.omdbapi.com/?apikey=61e576a4&t='
const heroNames = ['Inception', 'The Dark Knight', 'Interstellar', 'Oppenheimer', 'Dune']

function Home() {
  const [heroes, setHeroes] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    Promise.all(
      heroNames.map((name) => fetch(API + name).then((res) => res.json()))
    ).then((data) => {
      setHeroes(data.filter((m) => m.Response === 'True' && m.Poster !== 'N/A'))
    })
  }, [])

 
  useEffect(() => {
    if (heroes.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroes.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [heroes])

  const hero = heroes[index]

  return (
    <div>
      {hero ? <Banner key={hero.imdbID} movie={hero} /> : <div className="banner skeleton-banner"></div>}

      <div className="rows-pull">
        <Row title="Trending Now" names={['The Dark Knight', 'Interstellar', 'Parasite', 'Joker', 'Dune', 'Oppenheimer', 'Avengers: Endgame', 'Spider-Man: No Way Home']} />
        <Row title="Popular Movies" names={['Gladiator', 'John Wick', 'The Matrix', 'Avatar', 'Whiplash', 'Titanic', 'Fight Club', 'The Godfather']} />
        <Row title="Popular Shows" names={['Stranger Things', 'Breaking Bad', 'Money Heist', 'The Crown', 'Game of Thrones', 'Peaky Blinders', 'Squid Game', 'Friends']} />
        <Row title="Top Rated" names={['The Shawshank Redemption', 'Forrest Gump', 'Pulp Fiction', 'Goodfellas', 'Se7en', 'The Prestige', 'Django Unchained', 'The Departed']} />
      </div>
    </div>
  )
}

export default Home