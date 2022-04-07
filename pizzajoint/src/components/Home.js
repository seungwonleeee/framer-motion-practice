import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay: 1.5, duration: 5 }}
    >
      <motion.h2
        initial={{
          textShadow: '0px 0px 8px rgb(255,255,255)',
        }}
        // animate={{ fontSize: 50, color: '#ff2994' }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.2,
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;