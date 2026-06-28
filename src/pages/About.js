import React, { Component } from "react";
import ReactGA from "react-ga";
import { Icon } from "@iconify/react";
import hardSkillsIcons from "../data/hardSkillsIcons";
import profile from "../assets/img/img_profile.jpg";

import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";

import "../styles/pages/about.css";

export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills">
            <div className="about-text-skills">
              <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá, </p>

                <p className="about-text-p about-text-p-2">
                  meu nome é <span>Alexsander Wallace</span>
                </p>

                <p className="about-text-p about-text-p-3">
                  Sou <span> bacharel em Administração e desenvolvedor Full Stack 
                  especializado em Front-end e desenvolvimento web.</span> {' '}
                  Estou buscando uma oportunidade onde possa aplicar
                  e expandir minhas habilidades, sempre com o objetivo de unir
                  meus conhecimentos em programação e administração para gerar
                  valor para a empresa.
                </p>

                <p className="about-text-p about-text-p-3">
                  Além de um forte compromisso com o aprimoramento contínuo,
                  especialmente em JavaScript, TypeScript e React, possuo
                  competências técnicas que abrangem{" "}
                  <span>
                    HTML5, CSS3, React, React Hooks, Styled Components, Redux, Python,
                    PostgreSQL, Node, Vite, Git, desenvolvimento web, programação
                    orientada a objetos (POO), Linux e lógica de programação.
                  </span>
                </p>

                <p className="about-text-p about-text-p-5">
                  Minha formação em Administração me deu uma sólida base em{" "}
                  <span>
                    gestão de projetos, marketing, tomada de decisão, liderança,
                    comunicação, contabilidade, finanças, visão estratégica e
                    capacidade analítica.{" "}
                  </span>
                  Meu objetivo é integrar essas habilidades com a tecnologia,
                  proporcionando uma abordagem completa para atender as
                  necessidades da empresa, elevando a produtividade e o
                  desempenho por meio de soluções eficientes e estratégicas.
                </p>
                <p className="about-text-p about-text-p-6">
                  <span>
                    Fique à vontade para entrar em contato e conversar comigo!
                  </span>
                </p>
              </section>
              <div className="about-image">
                <img className="about-img" src={profile} alt="profile" />
              </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                  {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                      <p className="about-icon-text">{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <SocialMedia />
        </section>
      </div>
    );
  }
}
