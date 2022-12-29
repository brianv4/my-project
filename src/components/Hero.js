import React from "react";
import bgImg from '../images/google.svg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-900 flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start sm:items-center w-full px-2 py-8 font-mono text-white'>
            <p className='text-2xl sm:text-md'>Unique Sequencing & Production</p>
            <h1 className='py-3 text-5xl md:text-7xl:text-center font-bold'>E-Commerce Tokopenia</h1>
            <p className='text-2xl'>This is our Tech brand.</p>
            <button className='bg-blue-500 rounded-md py-3 px-6 sm:w-[60%] my-4 text-white'>Get Started</button>
        </div>
        <div>
            <img className='w-full mx-auto mt-6 sm:w-10/12 lg:w-full' src={bgImg} alt="/" />
        </div>
    </div>
</div>
  );
};

export default Hero;
