import React from "react";
import "./App.css";
import Profile from "./Profile";
import Skills from "./Skills";
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
import ContactStatus from './ContactStatus'; // Import the ContactStatus component
import Testimonials from './Testimonials'; // Import the Testimonials component


function App() {
  const skillsList = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <div className="App">
      <Profile />
      <Skills skills={skillsList} />
      <section>
        <h2>Projects</h2>
        <div className="projects">
          {/* Calling the ProjectCard component and passing props */}
          <ProjectCard 
            projectName="Personal Portfolio"
            projectDescription="A personal portfolio website built using React."
            projectLink="https://github.com/sharmin74/Projects"
          />
          <ProjectCard 
            projectName="E-commerce Website"
            projectDescription="An e-commerce site using React and Firebase."
            projectLink="https://github.com/sharmin74/Projects"
          />
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        {/* Calling the ContactStatus component */}
        <ContactStatus />
      </section>

      <section>
        <h2>Testimonials</h2>
        {/* Calling the Testimonials component */}
        <Testimonials />
      </section>
    </div>
  );
}

export default App;
