const projects = [
  {
    name: "e-food",
    image: "./assets/img/efood.png",
    code: "https://github.com/TheJackIsOnFire/e-food.git",
    page: "https://e-food-ebon.vercel.app/",
    tech: "HTML, CSS, JavaScript e integracao com dados",
    text: "Projeto de delivery com fluxo de compra, organizacao de dados e publicacao online.",
  },
  {
    name: "Lista de contatos",
    image: "./assets/img/lista_contatos.png",
    code: "https://github.com/TheJackIsOnFire/Lista_de_contatos.git",
    page: "https://lista-de-contatos-wine-eight.vercel.app/",
    tech: "HTML, CSS e JavaScript",
    text: "Aplicacao para cadastro, visualizacao e organizacao de contatos.",
  },
  {
    name: "Calculadora de IMC",
    image: "./assets/img/calculadora_imc.png",
    code: "https://github.com/TheJackIsOnFire/imc_calculator.git",
    page: "https://imc-calculator-seven-eta.vercel.app/",
    tech: "HTML, CSS e JavaScript",
    text: "Calculadora para estimar o indice de massa corporal com interface simples e responsiva.",
  },
  {
    name: "Calculadora aritmetica",
    image: "./assets/img/calculadora_aritimetica.png",
    code: "https://github.com/TheJackIsOnFire/vue-calculadora-aritmetica.git",
    page: "https://vue-calculadora-aritmetica.vercel.app/",
    tech: "HTML, CSS e JavaScript",
    text: "Calculadora com operacoes basicas e foco em logica de programacao.",
  },
  {
    name: "Landing Page DBZ Sparking Zero",
    image: "./assets/img/lp_dbzsz.png",
    code: "https://github.com/TheJackIsOnFire/landing_page_dbsz.git",
    page: "https://landing-page-dbsz.vercel.app/",
    tech: "HTML, CSS e JavaScript",
    text: "Pagina promocional com contagem, animacoes e estrutura responsiva.",
  },
  {
    name: "Sorteador de numeros",
    image: "./assets/img/sorteador_numeros.png",
    code: "https://github.com/TheJackIsOnFire/sorteador_grunt.git",
    page: "https://sorteador-grunt-jack.vercel.app/",
    tech: "HTML, CSS e JavaScript",
    text: "Ferramenta para gerar sorteios de numeros de forma simples e interativa.",
  },
  {
    name: "Clone Disney Plus",
    image: "./assets/img/clone_disney_plus.png",
    code: "https://github.com/TheJackIsOnFire/clone_disneyplus.git",
    page: "https://clone-disney-plus-lovat-one.vercel.app/",
    tech: "HTML, CSS e JavaScript",
    text: "Recriacao de pagina com foco em layout, componentes visuais e responsividade.",
  },
  {
    name: "Loja de suplementos",
    image: "./assets/img/loja_suplementos.png",
    code: "https://github.com/TheJackIsOnFire/J-Fire-Supplements",
    page: "https://j-fire-supplements.vercel.app/",
    tech: "HTML e CSS",
    text: "Projeto inicial de loja virtual, com estrutura de pagina e apresentacao de produtos.",
  },
];

const projectsList = document.querySelector("#projects-list");
const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalTech = document.querySelector("#modal-tech");
const modalText = document.querySelector("#modal-text");
const modalCode = document.querySelector("#modal-code");
const modalPage = document.querySelector("#modal-page");
const modalClose = document.querySelector("#modal-close");
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");
const navLinks = document.querySelectorAll(".site-nav a");

function renderProjects() {
  projectsList.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card">
          <img src="${project.image}" alt="Imagem do projeto ${project.name}" />
          <div class="project-card-content">
            <h3>${project.name}</h3>
            <p>${project.tech}</p>
            <div class="project-actions">
              <button class="button button-secondary" type="button" data-project="${index}">
                Detalhes
              </button>
              <a class="button button-primary" href="${project.page}" target="_blank" rel="noopener noreferrer">
                Acessar
              </a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function openModal(project) {
  modalTitle.textContent = project.name;
  modalTech.textContent = project.tech;
  modalText.textContent = project.text;
  modalCode.href = project.code;
  modalPage.href = project.page;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function handleProjectClick(event) {
  const button = event.target.closest("[data-project]");

  if (!button) {
    return;
  }

  openModal(projects[Number(button.dataset.project)]);
}

function handleContactSubmit(event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject") || "Contato pelo portfolio";
  const message = formData.get("message");
  const body = [`Nome: ${name}`, `E-mail: ${email}`, "", message].join("\n");

  window.location.href = `mailto:alexsanderonfire@gmail.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  feedback.textContent = "Seu aplicativo de e-mail foi aberto com a mensagem preenchida.";
}

function updateActiveNav() {
  const scrollPosition = window.scrollY + 120;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (!section) {
      return;
    }

    const isCurrent =
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition;

    link.classList.toggle("active", isCurrent);
  });
}

renderProjects();
projectsList.addEventListener("click", handleProjectClick);
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
contactForm.addEventListener("submit", handleContactSubmit);
window.addEventListener("scroll", updateActiveNav);
updateActiveNav();
