import React from "react";
import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
  // Configuration for the container (parent) motion div
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        // This makes children animate one after another with a delay
        staggerChildren: 0.3,
        // This ensures the container itself doesn't animate before the children
        delayChildren: 0.1,
      },
    },
  };

  // Configuration for each child motion div
  const childVariants = {
    initial: {
      opacity: 0,
      y: 50, // Reduced distance for mobile
    },
    animate: {
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        type: "tween", // Changed to tween for more reliable animation on mobile
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="initial"
      animate="animate" // Changed from whileInView to ensure animation always plays
      // Removed viewport prop which can be unreliable on mobile
    >
      <motion.div className="about-me" variants={childVariants}>
        <h2>About Me</h2>
        <p>
          I am Dikshya Sherma Limbu, currently studying software engineering.
        </p>
      </motion.div>
      <motion.div className="technical" variants={childVariants}>
        <h2>Technical Skills</h2>
        <p>
          I have experience in web development using HTML, CSS, JavaScript, and
          React. I have also worked with Java, and C# in backend development.
          Regarding cloud services, I have worked with AWS and Azure. I have
          also worked with databases like MySQL, MongoDB, and Firebase.
        </p>
      </motion.div>
      <motion.div className="education" variants={childVariants}>
        <h2>Education</h2>
        <p>
          I am currently in my final semester in Software Engineering Technology
          program at Centennial College.
        </p>
      </motion.div>
      <motion.div className="hobbies" variants={childVariants}>
        <h2>Hobbies</h2>
        <p>
          I have several hobbies to keep myself engaged.<br></br>I mostly cook,
          read books, watch new tech content, visit local places in Toronto, and
          sometimes even play guitar.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
