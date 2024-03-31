import React from "react";
import Background from "./Background";
import kid_img from '../Assets/kid.svg'
import cloud_img from '../Assets/cloud.svg'
import cloud2_img from '../Assets/cloud2.svg'
import cloud3_img from '../Assets/cloud3.svg'
import bulletin_img from '../Assets/bulletin.svg'

const Week1 = () => {
  return (
    <Background>
      <>
        <div className="bg-[#F7F9FE] font-custom rounded-2xl">
          <h1 className="text-2xl text-center text-white bg-[#FE6784] mx-96 border-[#FFAEBE] border-4 border-offset border-dashed py-2 mt-4 mb-4 rounded-full">
            Elements of Story writing
          </h1>
          <p className="px-10 mb-4 text-2xl">
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? <br /> Over the next week, we will be practicing the
            different elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </p>
          <div className="bg-[#25A3A1] ps-2 pt-2 flex relative mx-10 rounded-lg border-[#A4FDFB] border-4 border-dashed">
            <p className="text-2xl text-white pb-4 me-60 ">
              There are <strong>five</strong> elements which make the foundation
              for story writing. An element is an essential part of something
              and every fiction story has the same key elements:
            </p>
            <img src={kid_img} className="absolute right-10 top-2" alt="" />
          </div>
          <div className="flex justify-evenly mt-8">
            <div className="relative">
                <img src={cloud_img}  alt="" />
                <p className="absolute left-12 top-10 text-lg">SETTING</p>
            </div>
            <div className="relative">
                <img src={cloud2_img} alt="" />
                <p className="absolute top-10 left-10 text-lg">CHARACTERS</p>
            </div>
            <div className="relative">
                <img src={cloud_img} alt="" />
                <p className="absolute top-10 left-16 text-lg">PLOT</p>
            </div>
            <div className="relative">
                <img src={cloud3_img} alt="" />
                <p className="absolute top-4 left-10 text-center  text-lg">PROBLEM <br /> OR <br /> CONFLICT</p>
            </div>
            <div className="relative">
                <img src={cloud2_img} alt="" />
                <p className="absolute top-10 left-8 text-lg">RESOLUTION</p>
            </div>
          </div>
          <p className="text-2xl ps-10 pe-20 mt-4">You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.</p>
          <div className="bg-[#FE6784] px-2 py-1 mt-4 mb-10 relative mx-10 rounded-xl">
            <img src={bulletin_img} className="w-[100%]" alt="" />
            <p className="text-2xl absolute left-10 top-4 pe-10">For today’s lesson, we will try to understand and practice writing the setting for our stories.</p>
            <p className="text-2xl top-20 left-10 absolute">The setting is an important element of every fiction story.</p>
          </div>
        </div>
      </>
    </Background>
  );
};

export default Week1;
