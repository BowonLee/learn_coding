import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-hopeful-yellow/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-growth-green/10 rounded-full blur-3xl -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    코딩, 이제 배우지 말고 <br />
                    <span className="text-hopeful-yellow">시키세요</span>.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    AI와 대화하며 만드는 나만의 웹사이트.<br />
                    빠르게 만드는 것이 아니라, <strong>나아지게 만드는 법</strong>을 배웁니다.
                </p>

                <Link
                    to="/learn"
                    className="inline-block bg-hopeful-yellow text-deep-charcoal font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
                >
                    가이드 보러가기
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
