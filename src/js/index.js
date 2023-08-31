import createRouter from "./router.js";
import Nav from "./layout/Nav.js";
import Section from "./layout/Section.js";
import Footer from "./layout/Footer.js";
import Main from "./components/Main.js";

const nav = document.querySelector("nav");
const container = document.querySelector("main");
const section = document.querySelector("section");
const footer = document.querySelector("footer");

nav.innerHTML = Nav();
section.innerHTML = Section();
footer.innerHTML = Footer();

let page;

const pages = {
  tech: () => {
    page = "tech";
    container.textContent = "";
    container.appendChild(Main(page));
  },
  design: () => {
    page = "design";
    container.textContent = "";
    container.appendChild(Main(page));
  },
};

const router = createRouter();

router
  .addRoute("", pages.tech)
  .addRoute("#/tech", pages.tech)
  .addRoute("#/design", pages.design)
  .start();
