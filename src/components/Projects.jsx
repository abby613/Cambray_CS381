import React from 'react'

function LearningCard({title, items}){
  return (
    <article className="learning-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item,i)=>(<li key={i}>{item}</li>))}
      </ul>
    </article>
  )
}

export default function Projects(){
  const learning = [
    {
      title: 'What I Know',
      items: [
        'RESTful APIs & Backend Systems',
        'Database Design & SQL Optimization',
        'Full-Stack Web Development',
      ]
    },
    {
      title: 'Currently Learning',
      items: [
        'Machine Learning & AI Integration',
        'Cloud Architecture (AWS/GCP)',
        'DevOps & Infrastructure-as-Code',
      ]
    },
    {
      title: 'Future Goals',
      items: [
        'Distributed Systems & Microservices',
        'Advanced AI/ML Pipelines',
        'System Design & Scalability',
      ]
    }
  ]

  return (
    <section className="projects">
      <div className="learning-grid">
        {learning.map((l,i)=>(
          <LearningCard key={i} title={l.title} items={l.items} />
        ))}
      </div>
    </section>
  )
}
