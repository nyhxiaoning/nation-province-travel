import { useRef, useState } from "react";

const SEGMENTS = 8;
const RADIUS = 100;
const CENTER = RADIUS;
const COLORS = {
    normal: "#d1d5db",
    selected: "#ef4444",
};

function getPath(index: number, total: number, radius: number) {
    const angle = (2 * Math.PI) / total;
    const startAngle = index * angle - Math.PI / 2;
    const endAngle = startAngle + angle;
    const x1 = CENTER + radius * Math.cos(startAngle);
    const y1 = CENTER + radius * Math.sin(startAngle);
    const x2 = CENTER + radius * Math.cos(endAngle);
    const y2 = CENTER + radius * Math.sin(endAngle);
    return `
    M ${CENTER} ${CENTER}
    L ${x1} ${y1}
    A ${radius} ${radius} 0 0 1 ${x2} ${y2}
    Z
  `;
}

export default function EightSegmentWheel() {
    const [tooltip, setTooltip] = useState<{ index: number; x: number; y: number } | null>(null);
    const segmentContents = [
        '海南', '四川', '云南', '上海',
        '福建', '新疆', '内蒙古', '天津',
    ];
    const [isSpinning, setIsSpinning] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const [rotateDeg, setRotateDeg] = useState(0);
    const wheelRef = useRef<SVGSVGElement>(null);

    const spin = () => {
        if (isSpinning) return;
        const randIndex = Math.floor(Math.random() * SEGMENTS);
        const degreePerSegment = 360 / SEGMENTS;
        const rotate =
            360 * 5 +
            (360 - randIndex * degreePerSegment - degreePerSegment / 2);
        setIsSpinning(true);
        setSelected(null);
        setRotateDeg(rotate);

        setTimeout(() => {
            setIsSpinning(false);
            setSelected(randIndex);
        }, 4000);
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-10">
            <div className="relative w-[220px] h-[220px]">
                <svg
                    ref={wheelRef}
                    width={RADIUS * 2}
                    height={RADIUS * 2}
                    style={{
                        transition: isSpinning ? "transform 4s cubic-bezier(0.23, 1, 0.32, 1)" : "none",
                        transform: `rotate(${rotateDeg}deg)`,
                    }}
                >
                    {[...Array(SEGMENTS)].map((_, i) => (
                        <path
                            key={i}
                            d={getPath(i, SEGMENTS, RADIUS)}
                            fill={selected === i ? COLORS.selected : COLORS.normal}
                            stroke="#fff"
                            strokeWidth="2"
                            style={{ cursor: 'pointer' }}
                            onClick={e => {
                                const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                                if (rect) {
                                    setTooltip({
                                        index: i,
                                        x: e.clientX - rect.left,
                                        y: e.clientY - rect.top,
                                    });
                                }
                            }}
                   />
                    ))}
                    {tooltip && (
                        <foreignObject x={tooltip.x - 60} y={tooltip.y - 40} width="120" height="40">
                            <div
                                style={{
                                    background: '#fff',
                                    border: '1px solid #888',
                                    borderRadius: 6,
                                    padding: 6,
                                    fontSize: 12,
                                    boxShadow: '0 2px 8px #0002',
                                    pointerEvents: 'auto'
                                }}
                                onClick={e => e.stopPropagation()}
                                onMouseLeave={() => setTooltip(null)}
                            >
                                {segmentContents[tooltip.index]}
                            </div>
                        </foreignObject>
                    )}
                </svg>
            </div>
            <button
                className="px-4 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
                onClick={spin}
                disabled={isSpinning}
            >
                {isSpinning ? "旋转中..." : "旋转灰色圆盘"}
            </button>
            {selected !== null && (
                <p className="text-base font-bold text-red-600">
                    选中 {segmentContents[selected]} 
                </p>
            )}
        </div>
    );
}