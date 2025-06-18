'use client';
import React, { useState, useRef } from 'react';

import EightSegment from "./EightSegmentWheel"

const defaultItems = ['一等奖', '二等奖', '三等奖', '谢谢参与', '再来一次', '神秘奖'];

export default function LuckyWheel({ items = defaultItems }: { items?: string[] }) {
    const [isSpinning, setIsSpinning] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const wheelRef = useRef<HTMLDivElement>(null);

    const spin = () => {
        if (isSpinning) return;
        const count = items.length;
        const randIndex = Math.floor(Math.random() * count);
        const degreePerSegment = 360 / count;
        const rotate = 360 * 5 + (360 - randIndex * degreePerSegment - degreePerSegment / 2); // 旋转角度偏移对准中间
        setIsSpinning(true);
        setSelected(null);

        if (wheelRef.current) {
            wheelRef.current.style.transition = 'transform 4s ease-out';
            wheelRef.current.style.transform = `rotate(${rotate}deg)`;
        }

        setTimeout(() => {
            setIsSpinning(false);
            setSelected(randIndex);
        }, 4000);
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-[300px] h-[300px]">
                
                <div
                    ref={wheelRef}
                    className="absolute w-full h-full rounded-full border-[8px] border-purple-600 bg-white"
                    style={{
                        transform: 'rotate(0deg)',
                        transition: 'transform 0s',
                    }}
                >
                    {items.map((item, index) => {
                        const rotate = (360 / items.length) * index;
                        return (
                            <div
                                key={index}
                                className="absolute w-1/2 left-1/2 top-1/2 origin-left text-sm"
                                style={{
                                    transform: `rotate(${rotate}deg) translateX(-50%)`,
                                }}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
 
                {/* 指针，底边朝下，尖端正对圆心 */}
                <div className="absolute left-1/2 top-1 w-0 h-0" style={{ transform: 'translateX(-80%)' }}>
                    <svg width="32" height="32" viewBox="0 0 32 32">
                        <polygon points="16,0 26,18 6,18" fill="#f87171" stroke="#b91c1c" strokeWidth="2" />
                    </svg>
                </div>  
            </div>        

            <button
                className="px-6 py-2 bg-red-500 text-white font-bold rounded disabled:opacity-50"
                onClick={spin}
                disabled={isSpinning}
            >
                {isSpinning ? '旋转中...' : '开始抽奖'}
            </button>

            {selected !== null && <p className="text-xl font-bold text-green-600">🎉 恭喜你抽中：{items[selected]}</p>}
            <EightSegment />
        </div>
    );
}
