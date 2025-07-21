/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import './services.css';
import { useUser } from '../../UserContext';
import ProgressBar from './ProgressBar';
import ServiceItem from './ServiceItem';
import Footer from '../Footer';
const Services = () => {
  const user = useUser();
  const Data = user.services;
  const skills = user.skills;
  return (
    <motion.div
      className="service"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <h2 className="section__title "
       style={{marginTop: '50px'}}
      >My Services</h2>
      <div className="services-container">
         {
          Data.map((item, index) => {
            return (
              <ServiceItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })
         }
      </div>
      <div className="skill_progress">
        <h2 className="section__title ">My Skills</h2>
        <div className="skill_progress__container">
          {skills.map((skill) => (
            <ProgressBar
              key={skill.id}
              skillName={skill.name}
              value={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>
           
      </div>
      <Footer />
    </motion.div>
  );
};

export default Services;
