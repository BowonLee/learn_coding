# 환경 설정 페이지(Guide) 기획안

## 목표
제공된 이미지 자산을 활용하여 "Antigravity" 개발 환경과 필수 도구(Git/GitHub)를 처음부터 구축하는 과정을 안내합니다.

## 타겟 사용자
처음 개발 환경을 설정하는 초보자 (Windows 사용자 기준)

## 제안 구조

### 1. Hero 섹션
- **제목**: 개발 환경 구축 가이드
- **부제목**: Vibe Coding을 위한 Antigravity 및 Git 설정
- **설명**: 코딩을 시작하기 위해 필요한 컴퓨터 환경을 단계별로 설정해봅시다.
- **안내 문구**: "과정을 진행하다가 막히거나 제대로 되었는지 확신이 서지 않는다면 주저하지 말고 연락주세요. 즉시는 아니더라도 꼼꼼히 확인해 드리겠습니다."

### 2. 단계별 가이드 (Step-by-Step)

#### Step 1: 시스템 확인 (Windows)
- **내용**: 윈도우 시스템 요구사항 및 버전 확인.
- **이미지**: 
    - `window.png` (시스템 정보 확인)
    - `window_chipset.png` (비트/아키텍처 확인)

#### Step 2: Antigravity 설치
- **내용**: Antigravity 도구 다운로드 및 설치 과정.
- **이미지**:
    - `antigravity.png` (로고 또는 메인)
    - `andtigravity_install_page.png` (다운로드 페이지)
    - `antigravity_window_install.png` (설치 프로그램 실행)
    - `antigravity_window_install_program.png` (설치 진행 중)
    - `antigravity_install_last.png` (설치 완료)

#### Step 3: 초기 실행 및 확인
- **내용**: 애플리케이션 실행 및 정상 작동 확인.
- **이미지**:
    - `antigravity_first.png` (첫 실행 화면)
    - `compelte_launch.png` (메인 인터페이스)

#### Step 4: WSL 및 터미널 설정 (필요 시)
- **내용**: 윈도우 환경에서 WSL(리눅스 하위 시스템) 업데이트 및 CMD 확인.
- **이미지**:
    - `wsl_update.png` (WSL 업데이트)
    - `cmd.png` (명령 프롬프트 확인)

#### Step 5: Git 및 GitHub 설정
- **내용**: 버전 관리를 위한 Git 및 GitHub Desktop 설치.
- **이미지**:
    - `install_git.png` (Git 설치)
    - `github_desktop.png` (GitHub Desktop 설치)

#### Step 6: 설정 완료
- **내용**: 모든 준비가 완료되었음을 확인.
- **이미지**:
    - `setting_complete.png`
    - `install complete.png`

## 구현 상세

- **컴포넌트**: `src/pages/Environment.jsx`
- **레이아웃**: 
    - 타임라인 형태 또는 단계별 스텝퍼(Stepper) UI 사용
    - 이미지를 크게 배치하고 하단에 설명 캡션 추가
    - 필요한 명령어가 있다면 "복사하기" 버튼 제공
- **자산 경로**: `src/assets/environment/*.png`

## 확인 요청 사항
1. 이 순서대로 구성을 진행하면 될까요?
2. 각 단계별로 들어갈 구체적인 설명 문구가 있다면 알려주세요. (없다면 이미지 기반으로 제가 적절히 작성하겠습니다)
