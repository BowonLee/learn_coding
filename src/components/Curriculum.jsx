import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import phase1Img from '../assets/curriculum/phase_1.png';
import phase2Img from '../assets/curriculum/phase_2.png';
import phase3Img from '../assets/curriculum/phase_3.png';

const PhaseItem = ({ phase, title, description, details, example, checks, image, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex gap-4 md:gap-8 relative">
            {/* Left Column: Timeline Indicator */}
            <div className="flex flex-col items-center flex-shrink-0 w-12 md:w-16">
                {/* Circular Badge */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-4 shadow-sm transition-all duration-300 font-bold text-lg cursor-pointer
            ${isOpen
                            ? 'bg-hopeful-yellow border-white text-deep-charcoal shadow-lg'
                            : 'bg-white border-growth-green text-growth-green'
                        }`}
                >
                    {phase}
                </motion.div>

                {/* Vertical Connecting Line */}
                {!isLast && (
                    <div className={`w-0.5 flex-grow my-2 transition-colors duration-300 ${isOpen ? 'bg-hopeful-yellow' : 'bg-gray-200'}`}></div>
                )}
            </div>

            {/* Right Column: Content Card */}
            <div className="flex-grow pb-12">
                <motion.div
                    layout
                    onClick={() => setIsOpen(!isOpen)}
                    className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 cursor-pointer overflow-hidden transition-all duration-300 group
            ${isOpen ? 'ring-2 ring-hopeful-yellow/30 border-hopeful-yellow shadow-xl' : 'hover:border-growth-green/50 hover:shadow-md'}`}
                >
                    <div className="flex justify-between items-start mb-3">
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-deep-charcoal' : 'text-gray-800'}`}>
                            {title}
                        </h3>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full border transition-all
                    ${isOpen ? 'bg-hopeful-yellow text-white border-hopeful-yellow' : 'bg-gray-50 text-gray-400 border-gray-200 group-hover:bg-growth-green group-hover:text-white group-hover:border-growth-green'}
                `}>
                            {isOpen ? 'Close' : 'Details'}
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">{description}</p>

                    {/* Expandable Content Area */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="w-full h-48 md:h-64 bg-gray-50 rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-gray-100 relative group-hover:shadow-inner transition-shadow">
                                    {image ? (
                                        <img src={image} alt={`Phase ${phase}`} className="w-full h-full object-contain p-4" />
                                    ) : (
                                        <div className="text-center text-gray-400">
                                            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            <span className="text-sm">Illustration Placeholder</span>
                                        </div>
                                    )}
                                </div>

                                {/* Details Grid */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Checkpoints */}
                                    <div className="bg-growth-green/5 p-6 rounded-xl border border-growth-green/10">
                                        <h4 className="font-bold text-growth-green mb-4 flex items-center text-lg">
                                            <span className="bg-growth-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                                            Step Checkpoints
                                        </h4>
                                        <ul className="space-y-3">
                                            {checks.map((check, i) => (
                                                <li key={i} className="flex items-start text-gray-700 text-sm md:text-base">
                                                    <span className="mr-2 text-growth-green">•</span>{check}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Prompt Example */}
                                    <div className="bg-deep-charcoal p-6 rounded-xl border border-gray-800 text-white relative shadow-2xl">
                                        <div className="absolute top-4 right-4">
                                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border border-gray-600 px-2 py-1 rounded">AI Prompt</span>
                                        </div>
                                        <h4 className="font-bold text-hopeful-yellow mb-4 flex items-center text-lg">
                                            <span className="mr-2">⚡</span> Try This
                                        </h4>
                                        <div className="font-mono text-sm leading-relaxed text-gray-300">
                                            {example.split('\n').map((line, i) => (
                                                <div key={i} className="mb-1">{line}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

const Curriculum = () => {
    const curriculum = [
        {
            phase: 1,
            title: "요구사항 작성하기",
            description: "만들고 싶은 웹사이트의 목적과 주요 기능을 구체적으로 정의합니다.",
            image: phase1Img,
            checks: [
                "무엇을 만들 것인가? (목적)",
                "어떤 기능이 필요한가?",
                "디자인 컨셉은 무엇인가?",
                "참고할 사이트가 있는가?"
            ],
            example: "프로젝트: 나의 독서 기록장\n목적: 읽은 책 정리 및 공유\n디자인: 깔끔하고 미니멀한 느낌\n기능: 책 제목 입력, 별점 주기"
        },
        {
            phase: 2,
            title: "구현 설계서 작성하기",
            description: "페이지 구조, 기술 스택, 데이터 흐름 등 전체적인 청사진을 그립니다.",
            image: phase2Img,
            checks: [
                "기술 스택 결정 (React, Vite 등)",
                "페이지 구조도 (Header, Main, Footer)",
                "필요한 컴포넌트 목록 나열"
            ],
            example: "이 요구사항을 바탕으로 구현 계획을 세워줘.\n기술 스택은 React를 쓰고 싶어.\n어떤 파일들이 필요한지 구조를 잡아줘."
        },
        {
            phase: 3,
            title: "AI 지시 문서 작성하기",
            description: "AI가 오해 없이 작업을 수행하도록 명확한 지침과 제약사항을 만듭니다.",
            image: phase3Img,
            checks: [
                "작업을 작은 단위(Task)로 쪼개기",
                "각 단계별 검증 방법 포함",
                "하지 말아야 할 것(제약사항) 명시"
            ],
            example: "Task 1: 프로젝트 초기 설정\n- React 프로젝트 생성\n- Tailwind CSS 설치\n- 검증: npm run dev 실행 확인"
        },
        {
            phase: 4,
            title: "GitHub 연결 및 초기 설정",
            description: "코드를 저장할 저장소를 만들고 개발 환경을 세팅합니다.",
            checks: [
                "GitHub 저장소 생성 (Public)",
                "로컬 프로젝트와 원격 저장소 연결",
                "기본 의존성 설치 완료 확인"
            ],
            example: "현재 폴더를 GitHub 저장소와 연결하는 명령어를 알려줘.\n저장소 주소는 https://github.com/user/repo 야."
        },
        {
            phase: 5,
            title: "단계별 구현 진행",
            description: "작은 단위로 나누어 코드를 작성하고, 매 단계마다 결과를 확인합니다.",
            checks: [
                "한 번에 하나의 파일/컴포넌트만 작업",
                "제약사항을 매 프롬프트마다 반복",
                "코드가 생성되면 즉시 실행해보기"
            ],
            example: "Hero 섹션을 만들어줘.\n[제약사항]\n- Hero.jsx 파일만 수정해\n- 스타일링은 Tailwind만 사용해\n- 다른 파일은 건드리지 마"
        },
        {
            phase: 6,
            title: "결과물 검토하기",
            description: "기능, 디자인, 반응형 동작 등 품질을 꼼꼼하게 점검합니다.",
            checks: [
                "모든 기능이 의도대로 동작하는가?",
                "모바일 화면에서도 잘 보이는가?",
                "오타나 깨진 이미지는 없는가?"
            ],
            example: "지금 만든 페이지를 모바일 뷰로 확인했더니 메뉴가 깨져 보여.\n반응형으로 동작하도록 수정해줘."
        },
        {
            phase: 7,
            title: "배포하기",
            description: "GitHub Actions를 통해 전 세계에 나의 웹사이트를 공개합니다.",
            checks: [
                "GitHub Actions 워크플로우 파일 생성",
                "Build 성공 여부 확인",
                "배포된 URL 접속 테스트"
            ],
            example: "GitHub Pages로 배포하고 싶어.\n.github/workflows/deploy.yml 파일을 작성해줘."
        },
    ];

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-deep-charcoal">Curriculum</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            아이디어에서 배포까지,<br />
                            <span className="text-growth-green font-bold">바이브 코딩</span>과 함께하는 7단계 여정
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {curriculum.map((item, index) => (
                        <PhaseItem
                            key={item.phase}
                            phase={item.phase}
                            title={item.title}
                            description={item.description}
                            checks={item.checks}
                            example={item.example}
                            image={item.image}
                            isLast={index === curriculum.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
