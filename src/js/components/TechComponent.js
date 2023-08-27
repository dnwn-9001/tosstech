// design component에 재활용 (이름 변경하기=>  ListComponent)
const TechContent = () => {
  document.addEventListener("DOMContentLoaded", () => {
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
                <a class="list__anchor">
                    <div class="list__box">
                        <img class="card__img" src="" alt="thumbnail" srcset="https://static.toss.im/assets/toss-tech/slash_juneseokbeomgun_thumb.png" />
                        <div class="card__contents">
                            <h1 class="card__title">레고처럼 조립하는 토스 앱</h1>
                            <p class="card__description">수많은 서비스를.....</p>
                            <p class="card__date">2023.8.22</p>
                        </div>
                    </div>
                </a>
            </ul>
        </div>
    </div>
    `;
};

export default TechContent;
