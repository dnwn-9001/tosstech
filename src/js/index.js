import Nav from "./layout/Nav.js";
import Section from "./layout/Section.js";
import Footer from "./layout/Footer.js";
import Main from "./components/Main.js";
import Detail from "./components/Detail.js";
import "../css/style.css";

const nav = document.querySelector("nav");
const container = document.querySelector("main");
const section = document.querySelector("section");
const footer = document.querySelector("footer");

nav.appendChild(Nav());
section.appendChild(Section());
footer.innerHTML = Footer();

let page = "tech";

const handleRoute = (data) => {
  // 초기 렌더링
  if (data === null && !history.state) {
    history.pushState({ data: "tech" }, null, "/tech");
    container.textContent = "";
    container.appendChild(Main(page));
    return;
  }

  if (data === "tech") {
    page = "tech";
    container.textContent = "";
    container.appendChild(Main(page));
  } else if (data === "design") {
    page = "design";
    container.textContent = "";
    container.appendChild(Main(page));
  } else if (data === "article") {
    const { no, jsonUrl } = history.state;
    container.textContent = "";
    container.appendChild(Detail(no, jsonUrl));
  }
};

history.state == null ? handleRoute(null) : handleRoute(history.state.data);

document.querySelector(".nav__logo__wrap").addEventListener("click", () => {
  history.pushState({ data: "tech" }, null, "/tech");
  handleRoute(history.state.data);
});

document.querySelector("#designMenu").addEventListener("click", () => {
  history.pushState({ data: "design" }, null, "/design");
  handleRoute(history.state.data);
});

document.querySelector("#techMenu").addEventListener("click", () => {
  history.pushState({ data: "tech" }, null, "/tech");
  handleRoute(history.state.data);
});

window.addEventListener("popstate", (e) => {
  const { data } = e.state;
  handleRoute(data);
});
