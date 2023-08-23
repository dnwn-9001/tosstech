import createRouter from "./router.js";
import TechContent from "./components/TechComponent.js";
import DesignContent from "./components/DesignComponent.js";

const container = document.querySelector("main");

const pages = {
  tech: () => (container.innerHTML = TechContent()),
  design: () => (container.innerHTML = DesignContent()),
};

const router = createRouter();

router
  .addRoute("#/", pages.tech)
  .addRoute("#/tech", pages.tech)
  .addRoute("#/design", pages.design)
  .start();
