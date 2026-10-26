import Row from './Row'

function Movies() {
  return (
    <div className="page">
      <Row title="Action" names={['Gladiator', 'John Wick', 'Mad Max: Fury Road', 'Top Gun: Maverick', 'Die Hard', 'Skyfall', 'Logan', 'Black Panther']} />
      <Row title="Drama" names={['The Shawshank Redemption', 'Forrest Gump', 'Fight Club', 'Whiplash', 'The Green Mile', 'A Beautiful Mind', 'Good Will Hunting', 'The Pursuit of Happyness']} />
      <Row title="Sci-Fi" names={['The Matrix', 'Arrival', 'Ex Machina', 'Avatar', 'Inception', 'Interstellar', 'Blade Runner 2049', 'The Martian']} />
      <Row title="Comedy" names={['The Hangover', 'Superbad', 'Home Alone', 'Mrs. Doubtfire', 'Zombieland', 'Step Brothers', 'Bridesmaids', 'Dumb and Dumber']} />
      <Row title="Thriller" names={['Se7en', 'Gone Girl', 'Shutter Island', 'Prisoners', 'The Silence of the Lambs', 'Zodiac', 'Nightcrawler', 'Joker']} />
      <Row title="Animation" names={['Toy Story', 'The Lion King', 'Finding Nemo', 'Coco', 'Up', 'Inside Out', 'Frozen', 'Spider-Man: Into the Spider-Verse']} />
      <Row title="Indian Cinema" names={['RRR', 'Baahubali: The Beginning', 'Dangal', '3 Idiots', 'Kantara', 'Pushpa: The Rise - Part 1', 'Jawan', 'Vikram']} />
    </div>
  )
}

export default Movies 