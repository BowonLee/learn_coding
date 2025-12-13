# Implementation Plan

## 1. Goal
- **Objective**: 구축할 웹사이트는 "코딩을 모르는 비개발자가 AI를 통해 웹사이트를 만드는 방법(Vibe Coding)"을 소개하는 SPA(Single Page Application)입니다.
- **Tech Stack**: React 18 (Vite), Tailwind CSS, React Router v6.
- **Deployment**: GitHub Actions를 통한 GitHub Pages 자동 배포.

## 2. Proposed Changes

### Configuration & Setup
- **[NEW]** `package.json`: React, Vite, Tailwind CSS, gh-pages 의존성 추가.
- **[NEW]** `vite.config.js`: 최적화 및 경로 설정.
- **[NEW]** `tailwind.config.js`: `page-plan.md`에 정의된 컬러 팔레트(Hopeful Yellow, Growth Green 등) 확장 설정.
- **[NEW]** `.github/workflows/deploy.yml`: 메인 브랜치 푸시 시 자동 배포 워크플로우.

### Source Code
#### Entry & Routing
- **[NEW]** `src/main.jsx`: 앱 진입점.
- **[NEW]** `src/App.jsx`: `react-router-dom` 라우팅 설정 (`/`, `/learn`, `/effect`).
- **[NEW]** `src/index.css`: Tailwind Directives 및 Global Font(Pretendard 등) 적용.

#### Common Components
- **[NEW]** `src/components/Layout.jsx`:
  - Header: **Sliver UI Pattern** 구현.
    - 스크롤 이벤트 리스너(`useScroll` hook)를 통해 `scrollY` 값 감지.
    - Top State: 로고 + 네비게이션 + 보조 텍스트 등을 포함한 전체 높이.
    - Scrolled State: 높이가 줄어들고 핵심 네비게이션만 남는 Sticky Bar 형태.
    - `framer-motion` 또는 CSS Transition을 활용한 부드러운 전환.
  - Footer: Copyright 및 간단한 링크.

#### Page Components
- **[NEW]** `src/pages/Home.jsx`: 메인 랜딩 페이지.
  - `components/Hero.jsx`: "코딩, 배우지 말고 시키세요" 헤드라인 및 이미지.
  - `components/Feature.jsx`: 3가지 핵심 강점 카드.
- **[NEW]** `src/pages/Learn.jsx`: 강의 내용 소개 페이지.
  - `components/Curriculum.jsx`: `content.md`의 Phase 1~7 과정을 시각적으로 정리 (Timeline/Cards).
  - `components/Principles.jsx`: 8가지 핵심 원칙을 아이콘과 함께 그리드 배치.
- **[NEW]** `src/pages/Effect.jsx`: 기대 효과 및 목표.
  - `components/Benefits.jsx`: AI 코딩의 장점 및 CTA.

### Assets
- **[NEW]** `src/assets/`: `content_plan.md`에 정의된 이미지 플레이스홀더 또는 실제 파일 배치.

## 3. Verification Plan

### Automated Tests
- **Build It**: `npm run build` 명령어가 에러 없이 수행되는지 확인.
- **Lint**: `npm run lint`로 코드 스타일 확인.

### Manual Verification
1. **Routing Check**:
   - 상단 네비게이션 탭(Main, Learn, Effect) 클릭 시 페이지 전환이 부드럽게 되는지 확인.
   - URL이 변경되는지 확인.
2. **Responsive Check**:
   - 데스크톱(1920px)과 모바일(375px) 환경에서 레이아웃 깨짐이 없는지 확인.
   - 햄버거 메뉴(필요 시) 작동 확인.
3. **Deploy Check**:
   - GitHub Actions `deploy` 잡이 성공(Green) 표시는지 확인.
   - GitHub Pages URL 접속 시 정상 렌더링 확인.
