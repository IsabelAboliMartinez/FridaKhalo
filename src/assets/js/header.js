import "../sass/header.scss";
import FridaKhaloLogo from "../icons/frida-khalo-logo.webp";
import SpainFlag from "../icons/spain-flag.svg";
import downArrow from "../icons/arrow-down.svg";

document.getElementById("header").innerHTML = `
    <nav>
      <ul>
        <a href="../../index.html"><li>INICIO</li></a>
        <a href="../../pages/gallery/index.html"><li>GALERÍA</li></a>
        <a href="../../pages/videos/index.html"><li>VIDEOS</li></a>
      </ul>
      <div><img src=${FridaKhaloLogo} alt="MDN"></div>
      <ul>
        <a href="../../pages/phrase/index.html"><li>FRASES</li></a>
        <a href="../../pages/contact/index.html"><li id="contact-size">CONTACTO</li></a>
        <ul id="language-dropdown">
          <div>
            <img src=${SpainFlag} alt="MDN">
            <li id="language-option">IDIOMA</li>
            <img id="downArrow" src=${downArrow} alt="MDN">
          </div>
          <ul>
              <div class="language">
                <li id="spanish">ESPAÑOL</li>
                <li id="english">INGLÉS</li>
              </div>
          </ul>
          </li>
        </a>
      </>
    </nav>
`;
