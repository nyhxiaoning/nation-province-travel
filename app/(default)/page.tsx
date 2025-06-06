export const metadata = {
  title: "world",
  description: "world see see",
};

import HomeMap from "@/components/map/home";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to World
        </h1>
        <HomeMap />
        <p className="text-lg text-white mb-8">traval china, travel world</p>
      </div>
    </>
  );
}
