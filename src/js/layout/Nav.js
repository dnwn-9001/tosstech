//로고
const $logoImg = document.createElement("img");
const logoImgStyle = `
    width: 21.5px;
    height: 20px;
`;

const $logoWrapDiv = document.createElement("div");
const logoWrapDivStyle = `
    display: flex;
    cursor: pointer;
`;

// 메뉴
const $wrapUl = document.createElement("ul");
const wrapUlStyle = `
    display: flex;
    align-items: center;
    list-style: none;
`;
const $recruitBtn = document.createElement("button");
const recruitBtnStyle = `
    background-color: rgb(49, 130, 246);
    border: none;
    border-radius: 6px;
    width: 100px;
    height: 32px;
    color: rgb(249, 250, 251);
    cursor: pointer;
    font-size: 12px;
    padding: 7px 12px;
    box-sizing: border-box;
`;
const $recruitBtnWrap = document.createElement("li");
const recruitBtnWrapStyle = `
    cursor: pointer;
    padding: 0 8px;
`;
const $designLi = document.createElement("li");
const $techLi = document.createElement("li");
const liStyle = `
    cursor: pointer;
    padding: 0 8px;
    font-size: 15px;
    font-weight: 300;
    padding: 12px 10px;
    text-decoration: none;
    text-align: left;
    background-color: transparent;
    line-height: 20px;
    border-radius: 8px;
    border: 0;
    color: rgb(78, 89, 104);
`;

