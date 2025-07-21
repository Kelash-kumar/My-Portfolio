/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import './style.css';
import { useUser } from '../../UserContext';
import HandWave from './HandWave';
const Home = () => {

  const user = useUser();
  const { name, profession, profile_image, social } = user;


  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };


  return (
    <motion.section
      className="homepage container w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section className="intro w-full flex flex-col items-center" variants={itemVariants}>
        <motion.img
          className="user_img w-full max-w-[150px] sm:max-w-[200px] h-auto mx-auto mb-4"
          src={profile_image}
          alt="image"
        />
        <motion.h1 className="name text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center"> Hi, <HandWave /> I'm {name}</motion.h1>
        <motion.h3 className="job text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center">{profession}</motion.h3>
        <motion.div
          className="social-icons header__icons flex flex-wrap justify-center gap-2 my-4"
          variants={itemVariants}
        >
          {
            social.map((item, index) => {
              return (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="text-xl sm:text-2xl md:text-3xl">
                  {item.icons}
                </a>
              )
            })
          }
        </motion.div>
        <motion.a href="mailto:kelash.raisal@example.com?subject=Job%20Opportunity&body=Hello%20I%20am%20interested%20in%20working%20with%20you!"
          className='btn mt-4 px-6 py-2 rounded-lg text-base sm:text-lg md:text-xl'
          variants={itemVariants}
        >Hire Me</motion.a>
      </motion.section>
    </motion.section>
  );
};

export default Home;
