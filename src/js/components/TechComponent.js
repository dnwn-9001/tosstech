// design component에 재활용 (이름 변경하기=>  ListComponent)
const TechContent = () => {
  const fetchDataAndRendering = () => {
    fetch("src/json/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const listData = data;
        renderListBox(listData);
      })
      .catch((err) => {
        console.log(err);
      });
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

    listUl.innerHTML = listBox;
  };

  document.addEventListener("DOMContentLoaded", () => {
    fetchDataAndRendering();

    const anchor = document.querySelector(".list__anchor");
    const thumbnail = document.querySelector(".card__img");
    const title = document.querySelector(".card__title");

    anchor.addEventListener("mouseover", () => {
      title.style.color = "rgb(0,0, 238)";
      thumbnail.style.transform = `translateY(-8px)`;
    });

    anchor.addEventListener("mouseout", () => {
      title.style.color = "rgb(51,61,75)";
      thumbnail.style.transform = `translateY(0px)`;
    });
  });

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
