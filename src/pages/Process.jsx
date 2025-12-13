import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ title, prompt, action, response, date, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="mb-12 relative pl-8 border-l-2 border-gray-200 last:border-0"
    >
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-hopeful-yellow border-4 border-white shadow-sm"></div>

        <div className="mb-4">
            <span className="text-sm text-gray-400 font-mono">{date}</span>
            <h3 className="text-2xl font-bold text-deep-charcoal mt-1">{title}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {/* User Prompt */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-3 text-deep-charcoal font-bold">
                    <span className="bg-deep-charcoal text-white text-xs px-2 py-1 rounded mr-2">USER</span>
                    요구사항 / 프롬프트
                </div>
                <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed font-mono bg-white p-3 rounded border border-gray-100">
                    {prompt}
                </p>
            </div>

            {/* AI Action/Response */}
            <div className="bg-growth-green/5 p-6 rounded-xl border border-growth-green/10">
                <div className="flex items-center mb-3 text-growth-green font-bold">
                    <span className="bg-growth-green text-white text-xs px-2 py-1 rounded mr-2">AI</span>
                    {response ? '답변' : '수행한 작업'}
                </div>
                {response ? (
                    <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed font-mono bg-white p-3 rounded border border-gray-100">
                        {response}
                    </p>
                ) : (
                    <ul className="space-y-2 text-sm text-gray-700">
                        {action.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-2 text-growth-green">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </motion.div>
);

const Process = () => {
    const processSteps = [
        {
            date: "Step 1",
            title: "프로젝트 기획 및 착수",
            prompt: "system - prompt.md파일을 읽고 실행 해\n[\n    githubactions로 배포할 웹 페이지, react로 구현, 주제는 코딩을 모르는 사람들이 ai로 홈페이지 만들어보기 \n  진행할 학습의 상세한 내용은 content.md참조, 밝고 희망찬 느낌의 디자인컨셉, 노랑과 초록 베이스,\n    메인 페이지를 포함 한 3개의 탭을 가진 홈페이지 구성 예정,\n        탭을 톨한 페이지 전환이 이루어져야한다,\n            화면기획은 페이지 별로 구성,\n                메인페이지 - 홍보, 랜딩위주의 페이지,\n                    학습 내용 - 학습할 내용에 대한 안내 페이지,\n                        기대 효과 - 이 과정을 통해 얻을 수 있는 내용에 대한 안내 페이지\n]",
            action: [
                "React + Vite + Tailwind CSS 프로젝트 초기화",
                "기본 색상 팔레트(Hopeful Yellow, Growth Green) 설정",
                "Framer Motion을 도입하여 Scroll-aware Header 구현"
            ]
        },
        {
            date: "Step 2",
            title: "가치 제안 및 UI 개선",
            prompt: "10분이라는 문구는 빼고, 이건 빠르게 만드는게 목적이 아니야 만들고 나아지게 만들 수 있는 방법을 아는게 목적이야, 탭바는 상단에 있아야 다만 스크롤 위치에 따라 달랴져야 해 스크롤이 가장 위에 있으면 전부 보여주고 스크롤을 하단으로 내리면 간소화해야해 슬리버 형식으로 할거야",
            response: "내용 수정: \"10분 완성\" 문구를 제거하고, ** \"점진적인 개선(Iterative Improvement)\" ** 과 배움을 강조하는 방향으로 수정했습니다.\n디자인 수정: 헤더를 ** Sliver 형식(스크롤 시 모양이 변하는 상단 바) ** 으로 변경하여, 최상단에서는 전체 정보를 보여주고 스크롤 시 간소화되도록 설계했습니다."
        },
        {
            date: "Step 3",
            title: "기획 방향성 제안 (AI 오해)",
            prompt: "contnet.md의 내용을 직접 사용자에게 표시하지 마, 저 문서의 내용을 참고로 이 웹페이지에서 산출물을 만들어서 표시해야 해",
            response: "문서를 수정하여 단순 텍스트 표시가 아닌 ** \"인터랙티브 기획 생성기(Plan Generator)\" ** 로 재설계했습니다.\n\n기능 변경: Learn.jsx -> Generator.jsx로 변경.\n작동 방식: 사용자가 아이디어(주제, 타겟 등)를 입력하면, content.md의 방법론이 적용된 프롬프트와 계획서를 자동으로 생성해줍니다.\n    산출물: System Prompt, Requirements Doc 등을 결과로 보여주고 복사할 수 있게 합니다.\n이 방식이 의도하신 바와 맞는지 확인 부탁드립니다.맞다면 바로 구현 단계로 넘어가겠습니다."
        },
        {
            date: "Step 4",
            title: "기획 방향성 교정 (User Correction)",
            prompt: "아니야, contnet.md의 내용대로 나는 강의를 진행 할 예정이야, 이 강의의 홈보를 목적으로 하는 홈페이지인거야 이런 생성기같은건 필요 없어 그냥 저 내용을 웹페이지에서 사용자에게 잘 표현하는게 목적이야",
            response: "죄송합니다.사용자의 의도를 명확히 파악했습니다.\n\n변경 사항 요약:\n\n기획 생성기 제거: 인터랙티브 도구 기능을 삭제했습니다.\n강의 홍보 페이지 복구: content.md의 내용을 효과적으로 전달하는 \"강의 소개\" 형식으로 계획을 되돌렸습니다.\n    커리큘럼(Syllabus): Phase 1~7의 과정을 타임라인 / 카드 형태로 시각화.\n핵심 원칙(Principles): 8가지 원칙을 디자인 요소와 함께 배치.\n유지된 사항: \"10분 완성\" 문구 제거, \"점진적 개선\" 강조, \"Sliver Sticky Header\" 등 이전 피드백은 그대로 유지했습니다.\n이 계획으로 구현을 시작해도 될까요 ?"
        },
        {
            date: "Step 5",
            title: "디테일 강화 (반응형)",
            prompt: "이 페이지는 반응형으로 구성되어야 해, 모바일 환경과 웹 환경에서 모두 기능하도록 해",
            action: [
                "Layout.jsx에 모바일 전용 햄버거 메뉴 로직 추가",
                "CSS Grid를 Flex-col로 전환하여 모바일 가독성 확보",
                "모든 컴포넌트의 반응형 스타일(@media) 검증 및 수정"
            ]
        },
        {
            date: "Step 6",
            title: "상세 기능 고도화",
            prompt: "learn항목의 각 단계를 클릭 시 해당 단계에 대한 상세한 페이지들이 있었으면 해, 드롭다운으로 구현해줘, 예시이미지를 생성하거나 예제 문구를 작성해줘 요구사항 정의를 어떻게 해야 하는지, 무슨 질문을 하면좋을지 처럼",
            action: [
                "Curriculum.jsx에 Accordion(접기/펼치기) 기능 추가",
                "content.md 내용을 분석하여 단계별 체크리스트 및 프롬프트 예시 추출",
                "데이터 구조화 및 UI 매핑 완료"
            ]
        },
        {
            date: "Step 7",
            title: "이미지 생성 및 적용",
            prompt: "예시 이미지를 네가 만들어서 추가할 수 있나?",
            action: [
                "Gemini Image Generation 도구를 사용하여 3종의 일러스트 생성",
                "생성된 이미지를 assets 폴더로 이동 및 컴포넌트 연결",
                "이미지가 없는 경우를 위한 Fallback UI 구현"
            ]
        },
        {
            date: "Step 8",
            title: "디자인 리팩토링",
            prompt: "Course Syllabus 의 디자인이 깨졌어 번호 컴포넌트와 카드 컴포넌트를 현대적인 디자인 핏에 맞게 재적용 해",
            action: [
                "Curriculum 컴포넌트 전면 재설계 (Timeline Style)",
                "Glassmorphism 효과 및 그림자 디테일 추가",
                "애니메이션 자연스럽게 개선"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-deep-charcoal text-white py-24 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Built with Vibe Coding</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        이 웹페이지는 <strong>바이브 코딩</strong>을 통해 만들어졌습니다.<br />
                        여러분이 보고 계신 결과물이 어떤 대화와 과정을 통해 탄생했는지 투명하게 공개합니다.
                    </p>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-20 px-4 max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-deep-charcoal">Production Log</h2>
                    <p className="text-gray-500 mt-2">사용자의 프롬프트와 AI의 답변 기록</p>
                </div>

                <div className="pl-4 md:pl-0">
                    {processSteps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            index={index}
                            title={step.title}
                            prompt={step.prompt}
                            action={step.action}
                            response={step.response}
                            date={step.date}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Process;
