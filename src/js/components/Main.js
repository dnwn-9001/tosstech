import Detail from "./Detail.js";
// to be lazy....
const anchorStyle = `
  .styled-anchor {
    color: rgb(132,141,75);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .styled-anchor:hover {
    color: rgb(0,0,238);
  }
`;
const style = document.createElement('style');
style.textContent = anchorStyle;
document.head.appendChild(style);
// 123
const StyledAnchor = ({ text }) => {
  const $styledAnchor = document.createElement('a');
  $styledAnchor.classList.add('styled-anchor');
  $styledAnchor.style.cssText = anchorStyle;
  $styledAnchor.textContent = text;

  return $styledAnchor;
}

const mainElement = document.querySelector("#main");
mainElement.appendChild(StyledAnchor({ text: "개발" }));

const MainContent = (page) => {
  const fetchDataAndRendering = async () => {
    let dataUrl = page === "tech" ? "techData" : "designData";

    try {
      const json = await (await fetch(`json/${dataUrl}.json`)).json();
      renderListBox(json, dataUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const renderList = () => {
    const $list = document.createElement("div");
    $list.className = "list";

    const $listTitle = document.createElement("h1");
    $listTitle.className = "list__title";

    page === "tech"
      ? ($listTitle.textContent = "개발")
      : ($listTitle.textContent = "디자인");

    const $divContainer = document.createElement("div");
    const $listUl = document.createElement("ul");
    $listUl.className = "list__ul";

    $divContainer.appendChild($listUl);
    $list.appendChild($listTitle);
    $list.appendChild($divContainer);

    return $list;
  };

  const renderListBox = (data, dataUrl) => {
    const listUl = document.querySelector(".list__ul");
    const listBox = data.map(
      (item) => /*template*/`
        <a class="list__anchor">
          <div class="list__box">
            <img class="card__img" data-no='${item.no}' src="${item.thumbnail}" alt="thumbnail"  />
            <div class="card__contents">
              <h1 class="card__title"  data-no='${item.no}'>${item.title}</h1>
              <p class="card__description" data-no='${item.no}'>${item.description}</p>
              <p class="card__date" data-no='${item.no}'>${item.date}</p>
            </div>
          </div>
        </a>
      `);

    listUl.innerHTML = listBox.join("");

    const listBoxes = document.querySelectorAll(".list__box");

    listBoxes.forEach((listBox) => {
      listBox.addEventListener("click", (e) => {
        const articleNo = e.target.dataset.no;
        const main = document.querySelector("#main");
        main.textContent = "";
        main.innerHTML = Detail(articleNo, dataUrl);
        history.pushState({ data: "article" }, null, `/article/${articleNo}`);
      });
    });

    const anchors = document.querySelectorAll(".list__anchor");
    const boxes = document.querySelectorAll(".list__box");

    anchors.forEach((anchor) => {
      anchor.style.textDecoration = "none";
    });

    boxes.forEach((box) => {
      box.style.marginBottom = "80px";
    });

    anchors.forEach((anchor) => {
      const thumbnail = anchor.querySelector(".card__img");
      const title = anchor.querySelector(".card__title");

      anchor.addEventListener("mouseover", () => {
        title.style.color = "rgb(0,0, 238)";
        thumbnail.style.transform = `translateY(-8px)`;
      });

      anchor.addEventListener("mouseout", () => {
        title.style.color = "rgb(51,61,75)";
        thumbnail.style.transform = `translateY(0px)`;
      });
    });
  };

  fetchDataAndRendering();

  return renderList();
};

export default MainContent;
