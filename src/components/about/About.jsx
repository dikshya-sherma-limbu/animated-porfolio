import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I am Dikshya Sherma Limbu, currently studying software enginering.
        </p>
      </div>
      <div className="technical">
        <h2>Technical Skills</h2>
        <p>
          I have experience in web development using HTML, CSS, JavaScript, and
          React. I have also worked with Java, and C# in backend development.
          Regarding cloud services, I have worked with AWS and Azure. I have
          also worked with databases like MySQL, MongoDB, and Firebase.
        </p>
      </div>
      <div className="education">
        <h2>Education</h2>
        <p>
          I am currently in my final semester in Software Engineering Technology
          program at Centennial College.
        </p>
      </div>
      <div className="hobbies">
        <h2>Hobbies</h2>
        <p>
          I have several hobbies to keep myself engaged.<br></br>I mostly cook,
          read books, watch new tech content, visit local places in toronto, and
          sometimes even play guitar.
        </p>
      </div>
    </div>
  );
};
export default About;
