import React, { useState } from "react";
// import {  Link } from "react-router-dom";
import Background from "./Background";
import beach_img from "../Assets/beach.svg";
import night_img from "../Assets/night.svg";
import clock_img from "../Assets/clock.svg";
import home_img from "../Assets/home.svg";
import help_img from '../Assets/help.svg';
import GuideSheet from "./GuideSheet";

const Page2 = () => {
    const [isGuideSheetOpen, setIsGuideSheetOpen] = useState(false);

    const openGuideSheet = () => {
    setIsGuideSheetOpen(true);
    };

    const closeGuideSheet = () => {
    setIsGuideSheetOpen(false);
    };

  return (
    <Background>
      <>
        <div className="bg-[#F7F9FE] font-custom rounded-2xl">
          <h2 className="text-3xl px-10 pt-6 mb-6">
            Can you figure out the definition of setting from the following
            examples?
          </h2>
          <p className="text-xl px-10 mb-8">
            (take a minute to think about this)
          </p>
          <div className="flex justify-around">
            <div className="border-[#CCCCCC] bg-white border-4 border-dashed rounded-xl px-6 py-3">
              <img src={beach_img} alt="" />
            </div>
            <div className="border-[#CCCCCC] bg-white border-4 border-dashed rounded-xl px-6 pt-4">
              <img src={night_img} alt="" />
            </div>
          </div>
          <div className="flex justify-around mt-3">
            <p className="text-xl">Sunday day at a beach</p>
            <p className="text-lg text-center w-[17rem]">
              A cold rainy night in a haunted house in October
            </p>
          </div>
          <p className="px-10 text-xl">
            So, what do you think the definition of setting is?
          </p>
          <div className="flex px-10 pt-4">
            <p className="text-xl pe-2">Any guesses?</p>
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                id="guess-input"
                className="w-[47rem] h-[2.5rem] border-4 border-dashed rounded-xl "
              />
              <label
                for="guess-input"
                className="absolute left-4 top-3 h-[0rem] text-[#B6B6B6]"
              >
                ______________________________________________________________________
              </label>
            </div>
            <div className="flex ps-4">
              <p className="text-lg pt-3 pe-4">Hint:</p>
              <button className="pe-4">
                <img src={clock_img} alt="" />
              </button>
              <button className="">
                <img src={home_img} alt="" />
              </button>
            </div>
          </div>
          <p className="bg-[#25A3A1] border-[#A4FDFB] border-4 border-dashed text-white text-2xl mx-10 rounded-xl px-4 py-2 mt-3">
            Setting is the time{" "}
            <img
              src={clock_img}
              className="h-8 w-8 inline align-middle"
              alt=""
            />{" "}
            and place{" "}
            <img
              src={home_img}
              className="h-8 w-8 inline align-middle"
              alt=""
            />{" "}
            of a story. It often answers the questions: when? and where?
          </p>
          <p className="text-xl px-10 mt-4 mb-6">
            The time of the story could be in the past, future, day, night, summer or winter. A story may take place in a school, a mall, a desert, an airplane or in a variety of other places.
          </p>
          <button onClick={openGuideSheet} className="absolute -right-[10rem] top-96">
            <img src={help_img} alt="" />
          </button>
          {isGuideSheetOpen && <GuideSheet onClose={closeGuideSheet} />}
        </div>
      </>
    </Background>
  );
};

export default Page2;
