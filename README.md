# REA #

Real Estate Agent

=

## Intro

Goole의 **AMP**(Accelerated Mobile Page)를 이용하여 기존의 부동산 매물검색 모바일 페이지를 재구성.
>- AMP
>- Express.js

## Installation

"`
cd REA
npm install
node server.js
`"

## Link

"`
https://localhost:8080
`"

## AMP(Accelerated Mobile Page)

>AMP는 모바일 콘텐츠 최적화 표준이다. 뉴스나 블로그 같은 정적인 콘텐츠를 만들어 배포하는 온라인 매체가 이 AMP 표준에 맞춰 콘텐츠를 작성하여 게시하면 기존의 모바일 콘텐츠보다 약 15% ~ 85%의 성능 향상을 가져올 수 있다. 
>AMP는 웹 콘텐츠 제작에 사용되는 기술에 제약을 가한다. 속도를 떨어뜨리는 기술의 사용을 배제함으로써 속도의 향상을 꽤하는 방법인 셈이다.
>AMP 페이지는 일반적인 HTML 페이지에서 광고나 자바스크립트, CSS 애니메이션 등과 같은 동적인 요소들을 제거하여 최소 요소만 남겨 둔다. 
>자바스크립트 삽입은 가능하나 구글 AMP에서 정한 규약에 맞춰야 한다.

### Feature

[https://www.ampproject.org/ko/](https://www.ampproject.org/ko/)

>- 최상위 <html ⚡> 태그를 포함해야 합니다(<html amp>도 허용됨).
>- AMP HTML 문서의 일반 HTML 버전을 가리키는 <link rel="canonical" href="$SOME_URL" /> 태그를 헤드 내에 포함해야 합니다. 이러한 HTML 버전이 없는 경우 스스로를 가리키는 태그를 포함해야 합니다.
>- 헤드 태그 내에 <meta name="viewport" content="width=device-width,minimum-scale=1"> 태그를 포함해야 합니다. 또한 initial-scale=1을 포함시키는 것이 좋습니다.
>- 헤드의 마지막 요소로서 <script async src="https://cdn.ampproject.org/v0.js"></script> 태그를 포함해야 합니다(이 요소는 AMP JS 라이브러리를 포함하고 로드합니다).
>- 대부분의 HTML 태그는 AMP HTML에 직접 사용될 수 있지만, <img> 태그와 같은 특정 태그는 이와 동등하거나 약간 향상된 사용자 지정 AMP HTML 태그로 대체, 금지됩니다.
>- html validation 체크 "#development=1"을 URL에 추가합니다 ex) http://localhost:8080/#development=1