import React from "react";
import Rombuses from "../../assets/rombuses.png";
import BackButton from "../BackButton";

const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput')

const Layer002 = () => {
  return (
    <>
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center ">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>
        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            CLICK TO TYPE
          </p>
          <form
            className="relative z-10"
            action="javascript:throw new Error('React form unexpectedly submitted.')"
          >
            <div className="flex flex-col items-center"></div>
            <input
              id="newInput"
              className="text-5xl sm:text-6xl font-light text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[375px] sm:w-[375px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              placeholder="Introduce Yourself"
              type="text"
              autoComplete="off"
              autoFocus="name"
            />
            
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>
          <img
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 w-[480px] h-[480px] md:w-[762px] md:h-[762px] animate-spin-slow rotate-190"
            alt="Diamond Large"
            loading="lazy"
            width={762}
            height={762}
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={Rombuses}
          />
        </div>
        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:pc-9 pc-13">
          <a className="inset-0" aria-label="Back" href="/">
            <BackButton />
          </a>
        </div>
      </div>
    </>
  );
};

export default Layer002;
