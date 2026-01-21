import React from 'react'

export default function Growth(){
  const learning = [
    'System Design: architecting scalable backend systems and databases',
    'Go/Rust: exploring systems programming for performance-critical applications',
    'DevOps: mastering Docker, Kubernetes, and infrastructure-as-code',
    'Cloud Architecture: AWS and GCP for distributed deployments'
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
