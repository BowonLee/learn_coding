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
