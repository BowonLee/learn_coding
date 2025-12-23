import React from 'react';
import { motion } from 'framer-motion';

// Import images
import imgWindow from '../assets/environment/window.png';
import imgWindowChipset from '../assets/environment/window_chipset.png';
import imgAntigravity from '../assets/environment/antigravity.png';
import imgAntigravityInstallPage from '../assets/environment/antigravity_install_page.png';
import imgAntigravityWindowInstall from '../assets/environment/antigravity_window_install.png';
import imgAntigravityWindowInstallProgram from '../assets/environment/antigravity_window_install_program.png';
import imgAntigravityInstallLast from '../assets/environment/antigravity_install_last.png';
import imgAntigravityFirst from '../assets/environment/antigravity_first.png';
import imgCompleteLaunch from '../assets/environment/complete_launch.png';
import imgWslUpdate from '../assets/environment/wsl_update.png';
import imgCmd from '../assets/environment/cmd.png';
import imgInstallGit from '../assets/environment/install_git.png';
import imgGithubDesktop from '../assets/environment/github_desktop.png';
import imgSettingComplete from '../assets/environment/setting_complete.png';
import imgInstallComplete from '../assets/environment/install_complete.png';

const steps = [
    {
        title: "Step 1: 시스템 확인 (Windows)",
        description: "먼저 사용 중인 윈도우 시스템의 정보를 확인합니다. 설정 > 시스템 > 정보에서 확인할 수 있습니다. 혹은 아래 명령어를 CMD(명령 프롬프트)에 입력하여 확인할 수 있습니다.",
        command: "echo %PROCESSOR_ARCHITECTURE%",
        architectureGuide: [
            { result: "AMD64 / x64", desc: "일반적인 Intel/AMD CPU → x64 버전 다운로드" },
            { result: "ARM64", desc: "ARM 기반 CPU (Snapdragon 등) → ARM64 버전 다운로드" }
        ],
        images: [
            { src: imgWindow, caption: "시스템 정보 확인 화면" },
            { src: imgWindowChipset, caption: "시스템 종류(비트/아키텍처) 확인" }
        ]
    },
    {
        title: "Step 2: Antigravity 설치",
        description: "Vibe Coding을 도와줄 Antigravity 도구를 다운로드하고 설치합니다.",
        links: [
            { text: "Antigravity 다운로드", url: "https://antigravity.google/", primary: true }
        ],
        images: [
            { src: imgAntigravity, caption: "Antigravity 메인 화면" },
            { src: imgAntigravityInstallPage, caption: "다운로드 페이지" },
            { src: imgAntigravityWindowInstall, caption: "설치 프로그램 실행" },
            { src: imgAntigravityWindowInstallProgram, caption: "설치 진행 중" },
            { src: imgAntigravityInstallLast, caption: "설치 완료 화면" }
        ]
    },
    {
        title: "Step 3: 초기 실행 및 확인",
        description: "설치된 애플리케이션을 실행하여 정상적으로 작동하는지 확인합니다.",
        images: [
            { src: imgAntigravityFirst, caption: "애플리케이션 첫 실행" },
            { src: imgCompleteLaunch, caption: "메인 인터페이스 로딩 완료" }
        ]
    },
    {
        title: "Step 4: WSL 및 터미널 설정",
        description: "필요한 경우 윈도우용 리눅스 하위 시스템(WSL) 업데이트를 진행하고 명령 프롬프트(CMD)를 확인합니다.",
        images: [
            { src: imgWslUpdate, caption: "WSL 업데이트 알림 및 진행" },
            { src: imgCmd, caption: "CMD(명령 프롬프트) 실행 확인" }
        ]
    },
    {
        title: "Step 5: Git 및 GitHub 설정",
        description: "버전 관리를 위해 Git과 GitHub Desktop을 설치합니다.",
        links: [
            { text: "Git 다운로드 Windows용", url: "https://git-scm.com/download/win", primary: false },
            { text: "GitHub Desktop 다운로드", url: "https://desktop.github.com/", primary: true }
        ],
        images: [
            { src: imgInstallGit, caption: "Git 설치 화면" },
            { src: imgGithubDesktop, caption: "GitHub Desktop 설치 화면" }
        ]
    },
    {
        title: "Step 6: 설정 완료",
        description: "모든 준비가 완료되었습니다! 이제 Vibe Coding을 시작할 수 있습니다.",
        images: [
            { src: imgSettingComplete, caption: "설정 완료 확인" },
            { src: imgInstallComplete, caption: "준비 완료" }
        ]
    }
];

const Environment = () => {
    // Command Copy Function
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('명령어가 복사되었습니다!');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-deep-charcoal text-white py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Environment Setup</h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Vibe Coding을 위한 개발 환경 구축 가이드
                    </p>

                    {/* Support Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-hopeful-yellow/10 border border-hopeful-yellow text-hopeful-yellow p-4 rounded-lg max-w-2xl mx-auto"
                    >
                        <p className="font-medium text-lg">💡 도움이 필요하신가요?</p>
                        <p className="mt-2 text-gray-300 leading-relaxed">
                            과정을 진행하다가 막히거나 제대로 되었는지 확신이 서지 않는다면 주저하지 말고 연락주세요. <br />
                            즉시는 아니더라도 꼼꼼히 확인해 드리겠습니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Guide Steps */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-gray-200 last:border-0 pb-12"
                        >
                            {/* Step Marker */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-growth-green border-4 border-white shadow-sm"></div>

                            {/* Step Header */}
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-deep-charcoal">{step.title}</h2>
                                <p className="text-lg text-gray-600 mt-2">{step.description}</p>

                                {/* Command Box */}
                                {step.command && (
                                    <div className="mt-4 bg-gray-900 rounded-lg p-4 font-mono text-sm relative group">
                                        <div className="text-gray-300 mb-2 text-xs">Command Prompt (CMD)</div>
                                        <code className="text-green-400 block mb-2">{step.command}</code>
                                        <button
                                            onClick={() => copyToClipboard(step.command)}
                                            className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded transition-colors"
                                        >
                                            Copy
                                        </button>

                                        {/* Architecture Guide */}
                                        {step.architectureGuide && (
                                            <div className="mt-3 pt-3 border-t border-gray-700 text-gray-400 text-xs">
                                                <p className="font-bold mb-1 text-gray-300">결과에 따른 다운로드:</p>
                                                <ul className="space-y-1">
                                                    {step.architectureGuide.map((guide, i) => (
                                                        <li key={i}>• {guide.result}: <span className="text-yellow-400">{guide.desc}</span></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Step Links */}
                                {step.links && (
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {step.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${link.primary
                                                    ? 'bg-growth-green text-deep-charcoal hover:bg-green-400'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                    }`}
                                            >
                                                {link.text} ↗
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Step Images */}
                            <div className="grid gap-8">
                                {step.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-transform hover:shadow-md">
                                        <div className="p-2 bg-gray-100 border-b border-gray-200 flex items-center">
                                            <div className="flex space-x-2 mr-4">
                                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            </div>
                                            <span className="text-xs text-gray-500 font-mono">{image.caption}</span>
                                        </div>
                                        <img
                                            src={image.src}
                                            alt={image.caption}
                                            className="w-full h-auto object-contain max-h-[500px] bg-white"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="pb-20 text-center">
                <p className="text-gray-500 mb-6">설정이 모두 완료되었나요?</p>
                <a
                    href="/guide"
                    className="inline-block bg-deep-charcoal text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105"
                >
                    코딩 가이드 보러가기
                </a>
            </div>
        </div>
    );
};

export default Environment;
