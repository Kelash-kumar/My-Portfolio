/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  
const ProjectItem = ({imgSrc,title,category,desc}) => {
  const [overlay,setOverlay] = useState(false);
  return (
    <motion.div className="projects__item" variants={fadeInUp}>
    <motion.div className="projects__item-img">
      <img src={imgSrc}  />
    </motion.div>
    <motion.div className="projects__item-info">
      <h3 className="projects__item-title">{title}</h3>
      <span className="projects__item-category">{category}</span>
     <div>
      <button className='project_btn '
      onClick={()=>setOverlay(!overlay)}
      >Read more</button>
     </div>
    
    </motion.div>
    {
      overlay && (
        <div className="project-details-overlay" >
        <div className="overlay-content">
            <h2>{title}</h2>
            <p>{desc}</p>
           <div>
            <button className='project_btn '
            onClick={()=>setOverlay(!overlay)}
            >Close</button>
          </div>
        </div>
       
    </div>
      )
    }

    
  </motion.div>
  )
}

export default ProjectItem
