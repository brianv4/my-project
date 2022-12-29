import React from "react";
import bgImg2 from '../images/google2.svg'

const Content2 = () => {
  return (
    <>        
      <div className='w-full h-screen bg-slate-700 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div>
              <img className='w-full' src={bgImg2} alt="/" />
          </div>
          <div className='flex flex-col justify-center md:items-start w-full px-10 py-8 font-mono text-white'>
              <p className='text-3xl mb-2'>Eliminate Wasted Cloud Expenses</p>
              <p className='text-2xl text-slate-300 mb-2'>Connect Cloud Accounts & Resources</p>
              <p className='text-lg'>Follow easy steps to connect to your cloud account or subscription. Once connected, all the cloud resources that can bring you savings will be fetched and displayed on the Cloud Resources page.</p>
              <button className='inline-block border-2 border-blue-500 text-blue-500 leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-200 ease-in-out py-3 px-6 sm:w-[40%] my-4'>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
