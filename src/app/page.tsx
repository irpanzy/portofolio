import Image from "next/image";
import Lanyard from './components/Lanyard/Lanyard';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050a30]">
      <div className="container mx-auto h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <div>A</div>
          </div>
          <div className="flex justify-center items-center">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
