import React from 'react'

export default function Growth(){
  const learning = [
    'Computer Science Fundamentals: diving deep into algorithms, complexity analysis, and system design',
    'Backend Development: mastering Node.js, databases, API design, and authentication patterns',
    'DevOps & Cloud: learning Docker, Kubernetes, CI/CD pipelines, and AWS deployment strategies',
    'Software Engineering Practices: clean code, design patterns, testing, and collaborative development'
  ]

  return (
    <section className="growth">
      <h2>Growth / Currently Learning</h2>
      <p>Show that you have a growth mindset — what are you learning right now?</p>
      <ul>
        {learning.map((l,i)=>(<li key={i}>{l}</li>))}
      </ul>
    </section>
  )
}
