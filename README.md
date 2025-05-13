# React + TypeScript + Vite

# 개발환경 (npm과 yarn 동시 사용을 궎장하지 않아 npm 으로 재설치 )

1. 프로젝트 환경설정(vite를 활용한 React 프로젝트)설치 : 'npm install vite@latest' <br />
2. React 중앙집중식 상태관리 라이브러리 Recoil 설치 : 'yarn add recoil'-> npm install recoil<br />
3. 외부 오픈 API 통신을 위한 라이브러리 axios 설치 : 'npm install axios' <br />
4. CSS 스타일링을 위한 SASS/SCSS 설치 : 'yarn add -D sass' -> npm install -D sass <br />
5. React Router 설치 : 'npm install react-router-dom localforage match-sorter sort-by' <br />
6. TypeScript에서 Node.js 모듈을 쓸수 있도록 도와주는 환경 구축  'npm install @type/node' <br />
7. React Toast Popup 모듈 설치 : 'npm install react-simple-toasts' <br />
8. 실행은 npm run dev  (실제 구성은 yarn으로 했으므로 yarn dev)


yarn create vite

cd vite-project
  yarn
  yarn dev       

code . -r
yarn add axios
yarn add recoil
yarn add sass
yarn add react-router-dom
yarn add @types/node
yarn add react-simple-toasts


--이런 방법이 있다 정도만 참조... 순서와 명령어 실행 방법은 다름 (아래 기재한 순서대로 진행)
https://velog.io/@yeoonnii/%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8%EC%97%90%EC%84%9C-React-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%A4%EB%8B%88%EC%A0%80npmyarn-install%ED%95%98%EA%B8%B0


도스창 관리자모드에서 
corepack enable

vscode 홈디렉토리로 가서 
yarn create vite

cd vite-project
  yarn
  yarn dev       

code . -r
yarn add react@18 react-dom@18
yarn add react-simple-toasts => yarn add react-simple-toasts@5.10.0
yarn add axios -> yarn add axios@1.6.8
yarn add recoil
yarn add sass
yarn add react-router-dom 
yarn add @types/node



yarn list

.yarnrc 파일 작성 (기존파일 복사해 오면 됨 ) 

node_modules와 yarn.lock파일을 삭제 -> 시간 오래걸림

yarn cache clean  -> 시간 오래걸림

yarn 

npm-packages-offline-cache 폴더에  *.tgz 파일 생성된거 확인 

node_modules와 yarn.lock파일을 삭제 

와이파이 차단 

yarn install --offline

와이파이 차단 상태에서 yarn dev 실행하여 확인 

이후 프로젝트 폴더 전체를 압축하여 vdi로 복사

vdi에 yarn 설치할 필요 없이 
압축 풀어서 바로 yarn dev  실행하여 확인하면 됨 


