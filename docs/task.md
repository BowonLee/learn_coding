# Task List

## Phase 1: Project Setup
- [x] Initialize React + Vite project in root (`.`) or `src` context
- [x] Install dependencies: `react-router-dom`, `tailwindcss`, `postcss`, `autoprefixer`
- [x] Initialize Tailwind CSS (`npx tailwindcss init -p`)
- [x] Update `tailwind.config.js` with Custom Colors (Yellow, Green)
- [x] Setup Global Styles in `src/index.css` (Fonts, Reset)

## Phase 2: Core Architecture
- [x] Create Directory Structure (`components`, `pages`, `assets`)
- [x] Setup `src/App.jsx` with `BrowserRouter`, `Routes`, `Route`
- [x] Create `Layout.jsx` with Header (Navigation) and Footer

## Phase 3: Page Implementation
- [x] **Home Page (`/`)**
  - [x] Implement `Hero.jsx` (Headline, CTA)
  - [x] Implement `Feature.jsx` (Cards)
  - [x] Assemble in `Home.jsx`
- [x] **Learn Page (`/learn`) [강의 내용]**
  - [x] Implement `Principles.jsx` (Grid/Slider)
  - [x] Implement `Curriculum.jsx` (Course Timeline with Dropdown Details)
  - [x] Assemble in `Learn.jsx`
- [x] **Effect Page (`/effect`) [기대 효과 및 목표]**
  - [x] Implement `Benefits.jsx`
  - [x] Assemble in `Effect.jsx`
- [x] **Process Page (`/process`) [제작 과정]**
  - [x] Create `Process.jsx` with timeline of prompts/actions
  - [x] Add route in `App.jsx` and link in `Layout.jsx`

## Phase 4: Polish & Assets
- [x] Add Icons/Images to `src/assets` (Use placeholders if needed)
- [x] Fine-tune UI/UX (Hover effects, Transitions)
- [x] Verify Responsiveness (Mobile View - Hamburger Menu)
- [x] **Add Example Images** (Generated 3/7, others placeholders)
- [x] **Refactor Curriculum Design** (Modern Timeline UI)

## Phase 5: Deployment
- [x] Create `.github/workflows/deploy.yml`
- [x] Configure `vite.config.js` `base` path
- [ ] Push to GitHub and Verify Action Status
- [ ] Manual Verification of Deployed Site

## Verification
- [ ] Run `npm run dev` and navigate all tabs
- [ ] Run `npm run build` to check for errors
