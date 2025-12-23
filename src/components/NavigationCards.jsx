import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pages = [
    {
        title: "Lecture Content",
        description: "AI와 함께하는 새로운 코딩 방식과 커리큘럼을 확인하세요.",
        path: "/learn",
        color: "bg-growth-green",
        delay: 0.1
    },
    {
        title: "Goal & Benefits",
        description: "Vibe Coding을 통해 얻을 수 있는 목표와 이점을 알아봅니다.",
        path: "/effect",
        color: "bg-hopeful-yellow",
        delay: 0.2
    },
    {
        title: "Setup",
        description: "개발 시작을 위한 환경 설정부터 도구 설치까지 한번에 해결하세요.",
        path: "/environment",
        color: "bg-blue-200", // Custom color for variety
        delay: 0.3
    },
    {
        title: "Making Process",
        description: "이 사이트가 어떻게 만들어졌는지, 개발 과정을 투명하게 공개합니다.",
        path: "/process",
        color: "bg-purple-200", // Custom color for variety
        delay: 0.4
    },
    {
        title: "Guide",
        description: "실전 가이드 문서를 통해 더 깊이 있는 내용을 학습합니다.",
        path: "/guide",
        color: "bg-gray-200",
        delay: 0.5
    }
];

const NavigationCards = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-deep-charcoal mb-4">Explore More</h2>
                    <p className="text-gray-600">Vibe Coding의 다양한 콘텐츠를 확인해보세요.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pages.map((page, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: page.delay }}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-gray-100"
                        >
                            <Link to={page.path} className="block h-full">
                                <div className={`h-2 w-full ${page.color}`} />
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-deep-charcoal mb-3 group-hover:text-growth-green transition-colors">
                                        {page.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {page.description}
                                    </p>
                                    <span className="inline-flex items-center text-sm font-semibold text-deep-charcoal group-hover:text-growth-green transition-colors">
                                        자세히 보기
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NavigationCards;
