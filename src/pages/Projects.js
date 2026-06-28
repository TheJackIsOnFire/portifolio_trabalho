import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Header from "../components/Header";
import ListProjects from "./ListProjects";

import "../styles/pages/projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="dark-background">
        <div className="header-social-media">
          <Header />
          <section className="header-social-media-section">
            <a
              href="https://www.linkedin.com/in/alexsander-wallace-on"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="akar-icons:linkedin-fill" />
            </a>
            <a
              href="https://github.com/TheJackIsOnFire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="bi:github" />
            </a>

            <a
              href="mailto:alexsanderonfire@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="ant-design:mail-outlined" />
            </a>
          </section>
        </div>

        <div className="project">
          <section className="project-intro">
            <p>Portfólio</p>
            <h1>Projetos desenvolvidos</h1>
            <span>
              Alguns trabalhos publicados com foco em front-end, React,
              JavaScript, TypeScript, Redux e interfaces responsivas.
            </span>
          </section>

          <section className="project-thumbnail-section">
            <ListProjects />
          </section>
        </div>
      </div>
    );
  }
}
