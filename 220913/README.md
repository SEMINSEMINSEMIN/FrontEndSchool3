# TIL
1. HTML 개행에 관하여
* 디자인 목적: span(doesnt mean anything on its own)
* 의미적 개행: br
* p나 div로 개행을 하지말자
2. 신기술
* flex, grid: 사용하지 않는 경우도 있음(구버전 지원 때문에)
* 신기술에 대한 대처방안을 생각해보기: flex, grid에 대한 대처방안 -> float
3. html와 body간의 관계
4. 필기 방법
* 손필기(노트)
5. 그외..
* 나중에 시험 볼거임 JS 끝나면....
* 일부러 시험을 못치지 말자..(근데 나는 어차피 그럴 필요도 없음 ^______________^)
* 자바스크립트 문제가 많이 나옴
* html, css 문제가 많이 나오진 않음(25% 정도?)
---
# CSS > 8. CSS declarations
## 8.1 단위
1. 절대 길이 단위
* px
2. 상대 길이 단위: 폰트는 상대 길이 단위로 주는게 더 좋다
* [em](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/003.html): 부모 요소의 글자 크기를 기준점으로
* [rem](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/004.html): html의 글자 크기를 기준점으로
    * 실무에서는 기본적으로 rem을 em보다 많이 쓰고 ex) 버튼(large, medium, small) 등에 텍스트의 비율에 따라 달라져야 할 경우 em을 씁니다!
* [%](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/005.html): 부모 요소를 기준으로 하는 백분율 단위
* [vw(화면 넓이 기준), vh(화면 높이 기준)](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/006.html)
* [vmax/vmin](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/007.html): 화면의 넓이와 높이 중 큰/작은 값을 기준으로 하는 백분율 단위
* [그외 잘 사용하지 않는 단위](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/008.html)
## 8.2 [overflow](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/009.html)
* overflow: overflow-x overflow-y;
* [css를 이용해 화면에서 안 보이게 하기](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/010.html)
## 8.3 background-image
1. 관련 속성
* background-image
* background-color
* [background-repeat](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/013.html)
    * repeat
    * no-repeat
    * repeat-x
    * repeat-y
    * round
    * space
* background-position
* [background-size](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/012.html)
    * [contain과 cover의 차이](https://mytutorials.tistory.com/336)
2. html과 body에 관하여
* https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/001.html
* https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/002.html
* https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/011.html
* https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/024.html
3. img와 background-image의 사용 용도 차이
* img: 백엔드 개발자와 협업해야 하는 공간
* background-image: FE 혼자 작업하는 공간, 스크린리더가 읽지 않아야 하는 곳
## 8.4 font
1. [font-size](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/014.html)
[테스트 사이트](https://www.w3schools.com/cssref/playit.asp?filename=playcss_font-size&preval=medium)
* medium: 웹브라우저에서 정한 기본 글자 크기
* xx-small, x-small, small, large, x-large, xx-large
* smaller, larger: 부모 요소의 font-size를 기준으로 하는 상대적 글자 크기
* length
* initial
* inherit
2. font-family
* [웹 폰트](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/015.html)
* [아이콘](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/018.html): https://fontawesome.com
* @font-face: 사용자 컴퓨터에 특정 폰트가 설치되어 있지 않아도 폰트를 **설치하여** 사용할 수 있도록
```css
@font-face {
      font-family: "Bitstream Vera Serif Bold";
      src: url("https://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
    }
```
* font format
    * woff, ttf/otf: 모든 브라우저에서 지원
    * woff2: 용량을 줄이는데 효과적, IE 지원 x
3. [font-weight](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/016.html)
## 8.5 [opacity](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/020.html)
* 투명도 지정
## 8.6 [color](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/021.html)
1. 색상 이름
2. RGB, RGBA
3. HEX 값(16진수)
* 00(R)00(G)00(B) ~ FFFFFF
* FF0000: red(F00와 같다)
4. HSL, HSLA
* 색상, 채도(선명도), 명도(밝기), 투명도(선택사항)
* https://hslpicker.com
---
# CSS > 9. Text
1. [line-height](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/022.html)
2. [letter-spacing](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220913/023.html)
3. text-align
* left
* right
* center
* justify: 마지막 라인을 제외하고 텍스트를 양쪽 끝으로 정렬한다