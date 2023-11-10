import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  const aboutTexts = [
    "Bonjour! I'm Elmas Cetinkaya, a passionate web developer residing in France. Fluent in three languages, including English, I bring a diverse cultural perspective to my work. My journey into the world of web development began with a 9-month intensive course at OpenClassRooms, where I honed my skills and discovered my love for coding.",
    "Before venturing into the realm of technology, I was a textile designer, infusing my creations with colors and patterns inspired by life itself. My background in design has given me a keen eye for aesthetics and a strong foundation in tools like Adobe Photoshop and Illustrator, which I leverage in my web design and CSS projects.",
    "Though my professional experience is rooted in the projects I undertook during my course, my enthusiasm for coding knows no bounds. I find immense joy in crafting visually appealing and user-friendly websites, where my passion for painting and design seamlessly merges with the world of programming. I believe in the power of creativity to transform ideas into interactive experiences. Every project I undertake is an opportunity to combine my artistic sensibilities with my technical expertise, resulting in engaging digital solutions. I am constantly exploring new technologies and trends, driven by the desire to enhance my skills and create innovative web experiences.",
    "Let's embark on a creative journey together, where art meets technology, and innovation knows no bounds. Feel free to explore my portfolio, and don't hesitate to reach out—I'm always open to exciting collaborations and opportunities. À bientôt!",
  ];

  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">
            {aboutTexts.map((text, index) => (
              <ScrollAnimation animateIn="fadeInLeft" key={index}>
                <p>{text}</p>
                <br />
                <br />
              </ScrollAnimation>
            ))}
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
