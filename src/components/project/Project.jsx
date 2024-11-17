import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./project.css";

// Sample Projects Data
const projectsData = [
  {
    title: "Dinerly",
    description: "A web app to manage a diner, with a menu and ordering system.",
    techStack: ["PHP", "Laravel", "MySQL"],
    repoLink: "https://github.com/shyam-539/Dinerly",
    demoLink: "https://project-one.com",
  },
  {
    title: "DoctorPatient",
    description: "A platform to manage doctor-patient appointments.",
    techStack: ["PHP", "Laravel", "MySQL"],
    repoLink: "https://github.com/shyam-539/DoctorPatient",
    demoLink: "https://project-two.com",
  },
  {
    title: "Librox",
    description: "A library management system for managing book records.",
    techStack: ["PHP", "Laravel", "MySQL"],
    repoLink: "https://github.com/shyam-539/library_management_system",
    demoLink: "https://project-three.com",
  },
  {
    title: "WeatherDashboard",
    description: "A weather forecasting dashboard using an API.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    repoLink: "https://github.com/shyam-539/weatherDashboard",
    demoLink: "https://project-four.com",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Initialize AOS (Animation on Scroll)
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate fetching project data
    setProjects(projectsData);
  }, []);

  return (
    <section className="projects section py-5" id="Work">
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-12 col-md-6 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="project-card p-4 bg-light rounded shadow-sm">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack mb-3">
                  <strong>Tech Stack:</strong>
                  <ul className="tech-list">
                    {project.techStack.map((tech, idx) => (
                      <li key={idx} className="tech-item">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a
                    href={project.repoLink}
                    className="btn btn-dark me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repo
                  </a>
                  <a
                    href={project.demoLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
