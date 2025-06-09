import React, { useEffect, useState } from "react";
import "./Hero.css";
import Profile_img from "../../assets/Profile.jpeg";
import Github_img from "../../assets/Github_Img.png";
import LinkedIn_img from "../../assets/LinkedIn_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Engineer",
    "Full-Stack Developer",
    "Java Developer",
    "Software Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(50);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50);
    }
  };

  const resumeLink = () => {
    window.location.href =
      "https://drive.google.com/file/d/1FozVZGIbpriRLV01tDBFDMewiuDB_2XO/view?usp=drive_link";
  };

  const mediumLink = () => {
    window.location.href = "https://medium.com/@valusa.nikhil13";
  };

  const hackerrankLink = () => {
    window.location.href = "https://www.hackerrank.com/profile/valusa_nikhil13";
  };

  const leetcodeLink = () => {
    window.location.href = "https://leetcode.com/u/NikilValusa/";
  };

  const linkedInLink = () => {
    window.location.href = "https://www.linkedin.com/in/nikil-valusa";
  };

  const gitLink = () => {
    window.location.href = "https://github.com/valusanikil";
  };

  return (
    <div id="home" className="hero">
      <img src={Profile_img} alt=""></img>
      <h1>I'm Nikil Valusa</h1>

      <h2 className="wrap">
        <span className="passionate-text">A passionate{" - "}</span>
        <span className="typed-text">
          <span>{text}</span>
        </span>
      </h2>

      <p>
        Experienced in building scalable applications with 5+ years of hands-on
        expertise in Java, Spring (MVC, Boot, WebFlux, Security), Microservices,
        SQL, JavaScript, Angular, React, and cloud platforms like AWS, Docker,
        and Kubernetes.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={resumeLink}>
          My Resume
        </div>
        <div className="hero-hackerrank" onClick={hackerrankLink}>
          Hacker Rank
        </div>
        <div className="hero-medium" onClick={mediumLink}>
          Medium
        </div>
        <div className="hero-leetcode" onClick={leetcodeLink}>
          Leetcode
        </div>
      </div>
      <div className="social-container">
        <img
          src={LinkedIn_img}
          alt="My Linkedin Profile"
          title="LinkedIn"
          className="icon"
          onClick={linkedInLink}
        />
        <img
          src={Github_img}
          alt="My Github Profile"
          title="Github"
          className="icon"
          onClick={gitLink}
        />
      </div>
    </div>
  );
};

export default Hero;
