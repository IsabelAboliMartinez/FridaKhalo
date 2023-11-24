import './style.scss'
/*import typescriptLogo from './assets/typescript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.ts'*/

/*document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html  `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <a href="/pages/gallery/">gallery</a> <span> / </span>
    <a href="/pages/videos/">contact</a>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)*/

let scale = 0;
const cards = Array.from(document.getElementsByClassName("card"));
const inner = document.querySelector(".inner");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function slideAndScale() {
	cards.map((card, i) => {
		card.setAttribute("data-scale", i + scale);
		inner.style.transform = "translateX(" + scale * 8.5 + "em)";
	});
}

(function init() {
	slideAndScale();
	cards.map((card, i) => {
		card.textContent = i;
		card.addEventListener("click", () => {
			const id = card.getAttribute("data-scale");
			if (id !== 2) {
				scale -= id - 2;
				slideAndScale();
			}
		}, false);
	});
	
	nextBtn.addEventListener("click", () => {
		if (cards[cards.length -1].getAttribute("data-scale") != 2) {
			scale--;
		}
		slideAndScale();
	}, false);
	prevBtn.addEventListener("click", () => {
		if (cards[0].getAttribute("data-scale") < 2) {
			scale++;
		}
		slideAndScale();
	}, false);
})();
