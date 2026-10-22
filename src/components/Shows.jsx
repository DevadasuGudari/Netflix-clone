import Row from './Row'

function Shows() {
  return (
    <div className="page">
      <Row title="Crime and Thriller" names={['Breaking Bad', 'Narcos', 'Money Heist', 'Mindhunter', 'Ozark', 'Better Call Saul', 'Sherlock', 'True Detective']} />
      <Row title="Sci-Fi and Fantasy" names={['Stranger Things', 'Black Mirror', 'The Witcher', 'Game of Thrones', 'The Mandalorian', 'Westworld', 'Loki', 'Wednesday']} />
      <Row title="Drama" names={['The Crown', 'Bridgerton', 'Peaky Blinders', 'Succession', 'House of the Dragon', 'Vikings', 'The Last of Us', 'Squid Game']} />
      <Row title="Comedy" names={['Friends', 'The Office', 'Brooklyn Nine-Nine', 'How I Met Your Mother', 'Seinfeld', 'The Big Bang Theory', 'Modern Family', 'Parks and Recreation']} />
      <Row title="Animation" names={['Rick and Morty', 'The Simpsons', 'Family Guy', 'Avatar: The Last Airbender', 'Arcane', 'South Park', 'BoJack Horseman', 'Attack on Titan']} />
    </div>
  )
}

export default Shows