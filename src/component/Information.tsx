import React from "react";
import "../style/Information.css"; // Archivo CSS para los estilos
import { FaDocker, FaNodeJs, FaLinux, FaJava, FaGithub, FaLinkedin } from "react-icons/fa"; // Ejemplo de íconos
import { SiTypescript, SiPostgresql, SiNestjs, SiGnubash} from "react-icons/si"; // Íconos adicionales


const Information: React.FC = () => {
  return (
    <div className="information-container">
      <div className="section who-am-i">
        <h2>About Me</h2>
        <p>
          Hello, My name is Jean I am a Junior Backend Developer & SysAdmin,
          Currently in 4th semester of computer engineering, I like linux and
          servers.
        </p>
      </div>
      <div className="section technologies">
        <h2>Technologies</h2>
        <ul className="technologies-list">
          <li>
            <div className="tech-item">
              <FaDocker className="tech-icon" />
              <span>Docker</span>
            </div>
          </li>
          <li>
            <div className="tech-item">
              <SiTypescript className="tech-icon" />
              <span>TypeScript</span>
            </div>
          </li>
          <li>
            <div className="tech-item">
              <FaNodeJs className="tech-icon" />
              <span>Node.js</span>
            </div>
          </li>
          <li>
            <div className="tech-item">
              <SiPostgresql className="tech-icon" />
              <span>PostgreSQL</span>
            </div>
          </li>
          <li>
            <div className="tech-item">
              <FaLinux className="tech-icon" />
              <span>Linux</span>
            </div>
          </li>
          <li>
            <div className="tech-item">
              <SiNestjs className="tech-icon" />
              <span>NestJs</span>
            </div>
          </li>
          <li>
            <div className="tech-item">
              <FaJava className="tech-icon" />
              <span>Java</span>
            </div>
          </li>
          <li>
            <div className="tech-item">
              <SiGnubash className="tech-icon" />
              <span>Bash</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="section projects">
      <h2>Contact Me</h2>
        <div className="contact-links">
          <a
            href="https://github.com/Scripty77/Apispring"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" /> GitHub
          </a>  
          <a
            href="https://www.linkedin.com/in/jean-carlos-contreras-485485279"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;

