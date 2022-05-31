import React from "react";
import Gambar from "../images/strange.jpg";
import Gambar2 from "../images/strange2.jpg";

const Content = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={Gambar} alt="brian" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Brian Vidyanjaya</h2>
          <p className="mb-2">Enak, mantab, dan Lezat</p>
          <span>Rp 15.000,-</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={Gambar2} alt="brian" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Brian Vidyanjaya</h2>
          <p className="mb-2">Enak, mantab, dan Lezat</p>
          <span>Rp 15.000,-</span>
        </div>
      </div>
    </>
  );
};

export default Content;
