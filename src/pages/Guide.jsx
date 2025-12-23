import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

const Guide = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                // Determine the correct path based on the environment
                const basePath = import.meta.env.BASE_URL.endsWith('/')
                    ? import.meta.env.BASE_URL
                    : `${import.meta.env.BASE_URL}/`;

                const response = await fetch(`${basePath}content.md`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Failed to load content:', error);
                setContent('# Error\n\nFailed to load content. Please try again later.');
            }
        };

        fetchContent();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-deep-charcoal text-white py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Guide</h1>
                    <p className="text-xl text-gray-300">
                        Vibe Coding 실습 가이드
                    </p>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-16 px-4 max-w-4xl mx-auto"
            >
                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mb-6">
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(content);
                            alert('Markdown 내용이 복사되었습니다!');
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-deep-charcoal rounded-lg font-medium transition-colors text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        복사하기
                    </button>
                    <button
                        onClick={() => {
                            const blob = new Blob([content], { type: 'text/markdown' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'content.md';
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-growth-green hover:bg-green-400 text-deep-charcoal rounded-lg font-medium transition-colors text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        다운로드
                    </button>
                </div>

                <article className="prose prose-lg prose-slate max-w-none 
                    prose-headings:text-deep-charcoal prose-headings:font-bold
                    prose-a:text-growth-green prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-deep-charcoal
                    bg-white
                ">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </article>
            </motion.div>
        </div>
    );
};

export default Guide;
