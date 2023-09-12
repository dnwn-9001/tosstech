const $contentsWrapDiv = document.createElement("div");
const contentsWrapDivStyle = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const $titleH3 = document.createElement("h3");
const titleH3Style = `
  color: #ffffff;
  margin: 0;
`;

const $phrase = document.createElement("p");
const phraseStyle = `
  color: #e5e8eb;
  margin: 8px 0 0 0;
`;

const $btn = document.createElement("button");
const btnStyle = `
  width: 150px;
  height: 40px;
  margin-top: 24px;
  background-color: rgb(49, 130, 246);
  border: none;
  border-radius: 7px;
  color: rgb(249, 250, 251);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 11px 13px;
  line-height: 18px;
`;

const $img = document.createElement("img");
const imgStyle = `
  width: 186px;
  height: 186px;
`;

const $sectionWrapDiv = document.createElement("div");
const sectionWrapDivStyle = `
  width: 100%;
  height: 186px;
  background-color: rgba(2, 9, 19, 0.91);
  display: flex;
  padding: 60px 24px;
  justify-content: center;
`;

const SectionContent = () =>
  /*template */
  {
    return `
        <img class="section__img" src="https://static.toss.im/3d/website_code_blue_alpha.png" alt="thumbnail" srcset="" />
        <div class="section__contents">
          <h3 class="section__title">토스팀이 만드는 수많은 혁신의 순간들.</h3>
          <p class="section__phrase">당신과 함께 만들고 싶습니다. <br> 지금, 토스팀에 합류하세요.</p>
          <button class="section__btn">채용 중인 공고 보기</button>
        </div>
    `;
  };

const Section = () => {
  const createSectionContents = () => {
    $contentsWrapDiv.style.cssText = contentsWrapDivStyle;

    $titleH3.style.cssText = titleH3Style;
    $titleH3.textContent = "토스팀이 만드는 수많은 혁신의 순간들.";

    $phrase.style.cssText = phraseStyle;
    $phrase.innerHTML =
      "당신과 함께 만들고 싶습니다.<br> 지금, 토스팀에 합류하세요.";

    $btn.style.cssText = btnStyle;
    $btn.textContent = "채용 중인 공고 보기";

    $contentsWrapDiv.appendChild($titleH3);
    $contentsWrapDiv.appendChild($phrase);
    $contentsWrapDiv.appendChild($btn);

    $btn.addEventListener("mouseover", () => {
      $btn.style.backgroundColor = "rgb(27, 100, 218)";
    });

    $btn.addEventListener("mouseout", () => {
      $btn.style.backgroundColor = "rgb(49, 130, 246)";
    });

    return $contentsWrapDiv;
  };

  $img.style.cssText = imgStyle;
  $img.src = "https://static.toss.im/3d/website_code_blue_alpha.png";

  $sectionWrapDiv.style.cssText = sectionWrapDivStyle;
  $sectionWrapDiv.appendChild($img);
  $sectionWrapDiv.appendChild(createSectionContents());

  return $sectionWrapDiv;
};

export default Section;
