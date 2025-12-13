# Page Plan

## 1. Goal & Target Audience
- **Goal**: "코딩을 전혀 모르는 일반인"도 AI를 활용해 자신만의 홈페이지를 만들 수 있다는 자신감을 심어주고, **결과물을 점진적으로 개선하는 방법(Iterative Improvement)**을 학습시킨다.
- **Target Audience**:
  - 코딩이 어렵다고 생각하는 비개발자
  - 자신만의 웹사이트나 포트폴리오를 만들고 싶은 학생/취준생/직장인
  - AI 도구(Cursor, Antigravity 등) 활용에 관심이 있는 얼리어답터

## 2. Page Structure (Flow)
```ascii
+------------------+       +-------------------+       +-------------------+
|    Main Page     |  -->  |  Lecture Content  |  -->  |  Expected Effects |
| (Home / Landing) |       | (Curriculum/Guide)|       | (Benefits & Goal)|
+------------------+       +-------------------+       +-------------------+
| - Hero Section   |       | - What is AI Code?|       | - Success Secrets |
| - Intro Message  |       | - Core Principles |       | - Why Constraints?|
| - Key Features   |       | - Course Syllabus |       | - Call to Action  |
| - Call to Action |       | - Tools Info      |       |                   |
+------------------+       +-------------------+       +-------------------+
```
*Navigation matches the 3 tabs requirement.*

## 3. Design Concept
- **Mood**: 밝고 희망찬(Bright & Hopeful), 친근한(Friendly), 에너제틱한(Energetic).
- **Layout**: **Sticky Header (Sliver Style)**
  - 스크롤 최상단: **Full View** (로고, 탭, 환영 메시지 등 전체 노출)
  - 스크롤 다운 시: **Simplified View** (로고와 탭만 남기고 높이 축소, 상단 고정)
- **Colors**: "성장"과 "희망"을 상징하는 **Yellow**와 **Green**을 메인으로 사용.
- **Typography**: 가독성이 좋고 현대적인 Sans-serif 폰트 (예: Pretendard, Noto Sans KR).

### Suggested Color Palettes
| Role | Color Name | Hex Code | Description |
|------|------------|----------|-------------|
| **Primary** | **Hopeful Yellow** | `#FFD700` | 밝고 긍정적인 에너지, 주의를 끄는 포인트 컬러 (버튼, 강조) |
| **Secondary** | **Growth Green** | `#4CAF50` | 성장과 안정감, 신뢰를 주는 서브 컬러 (배경 요소, 아이콘) |
| **Background**| **Soft Cream** | `#FEFDF5` | 눈이 편안하고 따뜻한 배경색 |
| **Text** | **Deep Charcoal** | `#333333` | 가독성을 위한 메인 텍스트 컬러 |
| **Accent** | **Vibrant Orange** | `#FF8C00` | 행동 유도(CTA) 및 활기찬 느낌 추가 |

## 4. Tech Stack Recommendation
- **Framework**: **React** (Vite)
  - *Reasoning*: 빠르고 가볍게 시작할 수 있으며 생태계가 넓어 AI가 코드를 생성하기 용이함.
- **Styling**: **Tailwind CSS**
  - *Reasoning*: 빠르고 직관적인 스타일링, 프롬프트로 디자인을 지시하기 매우 적합함.
- **Deployment**: **GitHub Pages** via **GitHub Actions**
  - *Reasoning*: 무료이며 `system-prompt.md`의 요구사항과 일치. CI/CD 자동화 학습에도 좋음.
- **Routing**: `react-router-dom` (SPA 탭 전환 구현)

## 5. Proposed File Structure
```
src/
├── components/
│   ├── Layout.jsx       # Header(Tabs) & Footer including navigation logic
│   ├── Hero.jsx         # Main Page - Hero Section
│   ├── Intro.jsx        # Main Page - Introduction
│   ├── Curriculum.jsx   # Learning Content - Step-by-step guide
│   ├── Principles.jsx   # Learning Content - 8 Core Principles
│   └── Benefits.jsx     # Expected Effects - Benefits & Closing
├── pages/
│   ├── Home.jsx         # [Main Page] Route
│   ├── Learn.jsx        # [Lecture Content] Route (Curriculum)
│   └── Effect.jsx       # [Expected Effects & Goals] Route
├── App.jsx              # Routing Setup
└── main.jsx
```
