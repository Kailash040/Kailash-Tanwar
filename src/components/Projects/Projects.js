import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="acedigitalsolution"
              description="Developed a high-performance web application using Next.js
with a mobile-rst, responsive design approach, featuring GSAP
animations, Swiper sliders, and React Hook Form for ecient
form handling, optimized for fast load times and seamless user
experiences.
"
              demoLink="https://acedigitalsolution.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="airportairlinesterminal"
              description="Developed a high-performance web application using Next.js
with a mobile-rst, responsive design approach. Integrated an
admin portal for blog management with features to add, delete,
read, and update content, secured with admin user
authentication. Utilized dynamic data fetching, server-side
rendering for SEO, and streamlined content handling for
seamless user experiences.

"
              demoLink="https://www.airportairlinesterminal.com/"
            />
          </Col>
          {/*  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="googletranslator"
              description="Developed Google Translator using React.js, featuring real-time
translation, automatic language detection. With a responsive
design and seamless API integration, it ensures fast, accurate
translations across devices. The scalable, modular codebase
highlights expertise in React.js and creating ecient tools for
global communication.
"
              demoLink="https://googletranslator.in/"
            />
          </Col>
          {/*  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="superminds"
              description="Built a high-performance web application using Next.js with a
mobile-rst, responsive design. Integrated GSAP for smooth
animations, React Hook Form for ecient form handling, and
optimized for fast loading times and seamless user experiences
"
              demoLink="https://superminds.dev/"
            />
          </Col>
          {/*  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="18candleriggs"
              description="Developed a high-performance web application using Next.js
with a focus on clean UI/UX design for a visually appealing and
SKILLS
Languages - Javascript
(ES6)
Frontend Libraries &
Frameworks - Reactjs,
Nextjs, Bootstrap, Tailwind
Css, Redux Toolkit, GSAP
Tools & Techniques - Git,
Github, Jira, Slack
LANGUAGES
Hindi, English
EDUCATION
Pt. J.L.N College, Faridabad
— Bachelor of Computer
Application (BCA)
2019 - 2022
user-friendly experience. Integrated Swiper for responsive
sliders and React Hook Form for ecient form management.
Created a comprehensive admin p.
"
              demoLink="https://superminds.dev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
