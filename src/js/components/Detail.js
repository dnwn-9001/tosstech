const Detail = (articleNo, dataUrl) => {
  const articleWrapStyle = `
      width: 92%;
      height: 100%;
      max-width: 700px;
    `;
  const $articleWrap = document.createElement("div");
  $articleWrap.style.cssText = articleWrapStyle;

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

    const createElementAndStyle = (article) => {
      const $articleHeader = document.createElement("header");
      const headerStyle = `
          width: 100%;
        `;
      $articleHeader.style.cssText = headerStyle;

      const $headerImg = document.createElement("img");
      const headerImgStyle = `
          width: 100%;
          margin-top: 36px;
          border-radius: 12px;
        `;
      $headerImg.style.cssText = headerImgStyle;
      $headerImg.src = article.thumbnail;

      const $h1 = document.createElement("h1");
      const h1Style = `
          margin-top: 20px;
          font-size: 48px;
          line-height: 1.25;
          color: rgb(51, 61, 75);
          word-break: keep-all;
          overflow-wrap: break-word;
        `;
      $h1.style.cssText = h1Style;
      $h1.textContent = article.title;

      const $headerSection = document.createElement("section");
      const sectionStyle = `
          display: flex;
          width: 100%;
          margin-top: 20px;
        `;
      $headerSection.style.cssText = sectionStyle;

      const $img = document.createElement("img");
      const imgStyle = `
          width: 48px;
          height: 48px;
          border-radius: 156px;
          margin-right: 14px;
        `;
      $img.style.cssText = imgStyle;
      $img.src = article.photo;

      const $h3 = document.createElement("h3");
      const h3Style = `
          margin: 0;
          font-size: 17px;
          font-weight: 600;
          color: rgb(78, 89, 104);
          white-space: nowrap;      
        `;
      $h3.style.cssText = h3Style;
      $h3.textContent = article.name;

      const $p = document.createElement("p");
      const pStyle = `
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          color: rgb(139, 149, 161);
        `;

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

    $articleWrap.appendChild(createElementAndStyle(article));
  };

  getData(articleNo);

  return $articleWrap;
};

export default Detail;
