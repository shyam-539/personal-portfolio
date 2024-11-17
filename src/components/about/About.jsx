import React from "react";
import Header from "../header/Header";
import "./about.css";
import Footer from "../footer/Footer";
import AboutImg from "../../assets/about.png";
import Resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <div>
      <Header />
      <section className="about section py-5" id="about">
        <div className="container">
          <div className="row">
            {/* Profile Picture */}
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4">
              <img src={AboutImg} alt="Profile" className="about-img mb-3" />
            </div>

            {/* About Text */}
            <div className="col-12 col-md-6">
              <h1>
                Hi, I'm <span className="highlight">Shyam Sankar P</span>!
              </h1>
              <p>
                I grew up in <strong>Kerala, India</strong>, a land known for
                its serene beauty and vibrant culture, but it was a moment of
                inspiration at home that truly shaped my path. My love for
                coding sparked when I watched my brother work on a project,
                turning lines of seemingly complex code into
                <span className="highlight">stunning, magical designs</span>.
                What started as an innocent curiosity soon evolved into a deep
                passion for{" "}
                <strong>technology, creativity, and problem-solving</strong>.
              </p>
              <p>
                Today, I am a{" "}
                <span className="highlight">Laravel Developer</span>{" "}
                specializing in Web Development, with a strong focus on creating
                experiences that are{" "}
                <strong>innovative, user-friendly, and impactful</strong>. I
                believe in the power of technology to transform ideas into
                reality, and I take pride in crafting solutions that not only
                meet expectations but also exceed them.
              </p>
              <p>
                One of my most rewarding experiences was working on a{" "}
                <strong>hotel management application</strong>
                for a major hotel network. The project pushed me to think
                creatively, apply innovative solutions, and deliver a product
                that <span className="highlight">
                  streamlined operations
                </span>{" "}
                while enhancing user experience. It reinforced my belief in{" "}
                <strong>continuous learning</strong> and the value of combining
                technical expertise with creative vision.
              </p>
              <p>
                Beyond technical skills, I bring{" "}
                <strong>
                  enthusiasm, adaptability, and a collaborative spirit
                </strong>{" "}
                to every team and project I join. I am always eager to explore
                new challenges, learn from diverse perspectives, and contribute
                to meaningful work that makes a difference.
              </p>
              <p>
                When I’m not coding, I enjoy immersing myself in{" "}
                <span className="highlight">new technologies</span> and
                exploring creative pursuits that fuel my curiosity and keep me
                inspired.
              </p>
              <p>
                I’m excited to connect with{" "}
                <strong>like-minded individuals</strong> and organizations to
                build impactful solutions and embrace new opportunities with a
                fresh perspective.{" "}
                <em>Let’s create something amazing together!</em>
              </p>

              <div className="contact-info mt-4">
                <a href={Resume} className="btn btn-success me-2">
                  Resume
                </a>
                <a
                  href="mailto:shyamsankarp539@gmail.com"
                  className="btn btn-dark me-2"
                >
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
