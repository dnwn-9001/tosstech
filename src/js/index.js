import createRouter from "./router.js";
import NavContent from "./layout/Nav.js";
import SectionContent from "./layout/Section.js";
import FooterContent from "./layout/Footer.js";
import MainContent from "./components/Main.js";

const nav = document.querySelector("nav");
const container = document.querySelector("main");
const section = document.querySelector("section");
const footer = document.querySelector("footer");

nav.innerHTML = NavContent();
section.innerHTML = SectionContent();
footer.innerHTML = FooterContent();

let page;

const pages = {
  tech: () => {
    page = "tech";
    container.textContent = "";
    container.appendChild(MainContent(page));
  },
  design: () => {
    page = "design";
    container.textContent = "";
    container.appendChild(MainContent(page));
  },
};

const router = createRouter();

router
  .addRoute("", pages.tech)
  .addRoute("#/tech", pages.tech)
  .addRoute("#/design", pages.design)
  .start();
