import Image from "next/image";
import React from "react";
import Msi from "../public/images/msi.png";

function Landing() {
  return (
    <section className=" mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8 ">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-[#647DEE] to-[#7F53AC] text-transparent bg-clip-text">
            Welcome
          </span>
          <span className="block">To Takealot</span>

        </h1>

        <div className="space-x-8">
          <button className="relative inline-flex
          items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 ">     <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">Shop Tech</span></button>
          <a className="link">Get Started</a>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px] ">
        <Image src={Msi} alt="Msi laptop"


        width={""}
        height={""}

        priority />
      </div>

      <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">



      </div>

    </section>
  );
}

export default Landing;
