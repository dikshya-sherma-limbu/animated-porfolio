import "./Hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  const textVariants = {
    intial: {
      x: -500, // move 500px to the left
      opacity: 0, // make it invisible
    },
    animate: {
      x: 0, // move back to the original position
      opacity: 1, // make it visible
      transition: {
        duration: 1, // animate for 1 second
        staggerChildren: 0.1, // delay each child by 0.1 seconds
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    intial: {
      x: 0, // move 500px to the left
      opacity: 0, // make it invisible
    },
    animate: {
      x: "-220%", // move back to the original position
      opacity: 1, // make it visible
      transition: {
        duration: 20, // animate for 1 second
        repeat: Infinity,
        repeatType: "mirror",
        staggerChildren: 0.1, // delay each child by 0.1 seconds
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="intial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Dikshya Sherma Limbu</motion.h2>
          <motion.h1 variants={textVariants}>Software Developer</motion.h1>

          <div className="buttons " id="buttons">
            <a href="/Resume.pdf" download="Resume.pdf">
              <motion.button
                aria-labelledby="download"
                className="download"
                id="download"
                variants={textVariants}
              >
                Download CV
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button
                aria-labelledby="contact"
                id="contact"
                variants={textVariants}
              >
                Contact Me
              </motion.button>
            </a>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="down arrow"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Sleep Eat Code Repeat
      </motion.div>
      <div className="imageContainer">
        <img src="/face_co.png" alt="hero" />
      </div>
    </div>
  );
};
export default Hero;
