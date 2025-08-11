import React from "react";
import "../Experience/Experience.css";

const Experience = () => {
  const clinDCastLink = () => {
    window.location.href = "https://www.clindcast.com";
  };

  const LTIMindtreeLink = () => {
    window.location.href = "https://www.ltimindtree.com";
  };

  const TechMahindraLink = () => {
    window.location.href = "https://www.techmahindra.com";
  };
  return (
    <div id="experience" className="experience-section">
      <h1 className="work_heading">Work Experience</h1>
      <div className="container">
        <div className="experience-content">
          <div className="experience-item">
            <h6>
              <b onClick={clinDCastLink}>ClinDCast, Florida, USA</b>
            </h6>
            <h4>Software Engineer</h4>
            <h5>Dec 2024 - Present</h5>
            <ul>
              <li>
                Created 50+ HL7 templates in Java, integrating MSH, EVN, PID,
                and PV1 segments to optimize hospital workflows, reducing
                patient intake time by 25% while ensuring HIPAA compliance.
              </li>
              <li>
                Developed HL7 v2.5.1 messages (ADT, ORU, SIU) ensuring 99%
                message integrity across healthcare systems.
              </li>
              <li>
                Built FHIR based RESTful APIs in Java to enable real-time data
                exchange, improving EHR systems response time by 50%.
              </li>
            </ul>
            <p className="skills_experience">
              <b>Skills:</b> Java, HL7, FHIR, MirthConnect, Python, ETL
            </p>
          </div>

          <div className="experience-item">
            <h6>
              <b onClick={LTIMindtreeLink}>LTIMindtree, Hyderabad, India</b>
            </h6>
            <h4>Software Engineer</h4>
            <h5>Aug 2021 - Jul 2023</h5>
            <ul>
              <li>
                Worked on 20+ microservices using Spring WebFlux reactive
                programming for Philips ITAAP Integration, improving API
                response time by 45% and reducing memory consumption by 30% with
                non-blocking asynchronous processing.
              </li>
              <li>
                Performed JOLT transformations on over 20 payloads to streamline
                data mapping and enhance processing efficiency.{" "}
              </li>
              <li>
                Implemented OAuth 2.0 using Spring Security for secure API
                Gateway integration and leveraged JWT tokens to authorize
                communication with downstream microservices.
              </li>
              <li>
                Integrated Apache Kafka 3.5 for asynchronous messaging between
                15+ microservices, boosting real-time data processing efficiency
                by 30% and enhancing system scalability.
              </li>
              <li>
                Implemented Azure CI/CD pipelines to automate build, test, and
                deployment, improving release efficiency by 40% and ensuring
                reliable deployments.
              </li>
              <li>
                Created 20+ reusable components using Angular and React for
                responsive UI using HTML, CSS, and JavaScript.
              </li>
              <li>
                Containerized 5+ applications using Docker and deployed them on
                AWS services including EC2, S3, RDS, and IAM for scalable and
                efficient cloud deployments.
              </li>
            </ul>
            <p className="skills_experience">
              <b>Skills:</b> Java, Spring Boot, Spring Webflux, Spring Security,
              Microservices, SQL, JOLT
            </p>
          </div>

          <div className="experience-item">
            <h6>
              <b onClick={TechMahindraLink}>Tech Mahindra, Hyderabad, India</b>
            </h6>
            <h4>Associate Software Engineer</h4>
            <h5>Mar 2019 - Jul 2021</h5>
            <ul>
              <li>
                Developed 2 microservices using Spring Boot and implemented
                WebClient for efficient inter-service communication, improving
                data exchange by 30%.
              </li>
              <li>
                Utilized Java 8 features such as Lambdas, Streams, Functional
                Interfaces, Generics, Exception Handling, and Collections API to
                write clean, efficient, and scalable backend code.
              </li>
              <li>
                Achieved over 70% test coverage for RESTful APIs in multiple
                modules by developing unit tests using JUnit and Mockito.
              </li>
              <li>
                Optimized SQL queries and joins using JPA, Hibernate, and JDBC,
                improving data retrieval by 35% from MySQL database.
              </li>
              <li>
                Collaborated in Agile sprints, managing 20+ pull requests on
                GitHub and tracking tasks in Jira for timely feature delivery.
              </li>
            </ul>
            <p className="skills_experience">
              <b>Skills:</b> Java, Spring Boot, React, Microservices, AWS,
              CI/CD, JUnit, Angular
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
