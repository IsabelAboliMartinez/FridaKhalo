import '../sass/header.scss';
import FridaKhaloLogo from "../icons/logo-frida-khalo.svg";

document.getElementById('header').innerHTML = `
  <header>
    <nav>
      <ul>
        <a><li>INICIO</li></a>
        <a><li>GALERÍA</li></a>
        <a><li>VIDEOS</li></a>
        <li><img src=${FridaKhaloLogo} alt="MDN"/></li>
        <a><li>FRASES</li></a>
        <a><li>CONTACTO</li></a>
        <ul>
          <div>
            <span></span>
            <button>IDIOMA</button>
          </div>
          <div>
            <li>ESPAÑOL</li>
            <li>INGLÉS</li>
          </div>
        </ul>
      </ul>
    </nav>
  </header>
`;