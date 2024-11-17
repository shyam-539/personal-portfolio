import React from "react";
import "./home.css";
import ProfileImg from "../../assets/profile.jpg";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section py-5" id="home">
      <div className="home__container container">
        <div className="row align-items-center justify-content-between">
          {/* Right Column: Profile Image */}
          <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
            <div className="home__img">
              <img
                src={ProfileImg}
                alt="Profile"
                className="img-fluid rounded-circle shadow-lg w-70"
              />
            </div>
          </div>

          {/* Left Column: Title, Subtitle, Description, Social Links */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center text-lg-start order-2 order-lg-1">
            <div className="home__content">
            <h1 className="home__typing">
                <img
                  src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=50&center=true&vCenter=true&width=800&height=90&duration=4000&lines=Hi+There!+👋;+I'm+Shyam+Sankar!;"
                  alt="Typing animation"
                  className="img-fluid"
                />
              </h1>
              <h2 align="center" className="home__subtitle">
                <span>Software Engineer</span>
              </h2>
              <p className="home__description text-secondary mb-4">
                I'm a software engineer based in Kerala, India, passionate about
                building impactful digital solutions. With dedication and
                attention to detail, I strive to create seamless, user-friendly
                experiences. Let's collaborate to bring your ideas to life.
              </p>

              {/* Social Links */}
              <div className="home__social d-flex justify-content-center justify-content-lg-start gap-3">
                <a
                  href="https://www.instagram.com/shyamigans/"
                  className="home__social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-instagram fs-3"></i>
                </a>
                <a
                  href="https://dribbble.com/Shyam539"
                  className="home__social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-dribbble fs-3"></i>
                </a>
                <a
                  href="https://github.com/shyam-539"
                  className="home__social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-github-alt fs-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shyamsankarp539/"
                  className="home__social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-linkedin-alt fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="home__scroll text-center mt-4">
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
