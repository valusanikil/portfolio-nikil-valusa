import React from "react";
import "../Projects/Projects.css";
import Me from "../../assets/Profile.jpeg";

const Projects = () => {
  const moreLink = () => {
    window.location.href = "https://github.com/valusanikil?tab=repositories";
  };
  return (
    <div id="projects" className="projects">
      <h1 className="projects_heading">Projects</h1>
      <div className="project_container">
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Me} alt=""></img>
          </div>
          <h3 className="project_title">Blood Bank System</h3>
          <p>
            Developed a full-stack Blood Bank Management System using Spring
            Boot and Angular to manage blood inventory, donor data, and
            real-time availability with role-based access and responsive UI.
          </p>
          <div className="project_item_cta">
            <a href="" className="btn-git" target="_blank">
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Me} alt=""></img>
          </div>
          <h3 className="project_title">Calorie Tracker</h3>
          <p>Project description</p>

          <div className="project_item_cta">
            <a href="" className="btn-git" target="_blank">
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Me} alt=""></img>
          </div>
          <h3 className="project_title">Insight Hub</h3>
          <p>Project description</p>

          <div className="project_item_cta">
            <a href="" className="btn-git" target="_blank">
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Me} alt=""></img>
          </div>
          <h3 className="project_title">Wine Quality Prediction</h3>
          <p>Project description</p>

          <div className="project_item_cta">
            <a href="" className="btn-git" target="_blank">
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Me} alt=""></img>
          </div>
          <h3 className="project_title">Professional Consultancy Service</h3>
          <p>Project description</p>

          <div className="project_item_cta">
            <a href="" className="btn-git" target="_blank">
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Me} alt=""></img>
          </div>
          <h3 className="project_title">To Do Application</h3>
          <p>Project description</p>

          <div className="project_item_cta">
            <a href="" className="btn-git" target="_blank">
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
      </div>
      <div className="more">
        <h2 onClick={moreLink}>More on Github</h2>
      </div>
    </div>
  );
};

export default Projects;
