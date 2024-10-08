# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# yeogijeogi_trip

- 메인 레포지토리 : https://github.com/shin-minhyuk/yeogijeogi_trip.git

## 프로젝트 소개

oz코딩스쿨 메인 프로젝트 전, 타입스크립트를 써보고자 진행한 프로젝트입니다.
단, 중기날씨와 관광지/축제의 공공API를 활용하여, 관광지를 소개하는 웹사이트입니다.

## 팀원 구성

| 김예진(FE)                             | 이상민(FE)                             | 손수민(FE)                             | 한기선(FE)                                                                                    |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------- |
| <img src ="" width=200> <br /> @김예진 | <img src ="" width=200> <br /> @이상민 | <img src ="" width=200> <br /> @손수민 | <img src ="https://avatars.githubusercontent.com/u/176655935?v=4" width=200> <br /> @kiseon77 |

## 1. 개발환경

Front : HTML, SCSS, React, TypeScript
협업 툴 : Discord
기획 : Figma

## 2. 채택한 개발 기술과 브랜치 전략

### React, TypeScript, SCSS

- React

  - 컴포넌트 기반 아키텍처
  - 각 리스트를 컴포넌트화하여 재사용 가능하게 하였습니다.

- TypeScript

  - 정적 타입 검사를 통해 개발 경험을 향상 시킬 수 있엇습니다.

- ## SCSS

## 3. 프로젝트 프론트엔드 구조

```

```

## 4. 역할분담

### 김예진

-

### 이상민

-

### 손수민

-

### 한기선

- 프로젝트 세팅
- 글로벌 CSS 구축

---