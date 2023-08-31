const MainContent = (page) => {
  const fetchDataAndRendering = async () => {
    let dataUrl = page === "tech" ? "techData" : "designData";

    try {
      const json = await (await fetch(`src/json/${dataUrl}.json`)).json();
      renderListBox(json);
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

  const renderListBox = (data) => {
    const listUl = document.querySelector(".list__ul");
    const listBox = data.map(
      (item) =>
        `
        <a class="list__anchor">
              <div class="list__box">
                  <img class="card__img" src="${item.thumbnail}" alt="thumbnail"  />
                  <div class="card__contents">
                      <h1 class="card__title">${item.title}</h1>
                      <p class="card__description">${item.description}</p>
                      <p class="card__date">${item.date}</p>
                  </div>
              </div>
        </a>
      `
    );

    listUl.innerHTML = listBox.join("");

    const anchors = document.querySelectorAll(".list__anchor");
    const boxes = document.querySelectorAll(".list__box");

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
