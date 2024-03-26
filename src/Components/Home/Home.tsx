import { useEffect, useState } from "react";

import logoo from "./../../assets/logoo.jpg";
import { primaryInfo } from "../../Data/Data";
import "./Home.scss";
import { HomeProps } from "../../Services/Interfaces";

const Home = ({ reference }: HomeProps) => {
  const [lessThan768px, setLessThan768px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setLessThan768px(window.innerHeight < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={reference}
      className="w-full h-full p-1 sm:p-2 md:pb-1 md:pr-1 flex flex-col-reverse md:flex-col mdl:flex-row items-center snap-start snap-always"
    >
      <div
        className={`w-full mdl:w-1/2 h-1/2 mdl:h-full md:px-5 ${
          lessThan768px ? "pt-10" : "pt-20"
        } flex flex-col justify-start items-center gap-y-5`}
      >
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl select-none">
          Hey everyone,
          <br />
          myself {primaryInfo.name}
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4 select-none">
          and, I am currently working as {primaryInfo.currentPosition}
          <br />
          <span className="pi pi-at"></span> {primaryInfo.currentOrganisation}
        </p>
      </div>
      <div className="w-full mdl:w-1/2 h-1/2 mdl:h-full flex justify-end items-end bg-transparent">
        <div className="hidden mdl:block w-[80%] mdl:w-[500px] 2xl:w-[600px] h-full md:h-auto m-auto md:m-0 aspect-auto md:aspect-square relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div className="cont m-auto top-0 left-0 right-0 bottom-0 p-3 bg-color2 z-10 shadow-md">
            <img
              alt="img"
              src={logoo}
              className="h-full m-auto rounded-md"
              // loading="lazy"
            />
          </div>
          <div className="cont hidden md:block absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont hidden md:block absolute bottom-0 right-0 bg-transparent mdl:bg-color3"></div>
        </div>

        <div className="inline-block mdl:hidden w-full h-full mdl:h-auto m-auto mdl:m-0 aspect-auto mdl:aspect-square relative">
          <div className="cont pattern absolute m-auto top-0 left-0 bottom-0 bg-color3"></div>
          <div className="cont pattern absolute m-auto top-0 right-0 bottom-0 bg-color3 "></div>
          <div className="w-[200px] sm:w-[300px] aspect-square absolute m-auto top-0 left-0 right-0 bottom-0 p-3 rounded-2xl bg-color2 z-10 shadow-md">
            <img
              alt="img"
              src={logoo}
              className="h-full m-auto rounded-md"
              // loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