//Nav 전체
const $navDiv = document.createElement("div");
const navDivStyle = `
    width: 92%;
    height: 100%;
    max-width: 1140px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Nav = () => {
  const createSvg = () =>
    /*template */
    {
      return `
        <!-- <img class="nav__logo" src="https://static.toss.im/tds/favicon/favicon.ico" alt="logo" srcset="" /> -->
        <svg enable-background="new 0 0 1094.5 200" viewBox="0 0 1094.5 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g fill="#202632">
                <path d="m265.5 126.4v-43.6h-22.7v-23h22.7v-27.6l27.8-7.4v35h34.6v23h-34.6v43.2c0 11.5 6.2 18.2 16.9 18.2 6.1 0 10.5-1.2 15.2-4.6l9.9 20.7c-7.3 5.7-17.1 8.4-27.6 8.4-27-.1-42.2-15.3-42.2-42.3z"></path>
                <path d="m336.6 112.8c0-31.7 24.6-55.5 57.8-55.5s57.8 23.8 57.8 55.5c0 31.8-24.6 55.5-57.8 55.5s-57.8-23.8-57.8-55.5zm57.8 30.7c17 0 29.7-13.1 29.7-30.7s-12.7-30.7-29.7-30.7-29.6 13.1-29.6 30.7 12.7 30.7 29.6 30.7z"></path>
                <path d="m459.4 140.6 27.6-7.4c1.8 8.6 9.7 13.4 22.6 13.4 10.5 0 18.2-4.8 18.2-11.1 0-4.6-5.4-8-13.6-9.7l-20.6-4.3c-19.5-4.1-31.5-14.6-31.5-29.5 0-20.8 18-34.7 44.5-34.7 23.6 0 41.6 10.8 46.3 28.1l-26 7c-1.7-8.3-9.8-13.8-21.2-13.8-9.5 0-15.9 4.5-15.9 10.8 0 4.9 4.3 7.4 11.5 9.1l24.1 5.5c18.4 4.1 29.6 14.5 29.6 29.4 0 21.8-18.2 34.9-47.8 34.9-26 0-44-10.5-47.8-27.7z"></path>
                <path d="m561.7 140.6 27.6-7.4c1.8 8.6 9.7 13.4 22.6 13.4 10.5 0 18.2-4.8 18.2-11.1 0-4.6-5.4-8-13.6-9.7l-20.6-4.3c-19.5-4.1-31.5-14.6-31.5-29.5 0-20.8 18-34.7 44.5-34.7 23.6 0 41.6 10.8 46.3 28.1l-26 7c-1.7-8.3-9.8-13.8-21.2-13.8-9.5 0-15.9 4.5-15.9 10.8 0 4.9 4.3 7.4 11.5 9.1l24.1 5.5c18.4 4.1 29.6 14.5 29.6 29.4 0 21.8-18.2 34.9-47.8 34.9-26 0-44-10.5-47.8-27.7z"></path>
                <path d="m762.6 148.4c-5 3-8.9 4-15.9 4-12.3 0-19.9-8.9-19.9-23.3v-54h37.4v-15.3h-37.4v-33.2l-17.5 4.6v28.6h-24.3v15.3h24.3v54c0 25 13.8 39.4 37.8 39.4 9.2 0 16.4-1.9 22.8-5.9l.4-.2-7.3-14.2z"></path>
                <path d="m822.4 56.5c-14 0-26.9 5.7-36.4 16.2-9.5 10.4-14.8 24.7-14.8 40.1 0 31.9 23.3 56 54.3 56 20.5 0 37.5-9.6 45.3-25.6l.3-.5-16.6-4.4-.2.3c-4.9 9.2-15.6 14.5-29.2 14.5-19.5 0-33.9-14-36.1-34.9h84.9v-9.6c.1-30.2-21.6-52.1-51.5-52.1zm0 16.3c17.9 0 30.4 11.3 33.5 30.3h-66.3c3.2-18.4 16-30.3 32.8-30.3z"></path>
                <path d="m939.5 74.9c13.4 0 24.1 7.1 30 20.1l.2.4 17.8-5-.2-.5c-7.7-19.7-25.5-31.4-47.6-31.4-15.4 0-29.4 5.5-39.6 15.5-10.1 9.9-15.6 23.7-15.6 38.7 0 15.1 5.4 28.9 15.2 38.8 9.9 10 23.5 15.5 38.5 15.5 22.9 0 37.7-9.3 48-30.1l.3-.5-17.1-4.7-.2.4c-4.9 11.4-16.6 18.4-30.6 18.4-20.8 0-36.4-16.3-36.4-37.9.1-21.5 16.1-37.7 37.3-37.7z"></path>
                <path d="m1052.9 58.6c-14.8 0-28.3 7.9-35.2 20.2v-57.8h-17.1v144.4h17.1v-57.9c0-19.1 12.9-32.9 30.7-32.9 17.6 0 29 13.8 29 35.1v55.7h17.1v-61.8c.1-27.3-16.3-45-41.6-45z"></path>
            </g>
        </svg> 
        `;
    };

  const createLogo = () => {
    $logoImg.style.cssText = logoImgStyle;
    $logoImg.src = "https://static.toss.im/tds/favicon/favicon.ico";

    $logoWrapDiv.style.cssText = logoWrapDivStyle;
    $logoWrapDiv.className = "nav__logo__wrap";

    $logoWrapDiv.innerHTML = createSvg();
    $logoWrapDiv.prepend($logoImg);

    return $logoWrapDiv;
  };

  const createUl = () => {
    $recruitBtn.style.cssText = recruitBtnStyle;
    $recruitBtn.className = "recruit__button";
    $recruitBtn.textContent = "채용 바로가기";
    $recruitBtnWrap.style.cssText = recruitBtnWrapStyle;
    $recruitBtnWrap.appendChild($recruitBtn);

    $designLi.style.cssText = liStyle;
    $designLi.textContent = "디자인";
    $designLi.id = "designMenu";
    $designLi.className = "nav__item";
    $techLi.style.cssText = liStyle;
    $techLi.textContent = "개발";
    $techLi.id = "techMenu";
    $techLi.className = "nav__item";

    $wrapUl.style.cssText = wrapUlStyle;
    $wrapUl.appendChild($designLi);
    $wrapUl.appendChild($techLi);
    $wrapUl.appendChild($recruitBtnWrap);

    document.addEventListener("mouseover", (e) => {
      const target = e.target;
      if (target.className === "nav__item") {
        target.style.backgroundColor = "rgba(2, 32, 71, 0.05)";
      } else if (target.className === "recruit__button") {
        target.style.backgroundColor = "rgb(27, 100, 218)";
      }
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target;
      if (target.className === "nav__item") {
        target.style.backgroundColor = "#fff";
      } else if (target.className === "recruit__button") {
        target.style.backgroundColor = "rgb(49, 130, 246)";
      }
    });

    return $wrapUl;
  };

  $navDiv.style.cssText = navDivStyle;
  $navDiv.appendChild(createLogo());
  $navDiv.appendChild(createUl());

  return $navDiv;
};

export default Nav;
