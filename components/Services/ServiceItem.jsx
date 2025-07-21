/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const ServiceItem = ({ image, title, description }) => {
    return (
      <motion.div
        className="service-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={image} alt={`Service Icon`} 
        style={{width: '100%', height: '200px', borderRadius: '10px'}}
        
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
    );
  };

  export default ServiceItem;
