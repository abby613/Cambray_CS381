import React from 'react'

export default function Hero() {
  const exampleHero = "I am a Software Engineer passionate about building scalable, efficient systems and solving complex problems.";

  return (
    <section className="hero">
      <h2>Hero Statement</h2>
      <p className="hero-statement">{exampleHero}</p>
    </section>
  )
}
