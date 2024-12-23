import Image from "next/image";
import { LuMonitorPlay } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#f3f4f6"
            d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,186.7C672,203,768,245,864,261.3C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-5 container mx-auto px-6 pt-12 pb-32">
        <div className="flex flex-col items-center px-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-semibold text-black leading-tight mb-8 text-center">
              Keeping Your Favorite Shoes<br/> in The Best Performance
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className=" bg-orange-400 font-normal text-md text-white px-10 py-5 rounded-md transition-colors w-full sm:w-auto">
                Get Started
              </button>
              <button className="flex items-center justify-center gap-5 text-black transition-colors w-full sm:w-auto">
                <span className="w-16 h-16 flex items-center justify-center border-2 border-orange-400 rounded-full ">
                  <FaPlay className=" text-orange-400" size={20}/>
                </span>
                Watch Intro
              </button>
            </div>
          </div>
          
           
          
          <div className="relative flex justify-center items-center  min-h-screen">
          <div className="w-[75rem] h-[37rem] bg-sky-400 rounded-xl relative z-0"></div>
          <Image
            src="/images/shoe.png"
            alt="Shoe"
            width={570}
            height={570}
            className="absolute z-10 bottom-32"
            priority
          />
        </div>
      </div>
        
      </div>

    </div>
  );
}
