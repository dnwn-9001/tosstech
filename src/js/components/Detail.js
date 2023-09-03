// import styled from "styled-components";
// const articlelWrap = styled.div``;

const Detail = (articleNo, dataUrl) => {
  const getData = async (articleNo) => {
    try {
      const json = await (await fetch(`../../json/${dataUrl}.json`)).json();
      renderDetail(json, articleNo);
    } catch (err) {
      console.log(err);
    }
  };
  const renderDetail = (data, articleNo) => {
    const article = data.find((item) => {
      return Number.parseInt(item.no) === Number.parseInt(articleNo);
    });

    const contents = (article) => {
      return `
                <article class="article__box">
                    <header class="article__header">
                        <img class="header__img" src="${article.thumbnail}"/>
                        <h1 class="header__title">${article.title}</h1>
                        <section class="header__section">
                            <img src="https://static.toss.im/assets/toss-tech/slash_juneseokbeomgeun.png" alt=""/>
                            <div class="profile__wrap">
                                <h3>이준석/송범근  iOS Developer</h3>
                                <p>${article.date}</p>
                            </div>
                        </section>
                    </header>
                    <div class="article__contents">
                        <h2 class="contents__introduction">서론</h2>
                    </div>
                    <div class="vote__box">
                        <h2 class="vote__title">재미있게 읽으셨나요?</h2>
                        <p class="vote__phrase">좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.</p>
                        <div class="vote__btns">
                            <div class="vote__btn">😍</div>
                            <div class="vote__btn">🤔</div>
                        </div>
                        <div class="share__btn">
                            <button>아티클 공유하기</button>
                        </div>
                    </div>
                </article>
        `;
    };

    const articleWrap = document.querySelector(".article__wrap");
    articleWrap.innerHTML = contents(article);
  };

  getData(articleNo);

  return `
  <div class="article__wrap"></div>
  `;
};

export default Detail;
