import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">NETFLIX</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/shows">Shows</NavLink>
      </nav>
      <SearchBar />
    </header>
  )
}

export default Header