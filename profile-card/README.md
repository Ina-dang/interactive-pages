# 프로필 카드

![Javascript](https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript)
![Typescript](https://img.shields.io/badge/TypeScript-4.8.4-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/node.js-v18-green?logo=node.js)
![React.js](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=React)

## 🚀 프로젝트 소개

- 프로필 카드 등록

## 🛠 주요 기능

<!-- ## ⚙️ 인프라 구조 -->
<!-- ![https://user-images.githubusercontent.com/46295027/202600579-06b04e00-84d6-4024-bb1d-8031dbca1808.png](https://user-images.githubusercontent.com/46295027/202600579-06b04e00-84d6-4024-bb1d-8031dbca1808.png) -->

## next13 폴더구조

- 폴더방식 라우팅 사용
- 기본적으로서버사이드 컴포넌트를 사용하기때문에 getServerSideProps함수를 통해 서버에 요청하지 않고도 런타임 로드가 가능하다
- app/디렉토리 안에서 서버사이드 단에서 컴포넌트를 점진적으로 랜더링한뒤 `스트리밍`방식으로 클라이언트한테 전달한다
  따라서 기존 SSR은 백엔드 API를 fetch해서 가져올 때 까지 기다려야했지만 `스트리밍`을 통해 고정 레이아웃 부분은 데이타 패치가 필요없어 먼저 랜더링 해서 클라이언트로 보내고 이후 다른 부분은 데이터 패치 후 별도 랜더링 한 뒤 클라이언트 단으로 보내준다. 추가로 data fetch가 필요한 부분은 가져오기 전까지 알아서 로딩표시를 해준다
- app폴더는 index가 아닌 layout.tsx 파일로 진입 (Nested Layout)
- layout.tsx가 \_app.tsx, \_document.tsx 파일 역할을 한다
- 12버전에서는 src/pages/test안에 index.js를 만들어서 /test 라우팅을 했다면 13버전은 app/test/page.tsx로 /test라우팅을 할 수 있다

## 실행방법

개발서버: profile-card 터미널에서 `npm run dev` 입력
