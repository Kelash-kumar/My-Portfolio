import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IconsComponent from './goal.component';
import { FaServicestack } from "react-icons/fa";
import Footer from '../Footer';
import { MdOutlineIncompleteCircle, MdGroups, MdAlternateEmail, MdLocalPhone } from "react-icons/md";
import { LiaAddressBook } from "react-icons/lia";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useUser } from '../../UserContext';
import ResumePDF from '../../assets/kelash kumar-CV.pdf'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const user = useUser();
  const { email, phone, address, profession, profile_image, about } = user;
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section className="min-h-screen py-16 px-4 flex flex-col items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" variants={stagger} initial="hidden" animate="visible">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text" variants={fadeInUp}>About Me</motion.h1>
        <div className="w-full flex flex-col md:flex-row items-center gap-10 bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-6 md:p-10 mb-10">
          <motion.img src={profile_image} alt="profile-image" className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-md mx-auto mb-6 md:mb-0" variants={fadeInUp} />
          <div className="flex-1 flex flex-col gap-4">
            <motion.p className="text-lg text-gray-700 dark:text-gray-200" variants={fadeInUp}>I am a <strong>{profession}</strong> with a passion for learning and building web applications.</motion.p>
            <motion.p className="text-base text-gray-600 dark:text-gray-300" variants={fadeInUp}>{about}</motion.p>
            <motion.a href={ResumePDF} download='My-CV.pdf' className='inline-block mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition' variants={fadeInUp}>Download CV</motion.a>
          </div>
        </div>
        {isScrolled &&
          <motion.span className='flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg mb-6 animate-bounce cursor-pointer' onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} variants={fadeInUp}>
            <FaAngleDoubleDown className="text-2xl text-blue-600 dark:text-blue-300" />
          </motion.span>
        }
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <IconsComponent icon={<MdGroups className="text-3xl text-blue-500" />} name='Clients satisfied' value='10' />
          <IconsComponent icon={<FaServicestack className="text-3xl text-purple-500" />} name='Services provided' value='03' />
          <IconsComponent icon={<MdOutlineIncompleteCircle className="text-3xl text-green-500" />} name='Projects completed' value='20' />
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6 bg-white/80 dark:bg-slate-800/80 rounded-xl shadow p-6 mb-10">
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><MdAlternateEmail className="text-xl" /> <a href={`mailto:${email}`}>{email}</a></span>
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><MdLocalPhone className="text-xl" /> {phone}</span>
          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><LiaAddressBook className="text-xl" /> {address}</span>
        </div>
        <Footer />
      </div>
    </motion.section>
  )
}

export default About;
