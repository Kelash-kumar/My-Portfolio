import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LiaGraduationCapSolid } from "react-icons/lia";import './sidebar.css';
import { Link } from 'react-router-dom';
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Logo from '../../assets/logo.png'


import { useState } from "react";
const Sidebar = () => {
  
  const [Toggle, setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle(!Toggle);
    
  }
  return (
    <motion.div 
      className="sidebar"
    >
      <span className='logo_div'>
        <Link to='/' className='logo'>
          <img src={Logo} alt="logo"  />
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0A0HBisWIQ5iCj6OKYCWYvMglrIoa6OCp-eCGKlT43kq1en3oI2_jpQowg&s" alt="logo" /> */}
        </Link>
      </span>
             {
                Toggle ? 
                <span className="toggle__btn ." onClick={()=>handleToggle()}> <TfiArrowCircleRight />  </span>
                :
                <span className="toggle__btn " onClick={()=>handleToggle()}> <TfiArrowCircleLeft/>  </span>
             }

         {/* <span className="toggle__btn .left_toggle"> <TfiArrowCircleLeft />  </span> */}
         {/* <span className="toggle__btn .right_toggle"> <TfiArrowCircleRight/>  </span> */}
      <motion.div 
         initial={{ x:window.innerWidth <= 480 ? -400 : 0 }}
        animate={{ x:window.innerWidth <= 480 ? Toggle ? 0 : -400 : 0}}
        transition={{ type: 'spring', stiffness: 40 }}
      
      className='sidebar__icons_div'>
        <Link to='/' className='icons'>
          <IoHomeOutline/><span className="icon__name">home</span>
        </Link>
        <Link to='/about' className='icons'><span className="icon__name">About</span>
          <CgProfile/>
        </Link>
        <Link to='/services' className='icons'><span className="icon__name">Services</span>
          <MdOutlineMedicalServices/>
        </Link>
        <Link to='/resume' className='icons'><span className="icon__name">Resume</span>
          <LiaGraduationCapSolid/>
        </Link>
        <Link to='/projects' className='icons'><span className="icon__name">Projects</span>
          <GrProjects/>
        </Link>
        <Link to='/contact' className='icons'><span className="icon__name">Contact</span>
          <MdOutlineContactPhone/>
        </Link>
      </motion.div>
      
    </motion.div>
  )
}

export default Sidebar;
