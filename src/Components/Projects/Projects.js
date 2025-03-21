import React from "react";
import "../Projects/Projects.css";
import Blood_Bank_System from "../../assets/Blood Bank System.png";
import Calorie_Tracker from "../../assets/Calorie Tracker.png";
import Insight_Hub from "../../assets/Insight Hub.png";
import Wine from "../../assets/Wine.jpg";
import PCS from "../../assets/PCS.png";
import User from "../../assets/User.png";

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
            <img className="image" src={Blood_Bank_System} alt=""></img>
          </div>
          <h3 className="project_title">Blood Bank System</h3>
          <p>
            Developed a full-stack Blood Bank Management System using Spring
            Boot and Angular to manage blood inventory, donor data, and
            real-time availability with role-based access and responsive UI.
          </p>
          <div className="project_item_cta">
            <a
              href="https://github.com/valusanikil/blood-bank-system.git"
              className="btn-git"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Calorie_Tracker} alt=""></img>
          </div>
          <h3 className="project_title">Calorie Tracker</h3>
          <p>
            Developed a web-based calorie tracker using ASP.NET Core and SQL
            Server to log daily calorie intake, manage healthy recipes, and
            visualize nutritional insights with Chart.js and responsive UI.
          </p>

          <div className="project_item_cta">
            <a
              href="https://github.com/valusanikil/calorie-tracker.git"
              className="btn-git"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Insight_Hub} alt=""></img>
          </div>
          <h3 className="project_title">Insight Hub</h3>
          <p>
            Developed Insight Hub, a web-based learning platform using HTML,
            CSS, JavaScript. Implemented user authentication, course management,
            shopping cart, and instructor modules delivering interactive user
            experience.
          </p>

          <div className="project_item_cta">
            <a
              href="https://github.com/valusanikil/Insight-hub.git"
              className="btn-git"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={Wine} alt=""></img>
          </div>
          <h3 className="project_title">Wine Quality Prediction</h3>
          <p>
            Developed a machine learning model using Python, Pandas, and
            Scikit-learn to predict wine quality based on physicochemical
            properties. Evaluated multiple classifiers including Random Forest,
            SVM, and Logistic Regression to identify key factors impacting wine
            quality.
          </p>

          <div className="project_item_cta">
            <a
              href="https://github.com/valusanikil/wine-quality-prediction.git"
              className="btn-git"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={PCS} alt=""></img>
          </div>
          <h3 className="project_title">Professional Consultancy</h3>
          <p>
            Designed and developed a full-stack application using Angular,
            Spring Boot and MySQL for efficient employee and certificate
            management. Implemented secure user authentication, dynamic RESTful
            APIs, and a responsive UI to enable seamless CRUD operations.
          </p>

          <div className="project_item_cta">
            <a
              href="https://github.com/valusanikil/professional-consultancy-services.git"
              className="btn-git"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn-report" target="_blank">
              Report
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={User} alt=""></img>
          </div>
          <h3 className="project_title">User Application</h3>
          <p>
            Developed a full-stack User Management System using Spring Boot and
            Angular, enabling user registration, search, and data retrieval.
            Implemented RESTful APIs, Spring Data JPA with MySQL integration,
            global exception handling, and a responsive Angular UI.
          </p>

          <div className="project_item_cta">
            <a
              href="https://github.com/valusanikil/user-application.git"
              className="btn-git"
              target="_blank"
            >
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
