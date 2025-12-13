import React from 'react';
import { motion } from 'framer-motion';

const PrincipleCard = ({ number, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.4 }}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-hopeful-yellow hover:shadow-md transition-all duration-300"
    >
        <div className="text-3xl font-bold text-hopeful-yellow mb-3">#{number}</div>
        <h3 className="text-lg font-bold mb-2 text-deep-charcoal">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
    </motion.div>
);

const Principles = () => {
    const principles = [
        { title: "정확한 요구사항", desc: "만들고 싶은 것을 구체적으로 정의하세요." },
        { title: "항상 계획을 세우고 문서화", desc: "계획 없는 실행은 AI도 길을 잃습니다." },
        { title: "AI 활용법 물어보기", desc: "막힐 땐 AI에게 길을 물어보세요." },
        { title: "계획 → 확인 → 실행", desc: "무턱대고 코드를 짜지 말고 검증하세요." },
        { title: "작게 쪼개기", desc: "큰 문제는 작게 나누면 쉬워집니다." },
        { title: "작업 내용을 문서에 반영", desc: "변동 사항을 기록하여 문맥을 유지하세요." },
        { title: "반드시 제약사항 명시", desc: "'무엇을 하지 말아야 할지' 알려주는 것이 핵심입니다." },
        { title: "이상하면 처음부터 다시", desc: "꼬인 코드는 과감히 버리고 다시 시작하세요." },
    ];

    return (
        <section className="py-20 bg-soft-cream">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        성공적인 바이브 코딩을 위한 8가지 핵심 원칙입니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((item, idx) => (
                        <PrincipleCard
                            key={idx}
                            number={idx + 1}
                            title={item.title}
                            desc={item.desc}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
