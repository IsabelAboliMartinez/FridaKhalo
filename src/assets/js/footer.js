import '../sass/footer.scss';
import FridaKhaloLogoBlack from "../icons/frida-khalo-logo-black.webp";
import facebook from "../icons/Facebook.png";
import github from "../icons/git-hub.png";
import instagram from "../icons/Instagram.png";
import tiktok from "../icons/tiktok.png";

document.getElementById('footer').innerHTML = `
  <footer>
    <section>
      <ul>
        <li id="subtitle">Servicio</li>
        <li>Blog</li>
        <li>Contacto</li>
        <li>Inspiracion</li>
      </ul>
      <ul id="about-us">
        <li id="subtitle">Nosotros</li>
        <li>Soporte</li>
        <li>Empresa</li>
        <li>Afiliación</li>
      </ul>
      <ul>
        <img src=${FridaKhaloLogoBlack}>
        <ul>
          <a href="https://www.tiktok.com/es/" target="_blank"><img src=${tiktok}></a>
          <a href="https://www.facebook.com/?locale=es_ES" target="_blank"><img src=${facebook}></a>
          <a href="https://github.com/IsabelAboliMartinez/FridaKhalo" target="_blank"><img src=${github}></a>
          <a href="https://www.instagram.com" target="_blank"><img src=${instagram}></a>
        </ul>
      </ul>
    </section>
    <section id="copyright">
      <li>Aviso legal</li>
      <li>Condiciones de uso </li>
      <li>Política de privacidad</li>
      <li>Política de cookies</li>
    </section>
  </footer>
`;
