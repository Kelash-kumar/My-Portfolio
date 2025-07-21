// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import './contact.css';

// Contact component
const Contact = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    // Motion section with animation variants
    <motion.section
      className="contact section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Container for content */}
      <div className="container">
        {/* Section title with animation */}
        <motion.div className="row" variants={itemVariants}>
          <div className="section-title">
            <h2 className='section__title'>Get in Touch</h2>
          </div>
        </motion.div>
        
        {/* Contact information and form in a row with animation */}
        <motion.div className="row" variants={itemVariants}>
          {/* Left column with contact information */}
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Let's Discuss Your Ideas!</h3>
              <p>Feel free to reach out for any inquiries or just to say hello.</p>
            </div>
          </div>
          
          {/* Right column with contact form */}
          <div className="col-md-6">
            <motion.form
              action="https://formspree.io/f/xvoezqjq"
              method="POST"
              className="contact-form"
              variants={itemVariants}
            >
              {/* Input fields with motion animation */}
              <motion.input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Full Name"
                required
              />
              <motion.input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email Address"
                required
              />
              <motion.input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject of Your Message"
                required
              />
              <motion.textarea
                name="message"
                rows="5"
                className="form-control"
                placeholder="Tell me more about your project or idea..."
              ></motion.textarea>
              
              {/* Submit button with animation */}
              <motion.input
                type="submit"
                className="form-control submit"
                value="SEND MESSAGE"
              />
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
