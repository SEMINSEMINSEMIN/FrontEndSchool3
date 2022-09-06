# HTML > 7. Text-level semantics
## TIL
### 1. 팁
* 실무에서는 주석을 앵간하면 안 씀
* 포트폴리오 제출시 코드에 대한 설명을 주석으로 달자
* a 태그가 새창에서 열리는지 현재 창에서 열리는지 기획자에게 
물어보자
### 2. 오늘 새로 배운 것
### 3. 배운 것을 적용
### 4. 느낀점
---
## 텍스트 레벨 요소의 특징
1. 요소**안**의 **컨텐츠**의 크기만큼만 영역을 점유합니다.
2. 자식으로 Sections, Grouping Contents를 배치할 수 없습니다.
* cf) Sections, Grouping contents는 부모의 content area만큼을 전부 다 차지
### <br\>, <wbr\>
1. <br\>
* 줄바꿈을 위한 태그
```html
<p>
    <!-- 공백병합 -->
    Lorem 
            
            
            
    ipsum <br> 
    <br> 
    <br> 
    dolor sit amet
</p>
```
2. <wbr\>
* html에서는 공백을 기준으로 문자인지 단어인지를 구분함
* CSS 속성: [word-break](https://velog.io/@m-vault/white-space는-무엇인가)
    * 줄바꿈이 **단어**와 **단어** 기준으로
    * 공간이 단어를 수용하지 못하면 **단어**를 줄바꿈함
    * 단, CJK언어는(중국어, 일본어, 한국어) **한 글자** 기준으로 줄바꿈(word-break: break-all)
```html
<p>
    Lorem ipsum dolor dolor dolor<wbr> sitsitsitsit amet
</p>
```
* white-space: nowrap 사용시 텍스트가 p의 콘텐츠 area를 벗어남
* <wbr\>을 사용하면 내가 의도한대로 sitsitsitsit amet이 줄바꿈됨
```html
<p style="white-space: nowrap">
    Lorem ipsum dolor dolor dolor<wbr> sitsitsitsit amet
</p>
```
### <a href="경로"\>
* href 속성을 사용하지 않고 자바스크립트로 경로를 지정할 수도 있지만 **웹 접근성에 위배되기 때문에** href 속성을 사용해주는게 좋다.
    * 왜 웹 접근성에 위배될까?
    1. 브라우저가 html을 해석할 때는 href를 통해 <a\>가 어디로 향하는지 해석함
    2. 검색 에이전트는 자바스크립트를 읽지않음. html 문서만 읽음.
* 앵커 태그만 예외적으로 sections, grouping content 요소를 자식으로 하는것이 허용됨
* <a> 요소안의 자식으로는 <a> 요소나 <button> 과 같이 사용자와 인터렉션이 가능한 요소를 자식으로 두지 않기 때문에 주의가 필요함
```html
    <!-- 같은 탭에서 네이버로 이동 -->
    <a href="https://www.naver.com">click</a>

    <!-- target="_blank" 추가시 새로운 탭에서 네이버로 이동 -->
    <a href="https://www.naver.com" target="_blank">click</a>

    <!-- href="./index.html": 현재 경로를 기준으로 index.html을 찾는다 -->
    <a href="./index.html">click</a>

    <!-- 해쉬 링크: 문서 내부 링크, id="three"인 element로 이동한다 -->
    <!-- 스크롤을 부드럽게 이동하고 싶다면 html에 scroll-behavior: smooth; -->
    <a href="#three">click</a>

    <!-- download: ./index.html 다운로드. 인터넷 익스플로러에서는 지원하지 않는다 -->
    <a href="./index.html" download>click</a>
    <br>
    <a href="./hello.hwp">hwp click</a> 
    <br>
    <!-- 얘는 일단 다운로드 자체는 되지만, 다운로드할 파일이 현재 경로에 없으니까 다운로드 해봤자 파일이 안 열림 -->
    <a href="./hello.hwp" download="a.hwp">hwp download click</a>
    <br>
    <a href="./hello.pdf">pdf click</a>
    <br>
    <a href="./hello.pdf" download="a.pdf">pdf download click</a>

    <!-- 아래 번호로 전화 걸 수 있고 메일로 이메일도 보낼 수 있음 -->
    <a href="tel:+82027777777">(02)777-7777</a> /
    <a href="mailto:hello@gmail.com">hello@gmail.com</a>
```
### <b\>, <strong\>
* <b\>는 semantic하지 않기 때문에 쓰지 말자
* <strong\> 사용하기
* 중요도를 더 강조하고 싶으면 <strong\>을 중첩해 사용할 수 있다
### <i\>, <em\>
* 기울임 글꼴
* <i\>는 <b\>와 달리 의미 있음. 전문 용어, 주 언어와 다른 언어로 표현된 부분 등 주위와 구분해야 하는 부분을 표현하기 위해
* <em\>는 강조의 의미가 있음(강한 강조)
### <dfn>
* 현재 문맥에서 정의하고 있는 용어를 나타냄. <dfn\>의 가장 가까운 부모가 <p\> 혹은 <dt\><dd\> 쌍, <section\> 요소일 경우 그 컨텐츠를 dfn의 정의에 대한 설명으로 간주. 문서에서 **최초로** 나타났을 때 사용.
```html
<dl>
	<dt>WWW</dt>
	<dd>
	    <dfn>WWW</dfn>는 
			인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간을 말한다.
	    - 위키백과
	</dd>
</dl>
```
### <abbr>
* 준말, 약자
```html
<dl>
	<dt>WWW</dt>
	<dd>
	    <dfn><abbr title="World Wide Web">WWW</abbr></dfn>는 
			인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간을 말한다.
	    - 위키백과
	</dd>
</dl>
```
### <sup\>, <sub\>
* <sup\>는 윗첨자, <sub\>은 아랫첨자
```html
<p>H<sub>2</sub>0</p>
<p>x<sup>2</sup>=4</p>
```
### <span\>
* 의미 x, 줄 바꿈 없이 영역을 묶는 용도
* div와 마찬가지로 최후 수단으로 사용할것