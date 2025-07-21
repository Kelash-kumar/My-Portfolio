import'./resume.css';
import Card from './card';
import { motion } from "framer-motion";
import { useUser } from '../../UserContext';
const Education = () => {

  const user= useUser();
  const Data = user.resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="edu_pge"
      variants={containerVariants}
      initial="hidden"
      animate="visible" >
      <motion.div className="edu_container">
        <div className='experience'>
          <h1 style={{ fontSize: '1.7rem', marginBottom: '2rem' }}>Experience</h1>
          {Data.map((item, index) => {
            return (
              item.type === 'experience' && (
                <motion.div
                  className="experience_content"
                  key={index}
                  variants={itemVariants}
                >
                  <Card
                    icon={item.icon}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                  />
                </motion.div>
              )
            );
          })}
        </div>

        <div className='experience'>
          <h1 style={{ fontSize: '1.7rem', marginBottom: '2rem' }}>Education</h1>
          {Data.map((item, index) => {
            return (
              item.type === 'education' && (
                <motion.div
                  className="experience_content"
                  key={index}
                  variants={itemVariants}
                >
                  <Card
                    icon={item.icon}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                  />
                </motion.div>
              )
            );
          })}
   
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
