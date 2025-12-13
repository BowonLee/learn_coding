import React from 'react';
import Principles from '../components/Principles';
import Curriculum from '../components/Curriculum';

const Learn = () => {
    return (
        <div className="min-h-screen">
            {/* Visual Header */}
            <div className="bg-deep-charcoal text-white py-20 text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Curriculum</h1>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    건축가가 직접 벽돌을 쌓지 않듯, 당신은 설계만 하세요.<br />
                    AI와 함께하는 새로운 코딩 방식을 안내합니다.
                </p>
            </div>

            <Principles />
            <Curriculum />
        </div>
    );
};

export default Learn;
