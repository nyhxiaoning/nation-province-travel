import { useRef, useState } from "react";

export default function EightSegmentWheel() {
    const SEGMENTS = 8;
    const [isSpinning, setIsSpinning] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const wheelRef = useRef<HTMLDivElement>(null);

    const spin = () => {
        if (isSpinning) return;
        const randIndex = Math.floor(Math.random() * SEGMENTS);
        const degreePerSegment = 360 / SEGMENTS;
        const rotate = 360 * 5 + (360 - randIndex * degreePerSegment - degreePerSegment / 2);
        setIsSpinning(true);
        setSelected(null);
        if (wheelRef.current) {
            wheelRef.current.style.transition = 'transform 4s cubic-bezier(0.23, 1, 0.32, 1)';
            wheelRef.current.style.transform = `rotate(${rotate}deg)`;
        }
        setTimeout(() => {
            setIsSpinning(false);
            setSelected(randIndex);
        }, 4000);
    };

    const getSegmentStyle = (index: number) => {
        const rotate = (360 / SEGMENTS) * index;
        return {
            transform: `rotate(${rotate}deg) skewY(-45deg)`,
            background: selected === index ? '#ef4444' : '#d1d5db',
            transition: 'background 0.3s',
        };
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <div className="relative w-[240px] h-[240px]">
                <div
                    ref={wheelRef}
                    className="absolute w-full h-full rounded-full"
                    style={{ transform: 'rotate(0deg)', transition: 'transform 0s' }}
                >
                    {[...Array(SEGMENTS)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute left-1/2 top-1/2 w-1/2 h-1/2 origin-left"
                            style={getSegmentStyle(i)}
                        />
                    ))}
                </div>
                {/* 指针 */}
                {/* <div className="absolute left-1/2 top-1 w-0 h-0" style={{ transform: 'translateX(-50%)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <polygon points="12,0 20,12 4,12" fill="#f87171" stroke="#b91c1c" strokeWidth="1" />
                    </svg>
                </div> */}
            </div>
            <button
                className="px-4 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                onClick={spin}
                disabled={isSpinning}
            >
                {isSpinning ? '旋转中...' : '旋转灰色转盘'}
            </button>
            {selected !== null && <p className="text-base font-bold text-red-600">选中第 {selected + 1} 块</p>}
        </div>
    );
}