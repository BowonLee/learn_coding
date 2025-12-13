import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BenefitItem = ({ title, desc }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
        <div className="w-10 h-1 bg-growth-green mb-4"></div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

const Benefits = () => {
    return (
        <div className="py-20 px-4">
            {/* Benefits Grid */}
            <section className="container mx-auto max-w-5xl mb-32">
                <h2 className="text-3xl font-bold text-center mb-16">Vibe Coding을 통해 얻을 수 있는 것</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <BenefitItem
                        title="나만의 플랫폼 구축"
                        desc="포트폴리오, 블로그, 서비스 등 상상만 하던 아이디어를 실제 돌아가는 웹사이트로 실현합니다."
                    />
                    <BenefitItem
                        title="AI 협업 능력"
                        desc="단순히 코드를 요청하는 것을 넘어, AI를 유능한 동료로 활용하는 커뮤니케이션 스킬을 익힙니다."
                    />
                    <BenefitItem
                        title="논리적 문제 해결력"
                        desc="복잡한 문제를 작게 쪼개고 구조화하는 컴퓨테이셔널 씽킹(Computational Thinking) 능력을 배양합니다."
                    />
                </div>
            </section>

            {/* Warning / Advice Section */}
            <section className="bg-gray-50 rounded-3xl p-10 md:p-20 text-center max-w-4xl mx-auto mb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-hopeful-yellow/10 rounded-full blur-3xl -z-10"></div>

                <h3 className="text-2xl font-bold mb-6">🎯 성공의 비결</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    가장 중요한 건 AI의 뛰어난 능력이 아니라,<br />
                    <strong>"명확한 제약사항"</strong>을 제시하는 당신의 디자인 능력입니다.<br /><br />
                    <span className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200 inline-block shadow-sm">
                        Tip: AI가 제멋대로 굴 땐 과감히 처음(=Reset)으로 돌아가세요.
                    </span>
                </p>
            </section>

            {/* Final CTA */}
            <section className="text-center py-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-8">당신의 아이디어가<br />현실이 될 시간입니다.</h2>
                    <Link
                        to="/learn"
                        className="inline-block bg-deep-charcoal text-white font-bold py-5 px-10 rounded-full text-lg shadow-xl hover:bg-black hover:scale-105 transition-all duration-300"
                    >
                        지금 시작하기
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Benefits;
