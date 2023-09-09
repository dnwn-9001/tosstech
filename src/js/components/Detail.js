const Detail = (articleNo, dataUrl) => {
  const articleWrapStyle = `
      width: 92%;
      height: 100%;
      max-width: 700px;
    `;
  const $articleWrap = document.createElement("div");
  $articleWrap.style.cssText = articleWrapStyle;

  const $articleHeader = document.createElement("header");
  const headerStyle = `
      width: 100%;
    `;

  const $headerImg = document.createElement("img");
  const headerImgStyle = `
      width: 100%;
      margin-top: 36px;
      border-radius: 12px;
    `;

  const $h1 = document.createElement("h1");
  const h1Style = `
      margin-top: 20px;
      font-size: 48px;
      line-height: 1.25;
      color: rgb(51, 61, 75);
      word-break: keep-all;
      overflow-wrap: break-word;
    `;

  const $headerSection = document.createElement("section");
  const sectionStyle = `
      display: flex;
      width: 100%;
      margin-top: 20px;
    `;

  const $img = document.createElement("img");
  const imgStyle = `
        width: 48px;
        height: 48px;
        border-radius: 156px;
        margin-right: 14px;
      `;

  const $h3 = document.createElement("h3");
  const h3Style = `
      margin: 0;
      font-size: 17px;
      font-weight: 600;
      color: rgb(78, 89, 104);
      white-space: nowrap;      
    `;

  const $p = document.createElement("p");
  const pStyle = `
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
      color: rgb(139, 149, 161);
    `;

  const $contentsDiv = document.createElement("div");
  const contentsDivStyle = `
    margin-top: 54px;
  `;

  const $voteBtnLike = document.createElement("div");
  const $voteBtnDislike = document.createElement("div");

  const voteBtnStyle = `
    display: block;
    font-size: 40px;
    cursor: pointer;
    margin: 0px 12px;
    transition: all 0.15s ease-in-out 0s;
  `;

  const $voteBtnWrapDiv = document.createElement("div");
  const voteBtnWrapDivStyle = `
    display: flex;
    margin-top: 16px;
  `;

  const $shareBtnWrap = document.createElement("div");
  const shareBtnWrapStyle = `
    margin-top: 16px;
    display: flex;
    justify-content: center;
  `;

  const $shareBtn = document.createElement("button");
  const shareBtnStyle = `
    width: 149px;
    height: 40px;
    background-color: rgb(232, 243, 255);
    border-radius: 7px;
    border: none;
    cursor: pointer;
    color: rgb(27, 100, 218);
    font-size: 15px;
    font-weight: 600;
    margin: 0 12px;
    padding: 11px 16px;
    text-align: center;
    transition: all 0.15s ease-in-out;
  `;

  const $votePhrase = document.createElement("p");
  const votePhraseStyle = `
    font-size: 16px;
    line-height: 1.5;
    color: rgb(107, 118, 132);
    margin-bottom: 4px;
    margin-top: 0px !important;
  `;

  const $h2 = document.createElement("h2");
  const h2Style = `
    font-size: 24px;
    margin-bottom: 16px;
    color: rgb(78, 89, 104);
  `;

  const $voteBox = document.createElement("div");
  const voteBoxStyle = `
    margin-top: 54px;
    background-color: rgb(249, 250, 251);
    width: 100%;
    height: auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px;
  `;

  const getData = async (articleNo) => {
    try {
      const json = await (await fetch(`json/${dataUrl}.json`)).json();
      renderDetail(json, articleNo);
    } catch (err) {
      console.log(err);
    }
  };

  const renderDetail = (data, articleNo) => {
    const article = data.find((item) => {
      return Number.parseInt(item.no) === Number.parseInt(articleNo);
    });

    const createArticleHeader = (article) => {
      $articleHeader.style.cssText = headerStyle;

      $headerImg.style.cssText = headerImgStyle;
      $headerImg.src = article.thumbnail;

      $h1.style.cssText = h1Style;
      $h1.textContent = article.title;

      $headerSection.style.cssText = sectionStyle;

      $img.style.cssText = imgStyle;
      $img.src = article.photo;

      $h3.style.cssText = h3Style;
      $h3.textContent = article.name;

      $p.style.cssText = pStyle;
      $p.textContent = article.date;

      const $profileWrapDiv = document.createElement("div");
      $profileWrapDiv.appendChild($h3);
      $profileWrapDiv.appendChild($p);

      $headerSection.appendChild($img);
      $headerSection.appendChild($profileWrapDiv);

      $articleHeader.appendChild($headerImg);
      $articleHeader.appendChild($h1);
      $articleHeader.appendChild($headerSection);

      return $articleHeader;
    };

    const createArticleContents = (article) => {
      $contentsDiv.style.cssText = contentsDivStyle;
      $contentsDiv.innerHTML = article.contents;
      return $contentsDiv;
    };

    const createVoteBox = () => {
      $voteBtnLike.style.cssText = voteBtnStyle;
      $voteBtnDislike.style.cssText = voteBtnStyle;
      $voteBtnLike.textContent = "😍";
      $voteBtnLike.className = "vote__btn";
      $voteBtnDislike.textContent = "🤔";
      $voteBtnDislike.className = "vote__btn";

      $voteBtnWrapDiv.style.cssText = voteBtnWrapDivStyle;
      $voteBtnWrapDiv.appendChild($voteBtnLike);
      $voteBtnWrapDiv.appendChild($voteBtnDislike);

      $shareBtnWrap.style.cssText = shareBtnWrapStyle;

      $shareBtn.style.cssText = shareBtnStyle;
      $shareBtn.className = "share__btn";
      $shareBtn.textContent = "아티클 공유하기";
      $shareBtnWrap.appendChild($shareBtn);

      $votePhrase.style.cssText = votePhraseStyle;
      $votePhrase.textContent =
        "좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.";

      $h2.style.cssText = h2Style;
      $h2.textContent = "재미있게 읽으셨나요?";

      $voteBox.style.cssText = voteBoxStyle;

      $voteBox.appendChild($h2);
      $voteBox.appendChild($votePhrase);
      $voteBox.appendChild($voteBtnWrapDiv);
      $voteBox.appendChild($shareBtnWrap);

      $voteBox.addEventListener("mouseover", (e) => {
        const target = e.target;
        if (target.className === "vote__btn") {
          target.style.transform = `scale(1.2)`;
        } else if (target.className === "share__btn") {
          target.style.backgroundColor = `rgba(27, 100, 218, 0.2)`;
        }
      });

      $voteBox.addEventListener("mouseout", (e) => {
        const target = e.target;
        if (target.className === "vote__btn") {
          target.style.transform = `scale(1)`;
        } else if (target.className === "share__btn") {
          target.style.backgroundColor = `rgb(232, 243, 255)`;
        }
      });

      return $voteBox;
    };

    $articleWrap.appendChild(createArticleHeader(article));
    $articleWrap.appendChild(createArticleContents(article));
    $articleWrap.appendChild(createVoteBox());
  };

  getData(articleNo);

  return $articleWrap;
};

export default Detail;
