import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import pencil_img from "../Assets/pencil.svg";
import bag_img from "../Assets/bag.svg";
import open_book_img from "../Assets/open_book.svg";
import ruler_img from "../Assets/ruler.svg";
import book_img from "../Assets/book.svg";
import cap_img from "../Assets/cap.svg";
import vector1 from "../Assets/Vector.svg";
import vector2 from "../Assets/Vector2.svg";
import week_img from "../Assets/week.svg";
import next_img from "../Assets/next.svg";
import prev_img from "../Assets/previous.svg";
import voice_img from '../Assets/voice.svg'
import info_img from '../Assets/info.svg'
import { Link } from "react-router-dom";

const Background = ({ children }) => {
  return (
    <div className="relative w-full h-full bg-[#F8D1E0] overflow-hidden">
      <a href="/" className="">
        <img
          src={logo}
          alt="Logo"
          className="absolute top-0 left-0 w-40 h-28 hover:cursor-pointer"
        />
      </a>
      <div>
        <img
          src={week_img}
          alt="week_image"
          className="absolute top-4 left-44"
        />
        <p className="text-white font-bold text-xl absolute left-[13.5rem] top-6">
          Week 1
        </p>
      </div>
      <img
        src={pencil_img}
        alt="pencil_image"
        className="absolute top-1/4 z-10 left-0 w-20 h-20 transform -translate-y-1/2"
      />
      <img
        src={bag_img}
        alt="bag_image"
        className="absolute top-1/2 left-0 w-20 h-20 transform -translate-y-1/2"
      />
      <img
        src={open_book_img}
        alt="open_book_img"
        className="absolute z-10 top-3/4 left-0 w-20 h-20 "
      />
      <img
        src={ruler_img}
        alt="ruler_img"
        className="absolute top-32 right-0 w-30 h-24 "
      />
      <img
        src={book_img}
        alt="book_img"
        className="absolute z-10 top-2/4 -right-3 w-20 h-24"
      />
      <img
        src={cap_img}
        alt="cap_img"
        className="absolute z-10 top-3/4 right-0 w-20 h-24"
      />
      <img
        src={vector1}
        alt="vector_1"
        className="absolute top-20 left-0 w-16 h-full"
      />
      <img
        src={vector2}
        alt="vector_2"
        className="absolute top-20 right-0  h-full"
      />
      <div className="absolute bottom-10 flex mx-auto justify-between">
        <button className="ms-44">
          <img src={voice_img} alt="" />
        </button>
        <div className="flex items-center ms-[25rem] justify-between">
          <Link to="/">
            <button className="rounded-md ps-10 pe-4 hover:cursor-pointer">
                <img src={prev_img} alt="" />          
            </button>
          </Link>
          
          <select
            className="bg-[#CD3F97] px-4 py-2 text-white rounded-md focus:ring-1 focus:ring-white">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <Link to="/page2">
          <button className="ps-4">
              <img src={next_img} alt="" />
          </button></Link>
        </div>
        <button className="ms-[28rem]">
          <img src={info_img} alt="" />
        </button>
      </div>
      <div className="relative z-10 top-[4.5rem] mb-44 mx-auto flex flex-col w-4/5">
        {children}
      </div>
    </div>
  );
};

export default Background;
