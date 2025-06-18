
import LuckyWheel from '@/components/LuckyWheel';
import EightSegmentWheel from '@/components/EightSegmentWheel';

import Link from 'next/link';
export default function Home() {
    const items = ['阅读新书', '多喝口水', '看动画片', '看纪录片', '复盘自己', 'Nodejs学习', 'React学习', 'Java学习'
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">🎡 幸运大转盘</h1>
            <LuckyWheel items={items} />
            <EightSegmentWheel />
            <p className="text-lg text-black mt-4 bg-blue-400 ">
                <Link href={'/'}>
                回到首页
                </Link>
            </p>
        </main>
    );
}
