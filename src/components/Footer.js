import React from "react";
import { Icon } from "@iconify/react";
import "../styles/components/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Icon icon="ic:baseline-email" />
        <p className="footer-text">alexsanderonfire@gmail.com</p>
      </footer>
    );
  }
}

export default Footer;
