import Detail from "./Detail.js";

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
      (item) =>
        /*template*/
        `
              <div class="list__box" data-no='${item.no}'>
                  <img class="card__img" data-no='${item.no}' src="${item.thumbnail}" alt="thumbnail"  />
                  <div class="card__contents" data-no='${item.no}'>
                      <h1 class="card__title"  data-no='${item.no}'>${item.title}</h1>
                      <p class="card__description" data-no='${item.no}'>${item.description}</p>
                      <p class="card__date" data-no='${item.no}'>${item.date}</p>
                  </div>
              </div>
      `
    );

    listUl.innerHTML = listBox.join("");

    const listBoxes = document.querySelectorAll(".list__box");

    listBoxes.forEach((listBox) => {
      listBox.addEventListener("click", (e) => {
        const articleNo = e.target.dataset.no;
        const main = document.querySelector("#main");
        main.textContent = "";
        main.appendChild(Detail(articleNo, dataUrl));
        const state = {
          data: "article",
          no: articleNo,
          jsonUrl: dataUrl,
        };
        history.pushState(state, null, `/article/${articleNo}`);
      });
    });

    const boxes = document.querySelectorAll(".list__box");

    boxes.forEach((box) => {
      box.style.marginBottom = "80px";
    });

    boxes.forEach((box) => {
      const thumbnail = box.querySelector(".card__img");
      const title = box.querySelector(".card__title");

      box.addEventListener("mouseover", () => {
        title.style.color = "rgb(0,0, 238)";
        thumbnail.style.transform = `translateY(-8px)`;
      });

      box.addEventListener("mouseout", () => {
        title.style.color = "rgb(51,61,75)";
        thumbnail.style.transform = `translateY(0px)`;
      });
    });
  };

  fetchDataAndRendering();

  return renderList();
};

export default MainContent;
