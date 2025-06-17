import LuckyWheel from '@/components/LuckyWheel';

import Link from 'next/link';
export default function Home() {
    const items = ['一等奖', '二等奖', '三等奖', '再来一次', '谢谢参与', '特等奖', '现金红包', '虚拟道具'];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">🎡 幸运大转盘</h1>
            <LuckyWheel items={items} />
            <p className="text-lg text-black mt-4 bg-blue-400 ">
                <Link href={'/'}>
                回到首页
                </Link>
            </p>
        </main>
    );
}
