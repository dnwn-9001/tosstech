// 전체
const $footerWrapDiv = document.createElement("div");
const footerWrapDivStyle = `
    display: flex;
    flex-direction: column;
    max-width: 1064px;
    margin: auto;
    padding: 0 67px;
    box-sizing: border-box;
`;
//menu
const $menuWrapDiv = document.createElement("div");
const menuwrapDiv = `
    display: flex;
    padding-bottom: 50px;
    font-size: 15px;
`;

const $tossTechUl = document.createElement("ul");
const $tossUl = document.createElement("ul");
const $csUl = document.createElement("ul");
const tossTechAndTossUlStyle = `
    list-style: none;
    padding: 0;
    width: 170px;
`;
const csUlStyle = `
    list-style: none;
    padding: 0;
    flex: 1;
`;

const $tossTechTitle = document.createElement("li");
const $tossTechContent = document.createElement("li");
const $tossTechA = document.createElement("a");
const titleStyle = `
    height: 35px;
`;
const contentStyle = `
    height: 30px;
    line-height: 30px;
    color: rgb(107, 118, 132);
`;
const aStyle = `
    color: rgb(107, 118, 132);
    text-decoration: none;
`;

const $tossTitle = document.createElement("li");
const $tossContentWeb = document.createElement("li");
const $tossContentIntroduce = document.createElement("li");
const $tossContentRecruit = document.createElement("li");
const $tossContentWebA = document.createElement("a");
const $tossContentIntroduceA = document.createElement("a");
const $tossContentRecruitA = document.createElement("a");

const $csTitle = document.createElement("li");
const $csContentTel = document.createElement("li");
const $csContentEmail = document.createElement("li");
const $csContentKakao = document.createElement("li");
const $csContentEmailA = document.createElement("a");
const $csContentKakaoA = document.createElement("a");

// rights
const $address = document.createElement("address");
const $nameP = document.createElement("p");
const $copyrightP = document.createElement("p");
const addressStyle = `
    padding-bottom: 54px;
    font-size: 15px;
`;
const namePStyle = `
    margin: 0;
    padding-bottom: 16px;
    font-weight: 600;
`;
const copyrightPStyle = `
    margin: 0;
    font-size: 13px;
    color: rgb(107, 118, 132);
`;

// sns 버튼
const $btnsWrapDiv = document.createElement("div");
const btnsWrapDivStyle = `
    padding: 0;
    margin: 16px 0;
`;

const $btnsUl = document.createElement("ul");
const btnUlStyle = `
    display: flex;
    list-style: none;
    padding: 0;
`;

const $facebookLi = document.createElement("li");
const $blogLi = document.createElement("li");
const $naverLi = document.createElement("li");
const $twitterLi = document.createElement("li");
const $instagramLi = document.createElement("li");
const liStyle = `
    margin-right: 8px;
    height: 40px;
    text-align: left;
`;

