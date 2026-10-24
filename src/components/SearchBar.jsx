import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBar() {
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/search') {
      setText('')
    }
  }, [location.pathname])

  const handleSubmit = (e) => {
    e.preventDefault()
    const q = text.trim()
    if (q) navigate('/search?q=' + encodeURIComponent(q))
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titles, people, genres"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Search titles"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar 