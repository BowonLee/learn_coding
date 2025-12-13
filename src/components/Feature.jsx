import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
        <div className="w-12 h-12 bg-growth-green/10 rounded-xl mb-6 flex items-center justify-center">
            {/* Simple geometric icon */}
            <div className="w-6 h-6 bg-growth-green rounded-full"></div>
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
);

const Feature = () => {
    const features = [
        {
            title: "전문 지식 불필요",
            description: "복잡한 문법 대신 자연어로 대화하듯 만드세요. 코딩 지식이 없어도 AI가 당신의 언어를 이해합니다."
        },
        {
            title: "지속적인 개선",
            description: "한 번에 완성하지 않습니다. 대화를 통해 점진적으로 발전시키는 바이브 코딩(Vibe Coding)의 정수를 경험하세요."
        },
        {
            title: "무료로 시작",
            description: "GitHub와 AI 도구를 활용해 비용 없이 배포까지. 누구나 부담 없이 시작할 수 있습니다."
        }
    ];

    return (
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why Vibe Coding?</h2>
                    <p className="text-gray-600">왜 바이브 코딩이어야 할까요?</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
