"use client"
import React, { useState, useRef } from 'react';

const defaultItems = [
    '阅读新书', '多喝口水', '看动画片', '看纪录片', '复盘自己', 'Nodejs学习', 'React学习', 'Java学习'
];

function getPath(index: number, total: number, radius: number, center: number) {
    const angle = (2 * Math.PI) / total;
    const startAngle = index * angle - Math.PI / 2;
    const endAngle = startAngle + angle;
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);
    return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
}

export default function LuckyWheel({ items = defaultItems }: { items?: string[] }) {
    const SEGMENTS = 8;
    const RADIUS = 140;
    const CENTER = RADIUS;
    const [isSpinning, setIsSpinning] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const [rotateDeg, setRotateDeg] = useState(0);

    const spin = () => {
        if (isSpinning) return;
        const randIndex = Math.floor(Math.random() * SEGMENTS);
        const degreePerSegment = 360 / SEGMENTS;
        const rotate = 360 * 5 + (360 - randIndex * degreePerSegment - degreePerSegment / 2);
        setIsSpinning(true);
        setSelected(null);
        setRotateDeg(rotate);
        setTimeout(() => {
            setIsSpinning(false);
            setSelected(randIndex);
        }, 6000);
    };

    const COLORS = [
        '#fde68a', '#fca5a5', '#a7f3d0', '#93c5fd',
        '#fcd34d', '#f9a8d4', '#c7d2fe', '#fdba74'
    ];

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-[280px] h-[280px]">
                <svg
                    width={RADIUS * 2}
                    height={RADIUS * 2}
                    style={{
                        transition: isSpinning ? 'transform 4s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
                        transform: `rotate(${rotateDeg}deg)`
                    }}
                >
                    {[...Array(SEGMENTS)].map((_, i) => (
                        <path
                            key={i}
                            d={getPath(i, SEGMENTS, RADIUS, CENTER)}
                            fill={selected === i ? '#ef4444' : COLORS[i % COLORS.length]}
                            stroke="#fff"
                            strokeWidth="2"
                        />
                    ))}
                    {[...Array(SEGMENTS)].map((_, i) => {
                        const angle = (360 / SEGMENTS) * i - 360 / SEGMENTS / 2;
                        const rad = (angle * Math.PI) / 180;
                        const x = CENTER + Math.cos(rad) * (RADIUS * 0.65);
                        const y = CENTER + Math.sin(rad) * (RADIUS * 0.65) + 6;
                        return (
                            <text
                                key={i}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                fontSize="16"
                                fill="#333"
                                style={{ userSelect: 'none', pointerEvents: 'none' }}
                            >
                                {items[i]}
                            </text>
                        );
                    })}
                </svg>
                {/* 长指针，指向中心圆圈 */}
                <div className="absolute left-1/2 top-0" style={{ transform: 'translateX(-50%)' }}>
                    <svg width="12" height="160" viewBox="0 0 12 160">
                        <rect x="5" y="20" width="2" height="120" fill="#b91c1c" />
                        <polygon points="6,0 12,20 0,20" fill="#f87171" stroke="#b91c1c" strokeWidth="1" />
                    </svg>
                </div>
                {/* 中心圆圈 */}
                <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%,-50%)' }}>
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-red-400 flex items-center justify-center text-lg font-bold text-red-500 shadow">
                        抽奖
                    </div>
                </div>
            </div>
            <button
                className="px-6 py-2 bg-red-500 text-white font-bold rounded disabled:opacity-50"
                onClick={spin}
                disabled={isSpinning}
            >
                {isSpinning ? '旋转中...' : '开始抽奖'}
            </button>
            {selected !== null && (
                <p className="text-xl font-bold text-green-600">🎉 恭喜你抽中：{items[selected]}</p>
            )}
        </div>
    );
}