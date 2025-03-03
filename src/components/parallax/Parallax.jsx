import "./parallax.scss";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function Parallax({ type }) {
  const ref = useRef(); // value of the scroll position of the element
  const { scrollYProgress } = useScroll({
    target: ref, // target - the element that we want to track
    offset: ["start start", "end start"], // offset - ["start start", "end start"] - start start means when the element starts and end start means when the element ends
  });

  const yBackgroundText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBackgroundPlanet = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(rgba(62, 88, 121, 0.7), #1a1a2e)"
            : "linear-gradient(180deg, #3e5879, #6c7a96)",
      }}
    >
      <motion.h1 style={{ y: yBackgroundText }}>
        {type === "services"
          ? " What am I working on Currently ?"
          : " My Projects"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBackgroundPlanet,
        }}
        className="planets"
      ></motion.div>
      {type === "services" ? (
        <motion.div
          style={{ x: yBackgroundPlanet }}
          className="astronaut"
        ></motion.div>
      ) : null}
      <motion.div
        style={{ x: yBackgroundPlanet }}
        className="stars"
      ></motion.div>
    </div>
  );
}

export default Parallax;
