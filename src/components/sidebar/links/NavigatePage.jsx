import React from "react";
import { motion } from "framer-motion";
const NavigatePage = ({ setOpen }) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1, // 0.1 seconds after each other to open
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05, // 0.05 seconds after each other to close
        staggerDirection: -1, // start from the bottom
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const links = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Portfolio" },
    { name: "Contact" },
  ];
  return (
    <>
      <motion.div className="links" variants={variants}>
        {links.map((link) => (
          <motion.a
            href={`#${link.name}`}
            key={link.name}
            onClick={() => setOpen(false)}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default NavigatePage;
