import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "Movie Recommendation System",
    image: "/movie.jpeg", // Updated to use local image

    desc: "Developed a machine learning-powered recommendation engine using Python and Scikit-learn. Applied feature engineering for improved recommendation accuracy and deployed on Heroku with an interactive Streamlit UI.",
  },
  {
    id: 2,
    title: "Smart Trip Planner",
    image: "/trip-planner.jpeg", // Updated to use local image

    desc: "Integrated Google's Gemini API for personalized travel recommendations. Implemented real-time data synchronization and user authentication using Firebase.",
  },
  {
    id: 3,
    title: "Book Store",
    image: "/book-store.png", // Updated to use local image

    desc: "Developed a full-stack MERN book store website with Firebase authentication and JWT token. Implemented RESTful API architecture for stateless communication.",
  },
];
const SingleItem = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer " style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <motion.div className="buttons">
              <a
                href="https://github.com/your-username/your-repo-name"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
              <button>Github</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, //
    damping: 20,
  });

  return (
    <div className="portfolio" id="portfolio" ref={ref}>
      <div className="progress">
        <h1>Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
