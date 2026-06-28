import React, { Component } from "react";
import ReactGA from "react-ga";
import { Icon } from "@iconify/react";
import Header from "../components/Header";

import "../styles/pages/contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    submitted: false,
  };

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = this.state;
    const emailSubject = subject || "Contato pelo portfólio";
    const emailBody = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:alexsanderonfire@gmail.com?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(emailBody)}`;

    this.setState({ submitted: true });
  };

  render() {
    const { name, email, subject, message, submitted } = this.state;

    return (
      <div className="all-contact">
        <Header />
        <main className="contact">
          <section className="contact-info">
            <p className="contact-label">Contato</p>
            <h1>Vamos conversar?</h1>
            <p>
              Use o formulário para enviar uma mensagem ou acesse meus canais
              profissionais. O formulário abre o aplicativo de e-mail com os
              dados preenchidos.
            </p>

            <div className="contact-links" aria-label="Canais de contato">
              <a href="mailto:alexsanderonfire@gmail.com">
                <Icon icon="ant-design:mail-outlined" />
                alexsanderonfire@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/alexsander-wallace-on"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:linkedin-fill" />
                LinkedIn
              </a>
              <a
                href="https://github.com/TheJackIsOnFire"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="bi:github" />
                GitHub
              </a>
            </div>
          </section>

          <section className="contact-form-section" aria-label="Formulário de contato">
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <label htmlFor="name">
                Nome
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Seu nome"
                  required
                />
              </label>

              <label htmlFor="email">
                E-mail
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </label>

              <label htmlFor="subject">
                Assunto
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={this.handleChange}
                  placeholder="Motivo do contato"
                />
              </label>

              <label htmlFor="message">
                Mensagem
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  placeholder="Escreva sua mensagem"
                  rows="6"
                  required
                />
              </label>

              <button type="submit">Enviar mensagem</button>

              {submitted ? (
                <p className="contact-feedback">
                  Seu aplicativo de e-mail foi aberto com a mensagem preenchida.
                </p>
              ) : null}
            </form>
          </section>
        </main>
      </div>
    );
  }
}