const Footer = () => {
  const createMenu = () => {
    $menuWrapDiv.style.cssText = menuwrapDiv;
    $tossTechUl.style.cssText = tossTechAndTossUlStyle;
    $tossUl.style.cssText = tossTechAndTossUlStyle;
    $csUl.style.cssText = csUlStyle;

    // 토스테크
    $tossTechTitle.style.cssText = titleStyle;
    $tossTechTitle.textContent = "토스테크";
    $tossTechContent.style.cssText = contentStyle;
    $tossTechA.style.cssText = aStyle;
    $tossTechA.textContent = "의견보내기";
    $tossTechA.href = "mailto:techblog@toss.im";

    $tossTechContent.appendChild($tossTechA);
    $tossTechUl.appendChild($tossTechTitle);
    $tossTechUl.appendChild($tossTechContent);

    //토스
    $tossTitle.style.cssText = titleStyle;
    $tossTitle.textContent = "토스";

    $tossContentWeb.style.cssText = contentStyle;
    $tossContentIntroduce.style.cssText = contentStyle;
    $tossContentRecruit.style.cssText = contentStyle;

    $tossContentWebA.style.cssText = aStyle;
    $tossContentWebA.textContent = "홈페이지";
    $tossContentWebA.href = "https://toss.im/";
    $tossContentWebA.target = "_blank";

    $tossContentIntroduceA.style.cssText = aStyle;
    $tossContentIntroduceA.textContent = "회사 소개";
    $tossContentIntroduceA.href = "https://toss.im/team";
    $tossContentIntroduceA.target = "_blank";

    $tossContentRecruitA.style.cssText = aStyle;
    $tossContentRecruitA.textContent = "채용";
    $tossContentRecruitA.href = "https://toss.im/career";
    $tossContentRecruitA.target = "_blank";

    $tossContentWeb.appendChild($tossContentWebA);
    $tossContentIntroduce.appendChild($tossContentIntroduceA);
    $tossContentRecruit.appendChild($tossContentRecruitA);

    $tossUl.appendChild($tossTitle);
    $tossUl.appendChild($tossContentWeb);
    $tossUl.appendChild($tossContentIntroduce);
    $tossUl.appendChild($tossContentRecruit);

    //고객센터
    $csTitle.style.cssText = titleStyle;
    $csTitle.textContent = "고객센터";

    $csContentTel.style.cssText = contentStyle;
    $csContentTel.textContent = "전화 : 1599-4905 (24시간 연중무휴)";

    $csContentEmail.style.cssText = contentStyle;
    $csContentEmailA.style.cssText = aStyle;
    $csContentEmailA.textContent = "이메일 : support@toss.im";
    $csContentEmailA.href = "mailto:techblog@toss.im";

    $csContentKakao.style.cssText = contentStyle;
    $csContentKakaoA.style.cssText = aStyle;
    $csContentKakaoA.textContent = "카카오톡 : @toss";
    $csContentKakaoA.href = "https://goto.kakao.com/@toss";
    $csContentKakaoA.target = "_blank";

    $csContentEmail.appendChild($csContentEmailA);
    $csContentKakao.appendChild($csContentKakaoA);

    $csUl.appendChild($csTitle);
    $csUl.appendChild($csContentTel);
    $csUl.appendChild($csContentEmail);
    $csUl.appendChild($csContentKakao);

    $menuWrapDiv.appendChild($tossTechUl);
    $menuWrapDiv.appendChild($tossUl);
    $menuWrapDiv.appendChild($csUl);

    $menuWrapDiv.addEventListener("mouseover", (e) => {
      const target = e.target;
      if (target === "a") {
        target.style.textDecorationLine = "underline";
      }
    });

    $menuWrapDiv.addEventListener("mouseout", (e) => {
      const target = e.target;
      if (target === "a") {
        target.style.textDecorationLine = "none";
      }
    });

    return $menuWrapDiv;
  };

  const createRights = () => {
    $address.style.cssText = addressStyle;
    $nameP.style.cssText = namePStyle;
    $nameP.textContent = "(주)비바리퍼블리카";
    $copyrightP.style.cssText = copyrightPStyle;
    $copyrightP.textContent =
      "Copyright © Viva Republica, Inc. All Rights Reserved.";

    $address.appendChild($nameP);
    $address.appendChild($copyrightP);

    return $address;
  };

  const createBtns = () => {
    $btnsWrapDiv.style.cssText = btnsWrapDivStyle;
    $btnsUl.style.cssText = btnUlStyle;
    $facebookLi.style.cssText = liStyle;
    $blogLi.style.cssText = liStyle;
    $naverLi.style.cssText = liStyle;
    $twitterLi.style.cssText = liStyle;
    $instagramLi.style.cssText = liStyle;

    $facebookLi.innerHTML = `
        <a target="_blank" href="https://www.facebook.com/toss.revolution">
            <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="F"/>
        </a>
    `;
    $blogLi.innerHTML = `
        <a target="_blank" href="https://blog.toss.im/">
            <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="B"/>
        </a>
    `;
    $naverLi.innerHTML = `
        <a target="_blank" href="https://post.naver.com/tossblog">
            <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="N"/>
        </a>
    `;
    $twitterLi.innerHTML = `
        <a target="_blank" href="https://twitter.com/toss__official">
            <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="T"/>
        </a>
    `;
    $instagramLi.innerHTML = `
        <a target="_blank" href="https://www.instagram.com/toss.im/">
            <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="I"/>
        </a>
    `;

    $btnsUl.appendChild($facebookLi);
    $btnsUl.appendChild($blogLi);
    $btnsUl.appendChild($naverLi);
    $btnsUl.appendChild($twitterLi);
    $btnsUl.appendChild($instagramLi);

    $btnsWrapDiv.appendChild($btnsUl);

    return $btnsWrapDiv;
  };

  $footerWrapDiv.style.cssText = footerWrapDivStyle;
  $footerWrapDiv.appendChild(createMenu());
  $footerWrapDiv.appendChild(createRights());
  $footerWrapDiv.appendChild(createBtns());

  return $footerWrapDiv;
};

export default Footer;
