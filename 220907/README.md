# TIL
## 팁
* 개발되어 있는 바퀴를 새로 만들지 마라

* https://paullabworkspace.notion.site/WHATWG-URL-s-origin-property-de2eed15f8ef4688ba4b089c9e7e2d0a
---
# HTML > 9. Forms
## 1. <Form\> 기본 속성
* 정보를 입력하는 영역
* 로그인 화면, 회원 가입
* 폼에 입력을 하고 제출시 데이터는 **서버로** 전송되고, 서버 처리 후 로그인 결과 화면 같은 다른 웹 페이지를 클라이언트에 전송
### 1.1 폼 동작 방식
1. 웹 페이지에 있는 form에 데이터를 입력합니다.
2. 웹 페이지 내 액션이 일어나게 되면 데이터는 웹 서버로 이동하게 됩니다.
3. 웹 서버는 데이터를 처리하기 위해 APP을 호출합니다. 이때 APP은 물리적으로 별도의 서버일 수도 있습니다.
4. 필요에 따라 APP은 DB로 데이터를 전송합니다. 이때 DB는 물리적으로 별도의 서버일 수도 있습니다.
5. DB에서 CRUD 작업이 일어나고 작업 결과를 APP으로, WEB으로 전송합니다.
6. 웹 서버는 받은 결과를 Client 브라우저에게 보냅니다.
7. 사용자 브라우저는 Response 받은 페이지를 렌더링하여 사용자에게 보여줍니다.
* Server: 서빙, 24시간 돌아가는 컴퓨터, 대부분 IP 연결이 돼있음
    * 로컬
        * 장점: 비용(전기세 + 인터넷)
        * 단점: 트래픽 확장이 어려움, 서버 확장이 어려움, 들어오는 트래픽 제한(bandwidth의 문제), 정전(클라우드 서버 같은 경우 UPS)
    * 클라우드
        * 장점: 서버 확장이 쉽다, 이전도 쉽다, IP를 할당 받거나, 도메인 연결하기 쉽고, HTTPS 인증도 쉽고..
        * 단점: 비용
* Web Server: 대부분 정적 파일을 서빙, 그러나 PHP 같은 프로그래밍 언어도 처리하긴 한다..
* App server: 두뇌 역할, 아이디 패스워드를 입력하면 웹서버를 지나쳐 앱 서버로 옴. 그럼 앱 서버가 db에서 로그인 정보 확인하고 맞으면 웹 서버에 로그인 성공 페이지를 반환하라고 함. 그럼 웹 서버가 클라이언트에게 반환하는 거임
* 참고: WAS = Web Server + App Server
* DB: 데이터 저장, 그런데 이미지는 DB에 저장하지 않고 이미지는 이미지 경로에만 저장함. 이미지는 스토리지에 저장돼있음!
    * 비효율적
    * DB의 목적(데이터 인덱싱)에 맞지 않음
    * 이를 해결하기 위해 API image server를 따로 두는 경우 있음(API server의 경우 브라우저와 직접 연결되어 있음)
* [API server](https://paullabworkspace.notion.site/API-API-Server-bab406c7453b4654a183a03bcf8dac96)
    * 애플리케이션을 서로 연결하여 서로 통신할 수 있다
    * 이미지를 직접 만들 필요 없고 저장할 필요 없이 API 서버에 URL을 보내면 API 서버가 이미지를 줌
* CRUD
    * Create: SQL(INSERT), method(POST)
    * Read: SQL(SELECT), method(GET)
    * Update: SQL(UPDATE), method(PUT)
    * Delete: SQL(DELETE), method(DELETE)
### [1.2 폼의 속성](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220907/001.html)
1. action: 입력 값을 전송할 서버의 URL
2. method: 폼의 데이터를 **전송**할 **방법**을 정함
    * get: **URL**로 데이터를 **전달**할 때 사용(큰 파일은 get으로 전송하지 않음. id와 pw와 같은 민감 데이터x), 남들한테 URL 공유시(예를 들어 447번 게시물 공유) get만 가능하고 POST는 불가능하다(주소에 입력 내용이 나타나지 않으니까)
    * post: url에 **데이터가 노출되면 안되는 것일 때**, 파일을 올리거나 보안이 필요한 데이터 **전송**할 때, 주소에 입력 내용이 나타나지 않도록 함, 민감 데이터 o, 큰 데이터 o, ?post로 불러올 수도 있음?
    * 얘네는 HTTP의 get, post와 다름
## 2. <input\>
### 2.1 속성
* 용어만 알아두기: Shadow DOM
1. [type](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220907/002.html): text, radio, checkbox, password, **button** 등
2. name
3. [readonly](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220907/003.html)
4. maxlength
5. minlength
6. required
7. autofocus: 웹 페이지 로딩시 이 속성을 지정한 태그로 포커스 바뀜
8. placeholder
9. pattern
## 3. [<label\>](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220907/004.html)
* [name이 통일되면 택1로 바뀐다](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220907/005.html)
## 4. [<select\>](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220907/006.html)
* 드롭다운
* 속성: multiple, size(별로 안 사용함)
## 5. [<fieldset\>](https://github.com/SEMINSEMINSEMIN/FrontendSchool3/blob/main/220907/007.html)
* 자식 요소로 사용되는 폼 컨트롤들을 그룹화 할 수 있음
* 폼 내용이 방대하여 섹션별로 나눌 필요성이 있을 경우 유용
## 6. <legend\>
* <fieldset\> 태그 바로 뒤에 위치하며 폼 그룹의 목적을 나타내는 제목을 의미한다. 반드시 <fieldset\>의 첫번째 자식으로 사용해야 함
## 7. <button\>
### 7.1 button 태그의 type
* submit: default, 서버로 양식 데이터 제출, 폼의 용도가 제출이 아니면 반드시 type을 따로 선언해줘야 한다
* reset: form의 모든 값을 초기화함
* button: 클릭 가능한 버튼, 기능을 부여하기 전에는 별다른 작동을 하지 않는다
```html
<!-- 네이버 메인 화면의 검색 버튼 html 구조 -->

<button id="search_btn" type="submit" title="검색">
	<span class="blind">검색</span>
	<span class="ico_search_submit"></span>
</button>
```
### 7.2 input vs button 무엇을 써야할까?
* 스타일 적용에는 input이 더 좋다(input과 달리, button은 닫는 태그가 있음)
## 8. <textarea\>
* cols: 입력창의 넓이, 양수 값만 사용 가능, 기본값 20
* rows: 줄의 수
```html
<textarea name="" id="" cols="40" rows="10" maxlength="10" minlength="5"></textarea>
```
## 9. <datalist\>
* 선택 옵션을 제공함과 동시에, 옵션에 선택하고 싶은 값이 없는 경우 임의의 값을 입력 받을 수 있도록 편의성 제공
```html
<label for="solasystem">원하는 행성을 선택하세요 : </label>
<input type="text" id="solasystem" list="planets" name="planets">
<datalist id="planets">
    <option value="수성">수성</option>
    <option value="금성">금성</option>
    <option value="지구">지구</option>
    <option value="화성">화성</option>
</datalist>
```
---
# CSS > 1. CSS
