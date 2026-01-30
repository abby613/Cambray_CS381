import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechVentures Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      text: 'Althea delivered an exceptional ML pipeline that transformed our data processing. Her technical expertise and attention to detail are outstanding.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Engineering Manager, CloudScale',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'Working with Althea on our cloud infrastructure was a game-changer. She reduced our deployment time by 70% and improved system reliability.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Product Lead, DataDriven Co.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'Althea has a rare combination of technical brilliance and clear communication. She made complex AI concepts accessible to our entire team.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Founder, StartupLabs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'From architecture to deployment, Althea handled our entire backend system. Professional, reliable, and incredibly skilled.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" id="testimonials">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>What Clients Say</h2>
        <p>Feedback from people I've worked with</p>
        <div className="header-line"></div>
      </motion.div>

      <div className="testimonials-container">
        <button className="testimonial-nav prev" onClick={prevTestimonial}>
          ←
        </button>

        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{testimonials[activeIndex].text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonials[activeIndex].name}</h4>
                  <p>{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="testimonial-nav next" onClick={nextTestimonial}>
          →
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
