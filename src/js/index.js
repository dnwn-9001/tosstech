import createRouter from "./router.js";
import NavContent from "./layout/NavComponent.js";
import SectionContent from "./layout/SectionComponent.js";
import FooterContent from "./layout/FooterComponent.js";
import TechContent from "./components/TechComponent.js";
import DesignContent from "./components/DesignComponent.js";

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
