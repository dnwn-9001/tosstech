import createRouter from "./router.js";
import NavContent from "./layout/Nav.js";
import SectionContent from "./layout/Section.js";
import FooterContent from "./layout/Footer.js";
import TechContent from "./components/Tech.js";
import DesignContent from "./components/Design.js";

const nav = document.querySelector("nav");
const container = document.querySelector("main");
const section = document.querySelector("section");
const footer = document.querySelector("footer");

nav.innerHTML = NavContent();
section.innerHTML = SectionContent();
footer.innerHTML = FooterContent();

const pages = {
  tech: () => (container.innerHTML = TechContent()),
  design: () => (container.innerHTML = DesignContent()),
};

const router = createRouter();

router
  .addRoute("", pages.tech)
  .addRoute("#/tech", pages.tech)
  .addRoute("#/design", pages.design)
  .start();
