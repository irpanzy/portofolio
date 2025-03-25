"use client";
import Lanyard from './components/Lanyard/Lanyard';
import RotatingText from "./components/RotatingText/RotatingText";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050a30]">
      <div className="container mx-auto h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-2'>I'm a Ready to Work</h1>
            <RotatingText
              texts={['Web Development', 'Web Design', 'Mobile Development', 'Mobile Design']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl sm:text-3xl md:text-4xl font-bold inline-flex transition-all"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div className="flex justify-center items-center">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
