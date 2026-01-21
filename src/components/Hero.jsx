import React from 'react'

export default function Hero() {
  const exampleHero = "I am a Computer Science student and aspiring Software Engineer passionate about building elegant, scalable systems and solving complex algorithmic challenges.";

  return (
    <section className="hero">
      <h2>Hero Statement</h2>
      <p className="hero-statement">{exampleHero}</p>
    </section>
  )
}
