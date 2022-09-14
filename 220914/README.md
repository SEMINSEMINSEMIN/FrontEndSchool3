# TIL
1. 커뮤니티 관련
* 하드코딩하는 사람들
* 페이스북
2. blcok formatting context
https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
---
# CSS > 10. position
## 1 position이란?
## 2 position의 종류
### 2.1 position: static
### 2.2 position: relative
* **원래 자신이 있어야 하는 위치(static)에** 상대적
* 다른 콘텐츠들의 레이아웃에 영향을 미치지 않음
### 2.3 position : absolute
* static을 제외한 position 속성값을 가진 가장 가까운 **조상**의 박스 내를 기준으로 위치하게 된다
* 다른 콘텐츠들의 레이아웃에 영향을 미침
* position: absolute가 적용되면 마치 그 요소가 없는거처럼 다른 요소들이 인식함(그 자리를 채우러 옴)
### 2.4 position: fixed
* 현재 사용자가 보고 있는 브라우저 화면(뷰포트)를 기준으로
### 2.5 position: sticky
*  조상에 스크롤이 있다면 가장 가까운 부모 요소의 컨텐츠 영역에 달라붙는다
* 인터넷 익스플로러 지원 x
### 2.6 z-index
* static을 제외한 position 속성값이 적용된 요소의 z축 순서 결정 가능
* 부모가 z-index를 높여 자식 앞으로 나올 수 없음. 자식의 z-index를 낮춰 부모 뒤로 가는건 가능함
* 마이너스 값은 -1만 줄 수 있음
* div.one + div.two > div.three가 있을 때, div.one, div.two, div.thre의 z-index가 각각 1, 2, 1000이라고 하자. 자식의 z-index가 아무리 높아도 .three의 부모인 .two가 .one보다 z-index보다 작기 때문에, .one이 .three보다 위에 있게 된다
---
# CSS > 11. Float
## 1. float 의미
* 요소를 띄워서 좌 혹은 우로 정렬을 하는 속성
## 2. 기본개념
* text align과 달리 블록 요소도 왼쪽 혹은 오른쪽 정렬이 가능하다
## 3. float: left, float: right
## 4. 블록 박스 태그 vs float 속성 태그
* 블록 레벨 요소: 가로폭 전체의 넓이를 가지는 속성
* float
    * 컨텐츠가 차지하는 크기만큼만 너비 차지
    * float된 요소들의 너비 합이 컨테이너보다 커지면 순차적으로 아래로 떨어진다
    * inline 요소에 float 속성 적용시 display가 block으로 바뀜(이렇게 해놓고 display: block 또 적용하지 말자)
## 5. 이상하고 재미있는 float 속성
* 자식 요소들이 모두 float 속성을 가질 때, 컨테이너 요소가 자신의 높이에 자식 요소들의 높이를 반영하지 못한다.
    * 브라우저들이 요소들을 화면에 어떻게 보여줄지 결정하는 방법들
        * normal flow: normal flow에 속한 요소들이 float, position(absolute, fixed)을 알아보지 못함
        * float: normal flow에서 벗어남
        * position: normal flow에서 벗어남(특히 absolute, fixed)
    * 해결 방법
        * 컨테이너 요소에 overflow: visible;을 제외한 overflow 속성 추가: 자식 요소 중 부모 요소를 넘어가버리는게 있으면 안 보여지는 부작용이 있음. 이럴 경우는 [clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)를 주면 됨(예를 들어 박스 쉐도우)
        * float이 사용된 요소의 바로 다음 형제 요소에 clear 속성 사용
        * clear-fix 방법이란? 부모 요소::after(바로 위의 방법은 필요없는 html 요소 생성하기 때문에 이를 막을 수 있는 좋은 방법)
        ```css
        .wrap::after {
	        content:'';
	        display:block;
	        clear:both;
        }
        ```