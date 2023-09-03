// import createRouter from "./router.js";
import Nav from "./layout/Nav.js";
import Section from "./layout/Section.js";
import Footer from "./layout/Footer.js";
import Main from "./components/Main.js";
import "../css/style.css";

// import Detail from "./components/Detail.js";

const nav = document.querySelector("nav");
const container = document.querySelector("main");
const section = document.querySelector("section");
const footer = document.querySelector("footer");

nav.innerHTML = Nav();
section.innerHTML = Section();
footer.innerHTML = Footer();

let page = "tech";

// const pages = {
//   tech: () => {
//     page = "tech";
//     container.textContent = "";
//     container.appendChild(Main(page));
//   },
//   design: () => {
//     page = "design";
//     container.textContent = "";
//     container.appendChild(Main(page));
//   },
//   detail: () => (container.innerHTML = Detail()),
// };

container.appendChild(Main(page));
history.pushState({ data: "tech" }, null, "/");

document.querySelector(".nav__logo__wrap").addEventListener("click", () => {
  page = "tech";
  container.textContent = "";
  container.appendChild(Main(page));
  history.pushState({ data: "tech" }, null, "/tech");
});

document.querySelector("#designMenu").addEventListener("click", () => {
  page = "design";
  container.textContent = "";
  container.appendChild(Main(page));
  history.pushState({ data: "design" }, null, "/design");
});

document.querySelector("#techMenu").addEventListener("click", () => {
  page = "tech";
  container.textContent = "";
  container.appendChild(Main(page));
  history.pushState({ data: "tech" }, null, "/tech");
});

// const router = createRouter();

// router
//   .addRoute("", pages.tech)
//   .addRoute("#/tech", pages.tech)
//   .addRoute("#/design", pages.design)
//   .addRoute("#/article", pages.detail)
//   .start();
