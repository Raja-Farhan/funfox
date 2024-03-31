import React from "react";
import close_img from '../Assets/close.svg'
import input_img from '../Assets/input.svg'
import clock_img from '../Assets/clock.svg'
import home_img from '../Assets/home.svg'

const GuideSheet = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-black bg-opacity-55 bg-blur-lg text-white w-full h-[48rem] mx-40 mt-44 pb-44 p-6 rounded-xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <img src={close_img} alt="" />
        </button>
        <h2 className="text-3xl text-center mb-4 mt-8">Guide Sheet</h2>
        <p className="text-xl mt-24">So, what do you think the definition of settings</p>
        <div className="mt-12 relative">
            <p>Any guesses? <img src={input_img} className="inline me-4" alt="" /> Hint: <img src={clock_img} className="inline ps-2 pe-4" alt="" /><img src={home_img} className="inline" alt="" /></p>
            <p className="absolute left-36 top-3 font-bold text-black">&gt; Setting is the time and place of story</p>
        </div>
      </div>
    </div>
  );
};

export default GuideSheet;