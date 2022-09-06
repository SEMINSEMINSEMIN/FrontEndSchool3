[피그마 링크](https://www.figma.com/file/O7jGY82SoyN16A9SpDA6z0/HTML_CSS-%EC%8B%A4%EC%8A%B5?node-id=0%3A1)
* 실무에서 폰트를 사용할 때 보통 한 두개, 많아도 세개
* 폰트 다운로드 여부 기준은, 그 폰트가 그 페이지 내에서 얼마나 많이 다운로드 되냐임
    * 만약 그 폰트가 페이지에서 한 번만 사용되면, 폰트를 다운로드 받지 않는게 좋음.
    * 예를 들어 220905 과제에서 '모두의 HTML/CSS'에 특정 폰트가 적용되어 있는데, '모두의 HTML/CSS'의 페이지 등장 빈도가 낮으므로 디자이너에게 그 폰트를 적용해 만든 로고 이미지를 요청해야 함.
* h1에 img를 넣을 수 있음(로고로), alt로 이미지에 대해 설명하면 된다
* button 사용시, 안에 텍스트로 그 버튼이 어떤 의미인지 알려줘야 함
```html
<button>
    검색 버튼
    <img src="" alt ="">
</button>
```
또는
```html
<button>
    <img src="" alt ="검색 버튼">
</button>
```
* article
    * 어떤 기능을 가진 위젯인가?
    * 다른 페이지 중간에 들어가도 어색하지 않은가?
* section 형제는 section 사용하길 추천한다
* figcaption에 이미지 설명이 있기 때문에 alt에 설명 필요없다
```html
<figure>
    <img src="" alt="">
    <figcaption>이미지 설명</figcaption>
</figure>
```
* 헤딩 태그 사용시 동일한 레벨인지를 고민해보자
* ol은 item들을 **오름차순**의 순서로 표현함
    * 그런데 UI 내에서는 내림차순으로 표현하고 싶다면?
    * <ol reversed \>
    * <ol start="10" reversed \>
* button의 접근성 문제
    * "<"를 스크린 리더가 읽으면 "다음보다 작음"으로 읽는다
    * 이미지를 넣고 alt로 "이전 슬라이드로 이동" 이런식으로 해도 됨
* indicator에도 정보를 넣어주자(접근성 차원)
* address 안에 dl dt dd 넣어주자
```html
<address>
        <dl>
          <dt class="address hidden">주소</dt>
          <dd class="address-content">
            서울특별시 사랑시 고백구 행복동 123-45 1층
          </dd>
          <dt class="call-email hidden">연락처/이메일</dt>
          <dd class="call-email-content">02-987-6543 / abc@gmail.com</dd>
        </dl>
</address>
```