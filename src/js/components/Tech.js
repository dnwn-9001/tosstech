const TechContent = () => {
  const fetchDataAndRendering = async () => {
    try {
      const json = await (await fetch("src/json/data.json")).json();
      renderListBox(json);
    } catch (err) {
      console.log(err);
    }
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

  return `
    <div class="list">
        <h1 class="list__title">개발</h1>
        <div>
            <ul class="list__ul">
            </ul>
        </div>
    </div>
    `;
};

export default TechContent;
