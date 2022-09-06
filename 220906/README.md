# TIL
## 1. 오늘 새로 배운 것
1. [HTML > 7. Text-level semantics](#html--7-text-level-semantics)
2. [html semantic element 코드 리뷰(220905 모두의 HTML/CSS 과제)](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/tree/main/220905/과제)
3. [HTML > 8. Embedded content](#html--8-embedded-content)
## 2. 배운 것을 적용
## 3. 느낀점
## 4. 팁
* 실무에서는 주석을 앵간하면 안 씀, 그래도 포트폴리오 제출시 코드에 대한 설명을 주석으로 달자
* 첫단추를 잘 끼우자.. 오버스펙 기업(예를 들어 나는 프론트엔드만 할줄 아는데, python과 데이터 분석도 하는 좋은 기업)에 지원하지 말기..
* 스타트업 소규모(대표, 분위기, 월급이 밀리지 않는지, 시리즈 b이상)
* 수료 후 3개월 이내로 취직 목표로
* 이미지: 상업적 사용 가능 여부, 출처 밝혀야 하는지 여부, 사업적 용도로 사용하여 돈을 벌었는지가 주요 쟁점
* 폰트: 사용 범위(개인 무료 폰트, 상업 용도 무료 폰트), 가능하면 대기업 무료 폰트 사용하자(한글은 제외, 내용 증명 날아온다..)
---
# HTML > 7. Text-level semantics
1. 요소**안**의 **컨텐츠**의 크기만큼만 영역을 점유합니다.
2. 자식으로 Sections, Grouping Contents를 배치할 수 없습니다.
* cf) Sections, Grouping contents는 부모의 content area만큼을 전부 다 차지
## <br\>, <wbr\>
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
* CSS 속성: [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
    * 줄바꿈이 **단어**와 **단어** 기준으로
    * 공간이 단어를 수용하지 못하면 **단어**를 줄바꿈함
    * 단, CJK언어는(중국어, 일본어, 한국어) **한 글자** 기준으로 줄바꿈(word-break: break-all)
```html
<p>
    Lorem ipsum dolor dolor dolor<wbr> sitsitsitsit amet
</p>
```
* [white-space](https://velog.io/@m-vault/white-space는-무엇인가): nowrap 사용시 텍스트가 p의 콘텐츠 area를 벗어남
* <wbr\>을 사용하면 내가 의도한대로 sitsitsitsit amet이 줄바꿈됨
```html
<p style="white-space: nowrap">
    Lorem ipsum dolor dolor dolor<wbr> sitsitsitsit amet
</p>
```
## <a href="경로"\>
* href 속성을 사용하지 않고 자바스크립트로 경로를 지정할 수도 있지만 **웹 접근성에 위배되기 때문에** href 속성을 사용해주는게 좋다.
    * 왜 웹 접근성에 위배될까?
    * 브라우저가 html을 해석할 때는 href를 통해 <a\>가 어디로 향하는지 해석함
    * 검색 에이전트는 자바스크립트를 읽지않음. html 문서만 읽음.
* 앵커 태그만 예외적으로 sections, grouping content 요소를 자식으로 하는것이 허용됨
* <a> 요소안의 자식으로는 <a> 요소나 <button> 과 같이 사용자와 인터렉션이 가능한 요소를 자식으로 두지 않기 때문에 주의가 필요함(마찬가지로 button 안에도 a를 넣지말자)
```html
    <!-- 같은 탭에서 네이버로 이동 -->
    <a href="https://www.naver.com">click</a>

    <!-- target="_blank" 추가시 새로운 탭에서 네이버로 이동, a 태그가 새창에서 열리는지 현재창에서 열리는지 기획자에게 물어보자 -->
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
## <b\>, <strong\>
* <b\>는 semantic하지 않기 때문에 쓰지 말자
* <strong\> 사용하기
* 중요도를 더 강조하고 싶으면 <strong\>을 중첩해 사용할 수 있다
## <i\>, <em\>
* 기울임 글꼴
* <i\>는 <b\>와 달리 의미 있음. 전문 용어, 주 언어와 다른 언어로 표현된 부분 등 주위와 구분해야 하는 부분을 표현하기 위해
* <em\>는 강조의 의미가 있음(강한 강조)
## <dfn\>
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
## <abbr\>
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
## <sup\>, <sub\>
* <sup\>는 윗첨자, <sub\>은 아랫첨자
```html
<p>H<sub>2</sub>0</p>
<p>x<sup>2</sup>=4</p>
```
## <span\>
* 의미 x, 줄 바꿈 없이 영역을 묶는 용도
* div와 마찬가지로 최후 수단으로 사용할것
---
# HTML > 8. Embedded content
## [<img\>](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220906/001.html)
* src
* alt
    * 이미지가 보이지 않을 때 alt 속성에 적힌 텍스트를 이미지 대신 보여줌
    * 접근성
    * SEO
* [srcset](https://heropy.blog/2019/06/16/html-img-srcset-and-sizes/)

## <picture\>
* 해상도에 따라 '다른 이미지'를 보여주고 싶을 때에는 picture를, 같은 이미지인데 해상도에 따라 더 높은 해상도 이미지를 보여주고 싶을 때에는 srcset을 사용합니다.
* img의 srcset와의 차이: 화면에 따른 이미지 포맷 변경 가능
* **점진적 향상기법**: 기본적으로 예전 기술 환경에서 동작할 수 있는 기능을 구현해두고, 최신 기술을 사용할 수 있는 환경에서는 최신 기술을 제공하여 더 나은 사용자 경험을 제공할 수 있는 방법
* 이미지 포맷의 종류(어떤 이미지로 서비스를 할 것인가에 대해 고민을 해봐야 함)
    * 상황에 따라 다르긴 하지만, GIF보다 SVG 많이 사용. 그런데 크기가 큰 SVG는 사용을 지양하자
    * [이미지 압축 사이트](https://compressjpeg.com/ko/)
## <iframe\>
* 사용에 주의해야 함
    * [DBD 공격](https://remybaek.tistory.com/124)
* [관련 유튜브 강의](https://developers.google.com/youtube/player_parameters?hl=ko)
## <video\>
* 사용 지양(용량 문제 때문에)
* 이거보다는 <iframe\> 사용 권장!
* preload: 좋은 사용자 경험을 위해(속도 문제), 기본값은 브라우저마다 다름
    * none: 미리 로딩 x
    * metadata: 미리 로딩하지 않지만 파일의 메타데이터(예를 들어 영상 길이) 미리 가져옴
    * auto: 미리 로딩 o
* poster: 영상이 로딩 중일 때 대신해서 화면에 보여줄 이미지 지정
* track: 자막과 같은 시간 기반 텍스트 데이터를 보여주고자 할 때
## <audio\>
* 사용 지양
