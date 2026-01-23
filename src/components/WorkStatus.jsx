import React, { useState } from 'react'

export default function WorkStatus() {
  const [activeTab, setActiveTab] = useState('completed')

  const completed = [
    {
      title: 'Portfolio Website Redesign',
      description: 'Redesigned and deployed a modern 3D developer portfolio with advanced CSS animations and light/dark mode support.',
      technologies: ['React', 'CSS3', '3D Transforms'],
      date: 'Jan 2026',
      impact: 'Enhanced user engagement by 40%'
    },
    {
      title: 'ML Model Optimization',
      description: 'Optimized TensorFlow models reducing inference time by 60% through quantization and pruning techniques.',
      technologies: ['Python', 'TensorFlow', 'ONNX'],
      date: 'Dec 2025',
      impact: 'Reduced latency from 500ms to 200ms'
    },
    {
      title: 'Microservices Migration',
      description: 'Successfully migrated monolithic application to microservices architecture with Kubernetes orchestration.',
      technologies: ['Node.js', 'Kubernetes', 'Docker'],
      date: 'Nov 2025',
      impact: 'Improved scalability by 3x'
    },
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Implemented automated CI/CD pipeline with GitHub Actions for seamless deployments.',
      technologies: ['GitHub Actions', 'Docker', 'AWS'],
      date: 'Oct 2025',
      impact: 'Reduced deployment time from 2 hours to 10 minutes'
    }
  ]

  const inProgress = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Building real-time analytics dashboard with ML-powered insights and predictive analytics.',
      technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
      progress: 65,
      expectedCompletion: 'Feb 2026'
    },
    {
      title: 'Distributed Cache System',
      description: 'Developing high-performance distributed caching layer using Redis cluster and consistent hashing.',
      technologies: ['Go', 'Redis', 'Protocol Buffers'],
      progress: 45,
      expectedCompletion: 'Mar 2026'
    },
    {
      title: 'Cloud Cost Optimization Tool',
      description: 'Creating intelligent tool to analyze and optimize cloud infrastructure spending across AWS, GCP, and Azure.',
      technologies: ['Node.js', 'AWS SDK', 'React'],
      progress: 30,
      expectedCompletion: 'Apr 2026'
    },
    {
      title: 'Advanced Logging Framework',
      description: 'Building structured logging framework with ELK stack integration for centralized monitoring.',
      technologies: ['Python', 'ELK Stack', 'Kubernetes'],
      progress: 55,
      expectedCompletion: 'Mar 2026'
    }
  ]

  return (
    <section className="work-status">
      <div className="work-container">
        <h2 className="work-title">Work Status</h2>
        
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            ✓ Completed
          </button>
          <button 
            className={`tab-btn ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
          >
            ⏳ In Progress
          </button>
        </div>

        <div className="work-content">
          {activeTab === 'completed' && (
            <div className="work-items">
              {completed.map((item, idx) => (
                <div key={idx} className="work-item completed-item">
                  <div className="work-header">
                    <div className="work-info">
                      <h3>{item.title}</h3>
                      <p className="work-date">{item.date}</p>
                    </div>
                    <div className="completion-badge">✓ Done</div>
                  </div>
                  <p className="work-description">{item.description}</p>
                  <p className="work-impact">📊 {item.impact}</p>
                  <div className="work-tech">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="work-items">
              {inProgress.map((item, idx) => (
                <div key={idx} className="work-item progress-item">
                  <div className="work-header">
                    <div className="work-info">
                      <h3>{item.title}</h3>
                      <p className="work-date">Expected: {item.expectedCompletion}</p>
                    </div>
                    <div className="progress-percentage">{item.progress}%</div>
                  </div>
                  <p className="work-description">{item.description}</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                  </div>
                  <div className="work-tech">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
