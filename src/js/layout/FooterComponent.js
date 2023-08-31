const FooterContent = () => {
  return `
        <div class="footer__inner">
            <div class="footer__menu">
                <ul class="list__tosstech">
                    <li class="footer__list__title">토스테크</li>
                    <li class="footer__list__content">
                        <a href="mailto:techblog@toss.im">의견보내기</a>
                    </li>
                </ul>
                <ul class="list__toss">
                    <li class="footer__list__title">토스</li>
                    <li class="footer__list__content">
                        <a target="_blank" href="https://toss.im/">홈페이지</a>
                    </li>
                    <li class="footer__list__content">
                        <a target="_blank" href="https://toss.im/team">회사 소개</a>
                    </li>
                    <li class="footer__list__content">
                        <a target="_blank" href="https://toss.im/career">채용</a>
                    </li>
                </ul>
                <ul class="list__cs">
                    <li class="footer__list__title">고객센터</li>
                    <li class="footer__list__content">전화 : 1599-4905 (24시간 연중무휴)</li>
                    <li class="footer__list__content">
                        <a href="mailto:techblog@toss.im">이메일 : support@toss.im</a>
                    </li>
                    <li class="footer__list__content">
                        <a target="_blank" href="https://goto.kakao.com/@toss">카카오톡 : @toss</a>
                    </li>
                </ul>
            </div>

            <address class="footer__rights">
                <p class="footer__rights__name">
                    (주)비바리퍼블리카
                </p>
                <p class="footer__copyright">
                    Copyright © Viva Republica, Inc. All Rights Reserved.
                </p>
            </address>

            <div class="footer__btns">
                <ul class="footer__ul">
                    <li>
                        <a target="_blank" href="https://www.facebook.com/toss.revolution">
                            <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="F"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://blog.toss.im/">
                            <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="B"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://post.naver.com/tossblog">
                            <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="N"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/toss__official">
                            <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="T"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/toss.im/">
                            <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="I"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `;
};

export default FooterContent;
