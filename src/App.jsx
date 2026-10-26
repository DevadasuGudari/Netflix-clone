import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './components/Intro'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Detail from './components/Detail'
import Search from './components/Search'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (showIntro) return <Intro />

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/title/:name" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App