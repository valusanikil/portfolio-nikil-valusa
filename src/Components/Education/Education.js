import React from "react";
import "./Education.css";
import SRU from "../../assets/SRU.png";
import USF from "../../assets/USF.png";

const Education = () => {
  const sruLink = () => {
    window.location.href = "https://sru.edu.in";
  };

  const usfLink = () => {
    window.location.href = "https://www.usf.edu";
  };

  return (
    <div id="education" className="eduaction">
      <h1 className="education_heading">Education</h1>
      <div className="education_container">
        <div className="education">
          <div className="education_sru">
            <img src={SRU} alt="" onClick={sruLink}></img>
            <h3 onClick={sruLink}>SR University</h3>
            <h4>Bachelors in Computer Science</h4>
            <h4>
              Coursework: Java, C Programming, Data Structures, Computer
              Networks, Entrepreneurship, Project Management, Computer
              Organization, Operating Systems, Machine Learning, Web
              Development.
            </h4>
          </div>
          <div className="education_usf">
            <img src={USF} alt="" onClick={usfLink}></img>
            <h3 onClick={usfLink}>University of South Florida</h3>
            <h4>Masters in Business Analytics and Information Systems</h4>
            <h4>
              Coursework: Advance Database Management Systems, Advance System
              Analysis/Design, App Development for Analytics, Project
              Management, Cloud Solutions and Architecture, Data Mining, Data
              Science Programming.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
