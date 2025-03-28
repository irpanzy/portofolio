"use client";
import BlurText from './components/BlurText/BlurText';
import Lanyard from './components/Lanyard/Lanyard';
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from './components/SplitText/SplitText';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050a30] flex items-center justify-center">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-12 lg:items-center">
        {/* Left Section */}
        <div className="lg:col-span-7 flex justify-center lg:justify-start">
          <div className='flex flex-col gap-6 text-center lg:text-left'>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h1 className='text-2xl font-bold text-white'>I'm Ready For Job</h1>
              <RotatingText
                texts={['Web Development', 'Web Programming', 'Mobile Development', 'Mobile Programming']}
                mainClassName="px-2 sm:px-3 bg-cyan-200 text-black py-2 rounded-lg text-2xl font-bold inline-flex transition-all"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <div className='flex flex-col items-center lg:items-start'>
              <SplitText
                text="I'm Irfan Muria"
                className="text-3xl sm:text-4xl text-white font-bold"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
              <SplitText
                text="Full Stack Developer"
                className="text-3xl sm:text-4xl text-cyan-200 font-bold"
                delay={75}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
            <BlurText
              text="As a passionate Software Engineering student at Telkom University with a focus on Fullstack Web Development, I combine a strong theoretical foundation with hands-on experience. My ability to adapt, collaborate, and solve complex problems enables me to thrive in dynamic tech environments."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-lg sm:text-xl text-white mb-8 max-w-2xl"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </div>
  );
}
