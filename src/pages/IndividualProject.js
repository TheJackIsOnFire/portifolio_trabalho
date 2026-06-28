import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/pages/projects.css";
import ReactTooltip from "react-tooltip";
import disableScroll from "disable-scroll";

export default function IndividualProject(project) {
  const { name, img, linkGitHub, linkPage, text, technologies } =
    project.project;

  const [popupState, setPopupState] = useState(false);

  const showPopup = () => {
    setPopupState(true);
    disableScroll.on();
  };

  const hidePopup = () => {
    setPopupState(false);
    disableScroll.off();
  };

  return (
    <div className="project-individual-thumbnail">
      <img className="project-img-individual" src={img} alt={`Projeto ${name}`} />
      <p>{name}</p>
      <div className="project-video-icons">
        <button
          type="button"
          data-tip="Saiba mais"
          onClick={showPopup}
          className="more-info-button project-btns"
        >
          <Icon icon="bi:question-lg" className="project-video-icons-i" />
        </button>

        <a
          data-tip="GitHub"
          href={linkGitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btns"
        >
          <Icon icon="uim:github-alt" className="project-video-icons-i" />
        </a>

        <a
          data-tip="Ver aplicação"
          href={linkPage}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btns"
        >
          <Icon icon="bi:eye" className="project-video-icons-i" />
        </a>
        <ReactTooltip
          place="right"
          className="custom-tooltip"
          delayHide={300}
          effect="solid"
        />
      </div>
      {popupState ? (
        <section className="popup">
          <div className="popup-text-container">
            <div className="popup-div-close">
              <button className="popup-Close" onClick={hidePopup}>
                <Icon icon="bi:x-circle" className="popupClose" />
              </button>
            </div>
            <div className="popup-informative-text">
              <p>{name}</p>
              <p>{technologies}</p>
              <p className="popup-info-project-text">{text}</p>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
