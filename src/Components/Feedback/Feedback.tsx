import React from "react";
import { useAppContext } from "../../Services/AppContext";

function Feedback({ reference }: { reference: any }) {
  const { showToast } = useAppContext();
  return (
    <div
      ref={reference}
      className="w-full h-full p-2 md:pb-1 md:pr-1 flex flex-col md:flex-row justify-center items-center snap-center snap-always"
    >
      <div className="w-full md:w-1/2 h-1/2 md:h-full md:px-5 pt-20 flex flex-col justify-start items-center gap-y-5">
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl">
          Thank you,
          <br />
          for visiting this page
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4">
          also, want to share some feedback ? <br /> Please fill out this form
        </p>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-end items-end bg-transparent">
        <div className="w-full md:w-2/3 h-full md:h-2/3 relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div
            title="Click to open form dialog"
            className="cont m-auto top-0 left-0 right-0 bottom-0 p-3 flex justify-center bg-color2 z-10 cursor-pointer select-none"
            onClick={() => showToast("info", "Info", "Under development")}
          >
            {/* <img alt="img" src="Test Poster.jpg" /> */}
            <span className="m-auto text-4xl md:text-5xl pi pi-file-edit"></span>
          </div>
          <div className="cont absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont absolute bottom-0 right-0 bg-color3"></div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
