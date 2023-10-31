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
footer.appendChild(Footer());

class ChangeContainer {
  constructor(data) {
    this.data = data;
  }

  appendContainer() {
    container.textContent = "";

    //초기렌더링
    if (this.data === null && !history.state) {
      history.pushState({ data: "tech" }, null, "/tech");
      this.data = "tech";
    }

    if (this.data === "article") {
      const { no, jsonUrl } = history.state;
      container.appendChild(Detail(no, jsonUrl));
      return;
    }

    container.appendChild(Main(this.data));
  }
}

const handleRoute = (data) => {
  const techContainer = new ChangeContainer(data);
  techContainer.appendContainer();
};

const updateHistoryAndHandleRoute = (data, path) => {
  history.pushState({ data: data }, null, path);
  handleRoute(history.state.data);
};

history.state == null ? handleRoute(null) : handleRoute(history.state.data);

document.querySelector(".nav__logo__wrap").addEventListener("click", () => {
  updateHistoryAndHandleRoute("tech", "/tech");
});

document.querySelector("#designMenu").addEventListener("click", () => {
  updateHistoryAndHandleRoute("design", "/design");
});

document.querySelector("#techMenu").addEventListener("click", () => {
  updateHistoryAndHandleRoute("tech", "/tech");
});

window.addEventListener("popstate", (e) => {
  const { data } = e.state;
  handleRoute(data);
});
