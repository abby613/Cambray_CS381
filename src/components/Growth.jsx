import React from 'react'

export default function Growth(){
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'Go', 'SQL'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Microservices'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    { category: 'AI/ML', items: ['TensorFlow', 'scikit-learn', 'Data Pipelines', 'ML Models'] }
  ]

  return (
    <section className="growth">
      <div className="section-header">
        <h2>Tech Stack & Skills</h2>
        <div className="header-line"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-category">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
