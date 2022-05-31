import React from "react";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center text-center">
      <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-black font-mono mb-14">
        Hello👋!! <span className="font-semibold">I'm Brian Vidyanjaya</span>
      </h1>
      <button className="py-6 px-10 bg-blue-500 rounded-full text-3xl hover:bg-indigo-500 transition duration-300 ease-in-out flex items-center animate-bounce" to="/">
        ORDER NOW
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
