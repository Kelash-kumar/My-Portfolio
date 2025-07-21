import { useState } from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import { useUser } from '../../UserContext';
import ProjectItem from './ProjectItem';
import Footer from '../Footer';

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


function Projects() {
  const user = useUser();
  const projects=user.projects;
  const allCategories = ['All', 'Nodejs', 'Creative', 'Design', 'Reactjs'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <motion.section className="section projects" variants={stagger} initial="hidden" animate="visible">
      <div className="container">
        <motion.div className="projects__header">
          <motion.h3 className="section__title">Recent Work</motion.h3>
          <div className="section__header">
            <div className="section__tabs">
              {allCategories.map((category) => (
                <motion.div
                  key={category}
                  className={`section__tab ${selectedCategory === category ? 'section__tab--active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div className="projects__content">
          {filteredProjects.map((item) => (
            <ProjectItem key={item.id} title={item.title} category={item.category} imgSrc={item.image} desc={item.desc} />
          ))}
        </motion.div>
        <Footer />
    
      </div>
    </motion.section>
  );
}

export default Projects;
