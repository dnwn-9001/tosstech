// const styleSheet = document.createElement("style");
// styleSheet.innerText = `

// `;

// document.head.appendChild(styleSheet);

const NavContent = () => {
  return `
        <img class="nav__logo" src="" alt="logo" srcset="" />
        <ul>
            <li class="nav__item"><a href="#/design">디자인</a></li>
            <li class="nav__item"><a href="#/tech">개발</a></li>
            <li class="nav__item">
                <button>채용 바로가기</button>
            </li>
        </ul>
    `;
};

export default NavContent;
