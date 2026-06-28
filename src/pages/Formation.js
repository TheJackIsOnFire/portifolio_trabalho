import React, { Component } from "react";
import ReactGA from "react-ga";
import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";

import "../styles/pages/formation.css";

export default class Formation extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="all-formation">
        <Header />
        <main className="formation">
          <section className="formation-hero">
            <p className="formation-label">Formação</p>
            <h1>Formação acadêmica e desenvolvimento profissional</h1>
            <p>
              Minha trajetória combina Administração, tecnologia e prática em
              projetos web. Essa base me ajuda a analisar problemas de negócio
              e transformá-los em interfaces funcionais, organizadas e
              orientadas ao usuário.
            </p>
          </section>

          <section className="formation-content" aria-label="Formação">
            <article className="formation-card">
              <span>Graduação</span>
              <h2>Bacharelado em Administração</h2>
              <p>Universidade de Uberaba - UNIUBE</p>
              <p>
                Formação com foco em gestão de projetos, estratégia,
                comunicação, finanças, marketing e tomada de decisão.
              </p>
            </article>

            <article className="formation-card">
              <span>Desenvolvimento Web</span>
              <h2>Desenvolvimento Full Stack Python</h2>
              <p>EBAC - Escola Britânica de Artes Criativas e Tecnologia</p>
              <p>
                Estudos voltados para HTML, CSS, JavaScript, TypeScript,
                React, Redux, Python, banco de dados e boas práticas de
                desenvolvimento.
              </p>
            </article>

            <article className="formation-card">
              <span>Aprimoramento</span>
              <h2>Front-end e interfaces responsivas</h2>
              <p>Projetos práticos publicados</p>
              <p>
                Construção de aplicações com React, Vite, Sass, Bootstrap,
                consumo de APIs, gerenciamento de estado e deploy em
                plataformas web.
              </p>
            </article>
          </section>

          <section className="formation-focus">
            <h2>Competências desenvolvidas</h2>
            <ul>
              <li>Planejamento, organização e visão estratégica.</li>
              <li>Desenvolvimento de páginas responsivas e acessíveis.</li>
              <li>Integração entre lógica de programação e experiência do usuário.</li>
              <li>Versionamento com Git e publicação de projetos online.</li>
            </ul>
          </section>
        </main>
        <SocialMedia />
      </div>
    );
  }
}
