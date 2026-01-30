import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WorkStatus() {
  const [expandedSection, setExpandedSection] = useState('completed')

  const completed = [
    { title: 'Enterprise AI Platform', date: 'Jan 2028', impact: '+60% efficiency' },
    { title: 'ML Model Optimization', date: 'Dec 2027', impact: '80% faster' },
    { title: 'Microservices Migration', date: 'Nov 2027', impact: '5x scale' },
  ]

  const inProgress = [
    { title: 'AI Analytics Dashboard', progress: 65, expected: 'Feb 2028' },
    { title: 'Distributed Cache System', progress: 45, expected: 'Mar 2028' },
    { title: 'Cloud Cost Optimizer', progress: 30, expected: 'Apr 2028' },
  ]

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section className="work-status" id="work">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Work Status</h2>
        <p>Recent completions and current projects</p>
        <div className="header-line"></div>
      </motion.div>

      <motion.div 
        className="work-accordion"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Completed Section */}
        <div className="accordion-item">
          <button 
            className={`accordion-header ${expandedSection === 'completed' ? 'active' : ''}`}
            onClick={() => toggleSection('completed')}
          >
            <div className="accordion-title">
              <span className="accordion-icon">✓</span>
              <span>Completed Projects</span>
              <span className="accordion-count">{completed.length}</span>
            </div>
            <span className={`accordion-arrow ${expandedSection === 'completed' ? 'open' : ''}`}>▼</span>
          </button>
          
          <AnimatePresence>
            {expandedSection === 'completed' && (
              <motion.div 
                className="accordion-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="work-grid horizontal">
                  {completed.map((item, i) => (
                    <motion.div 
                      key={i}
                      className="work-card completed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="work-card-header">
                        <h4>{item.title}</h4>
                        <span className="status-badge done">✓</span>
                      </div>
                      <div className="work-card-meta">
                        <span className="date">{item.date}</span>
                        <span className="impact">{item.impact}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* In Progress Section */}
        <div className="accordion-item">
          <button 
            className={`accordion-header ${expandedSection === 'progress' ? 'active' : ''}`}
            onClick={() => toggleSection('progress')}
          >
            <div className="accordion-title">
              <span className="accordion-icon">⏳</span>
              <span>In Progress</span>
              <span className="accordion-count">{inProgress.length}</span>
            </div>
            <span className={`accordion-arrow ${expandedSection === 'progress' ? 'open' : ''}`}>▼</span>
          </button>
          
          <AnimatePresence>
            {expandedSection === 'progress' && (
              <motion.div 
                className="accordion-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="work-grid horizontal">
                  {inProgress.map((item, i) => (
                    <motion.div 
                      key={i}
                      className="work-card progress"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="work-card-header">
                        <h4>{item.title}</h4>
                        <span className="status-badge pending">{item.progress}%</span>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: `${item.progress}%` }}></div>
                      </div>
                      <span className="expected">Expected: {item.expected}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
