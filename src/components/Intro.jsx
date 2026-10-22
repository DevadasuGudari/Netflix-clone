function Intro() {
  return (
    <div className="intro">
      <h1 className="intro-logo">
        {'NETFLIX'.split('').map((letter, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>{letter}</span>
        ))}
      </h1>
    </div>
  )
}

export default Intro