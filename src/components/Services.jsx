import React from 'react'

export default function Services() {
  const services = [
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'RESTful APIs, microservices, database optimization, and scalable server architecture using Node.js, Python, and Go.'
    },
    {
      icon: '🧠',
      title: 'AI/ML Solutions',
      description: 'Machine learning models, data pipelines, predictive analytics, and intelligent automation with TensorFlow and scikit-learn.'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'AWS deployment, Docker containerization, CI/CD pipelines, infrastructure-as-code, and system monitoring.'
    },
    {
      icon: '📊',
      title: 'System Design',
      description: 'Scalable architectures, database design, API optimization, and performance tuning for high-traffic systems.'
    },
    {
      icon: '🔐',
      title: 'Security',
      description: 'Authentication, authorization, encryption, vulnerability assessment, and secure coding practices.'
    },
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description: 'End-to-end web applications combining React frontend, Node.js backend, and cloud deployment strategies.'
    }
  ]

  return (
    <section className="services">
      <div className="section-header">
        <h2>Services & Expertise</h2>
        <div className="header-line"></div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
