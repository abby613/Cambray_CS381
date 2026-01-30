import React from 'react'
import { motion } from 'framer-motion'

// Technology logo SVGs
const RustLogo = () => (
  <svg viewBox="0 0 106 106" fill="currentColor" className="tech-logo">
    <path d="M50.5 7.5c1.5-2 4.5-2 6 0l6 8c1 1.3 2.8 1.8 4.3 1.2l9-3.5c2.2-.9 4.6.5 5 2.8l1.5 9.5c.3 1.6 1.5 2.9 3.1 3.2l9.5 1.5c2.3.4 3.7 2.8 2.8 5l-3.5 9c-.6 1.5-.1 3.3 1.2 4.3l8 6c2 1.5 2 4.5 0 6l-8 6c-1.3 1-1.8 2.8-1.2 4.3l3.5 9c.9 2.2-.5 4.6-2.8 5l-9.5 1.5c-1.6.3-2.8 1.5-3.1 3.1l-1.5 9.5c-.4 2.3-2.8 3.7-5 2.8l-9-3.5c-1.5-.6-3.3-.1-4.3 1.2l-6 8c-1.5 2-4.5 2-6 0l-6-8c-1-1.3-2.8-1.8-4.3-1.2l-9 3.5c-2.2.9-4.6-.5-5-2.8l-1.5-9.5c-.3-1.6-1.5-2.8-3.1-3.1l-9.5-1.5c-2.3-.4-3.7-2.8-2.8-5l3.5-9c.6-1.5.1-3.3-1.2-4.3l-8-6c-2-1.5-2-4.5 0-6l8-6c1.3-1 1.8-2.8 1.2-4.3l-3.5-9c-.9-2.2.5-4.6 2.8-5l9.5-1.5c1.6-.3 2.8-1.5 3.1-3.2l1.5-9.5c.4-2.3 2.8-3.7 5-2.8l9 3.5c1.5.6 3.3.1 4.3-1.2l6-8zM53 34c-10.5 0-19 8.5-19 19s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19z"/>
  </svg>
)

const OpenAILogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="tech-logo">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
)

const ShieldLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="tech-logo">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
)

const KafkaLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="tech-logo">
    <path d="M12.973 16.624c-.112.028-.224.056-.34.084a3.2 3.2 0 0 0-.396-1.512 3.17 3.17 0 0 0-1.096-1.148l.924-1.596a5.054 5.054 0 0 0 2.016.42V12h-.028c0-.476-.056-.94-.168-1.4a5.098 5.098 0 0 0-.476-1.288l1.372-.784a6.905 6.905 0 0 1 .728 2.044c.112.5.168 1.008.168 1.512 0 .476-.056.952-.168 1.428-.112.476-.28.924-.504 1.344l-1.344-.784a3.17 3.17 0 0 0 .312-1.008V12.9a3.171 3.171 0 0 0-.312-1.008l1.344-.784c.224.42.392.868.504 1.344.112.476.168.952.168 1.428 0 .504-.056 1.012-.168 1.512a6.905 6.905 0 0 1-.728 2.044l-1.372-.784c.168-.308.308-.644.396-1.008.088-.364.14-.728.14-1.092v-.112l-.924 1.596a3.17 3.17 0 0 0-1.96.588zM8.857 12a3.143 3.143 0 1 1 6.286 0 3.143 3.143 0 0 1-6.286 0zm3.143 5.143a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286z"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

export default function Growth() {
  const learningItems = [
    { icon: <RustLogo />, title: 'Rust', subtitle: 'Systems Programming', progress: 40 },
    { icon: <OpenAILogo />, title: 'LLMs & RAG', subtitle: 'AI Engineering', progress: 65 },
    { icon: <ShieldLogo />, title: 'Zero-Trust', subtitle: 'Security Architecture', progress: 50 },
    { icon: <KafkaLogo />, title: 'Data Streaming', subtitle: 'Apache Kafka', progress: 55 }
  ]

  const goals = [
    { icon: '🏆', text: 'Lead Architect Certification' },
    { icon: '🚀', text: 'Launch AI Startup' },
    { icon: '🎤', text: 'Tech Conference Speaker' }
  ]

  return (
    <section className="growth" id="growth">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Growth Journey</h2>
        <p>Always learning, always evolving</p>
        <div className="header-line"></div>
      </motion.div>

      <div className="growth-content">
        <motion.div 
          className="learning-section"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="learning-header">
            <span className="learning-pulse"></span>
            <h3>Currently Learning</h3>
          </div>
          <div className="learning-cards">
            {learningItems.map((item, i) => (
              <motion.div 
                key={i}
                className="learning-card"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <span className="learning-icon">{item.icon}</span>
                <div className="learning-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
                <div className="learning-progress">
                  <div className="progress-bar" style={{ width: `${item.progress}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="goals-section"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>2028 Goals</h3>
          <div className="goals-list">
            {goals.map((goal, i) => (
              <motion.div 
                key={i}
                className="goal-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="goal-icon">{goal.icon}</span>
                <span className="goal-text">{goal.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
