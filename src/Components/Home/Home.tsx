import React from "react";
import { primaryInfo } from "../../Data/Data";
import "./Home.scss";

function Home({ reference }: { reference: any }) {
  return (
    <div
      ref={reference}
      className="w-full h-full p-1 sm:p-2 md:pb-1 md:pr-1 flex flex-col-reverse md:flex-row items-center snap-center snap-always"
    >
      <div className="w-full md:w-1/2 h-1/2 md:h-full md:px-5 pt-20 flex flex-col justify-start items-center gap-y-5">
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl">
          Hey everyone,
          <br />
          myself {primaryInfo.name}
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4">
          and, I am currently working as {primaryInfo.currentPosition}
          <br />
          <span className="pi pi-at"></span> {primaryInfo.currentOrganisation}
        </p>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-end items-end bg-transparent">
        <div className="w-full md:w-2/3 h-full md:h-2/3 relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div className="cont m-auto top-0 left-0 right-0 bottom-0 p-3 bg-color2 z-10">
            {/* <img alt="img" src="Test Poster.jpg" /> */}
            <span className="w-fit h-fit m-auto text-xs">
              Image not available
            </span>
          </div>
          <div className="cont absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont absolute bottom-0 right-0 bg-color3"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
