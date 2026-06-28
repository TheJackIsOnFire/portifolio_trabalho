import React from "react";
import { Icon } from "@iconify/react";

import "../styles/components/socialMedia.css";

export default function SocialMedia() {
  return (
    <section className="social-media">
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
      {/* <a
        href="https://www.instagram.com/the.jack.is.on.fire"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="bi:instagram" />
      </a> */}
      <a
        href="mailto:alexsanderonfire@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mail-icon"
      >
        <Icon icon="ant-design:mail-outlined" />
      </a>
    </section>
  );
}
