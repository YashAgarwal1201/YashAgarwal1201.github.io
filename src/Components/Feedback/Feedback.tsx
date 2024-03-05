import { useEffect, useState } from "react";

import { FeedbackProps } from "../../Services/Interfaces";

function Feedback({ reference, setExpandFeedbackDialog }: FeedbackProps) {
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
      className="w-full h-full p-2 md:pb-1 md:pr-1 flex flex-col mdl:flex-row justify-center items-center snap-center snap-always"
    >
      <div
        className={`w-full mdl:w-1/2 h-1/2 mdl:h-full md:px-5 ${
          lessThan768px ? "pt-5 sm:pt-10" : "pt-10 sm:pt-20"
        } flex flex-col justify-start items-center gap-y-5 select-none`}
      >
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl">
          Thank you,
          <br />
          for visiting this page
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4">
          also, want to share some feedback ? <br /> Please fill out this form
        </p>
      </div>
      <div className="w-full mdl:w-1/2 h-1/2 mdl:h-full flex justify-end items-end bg-transparent">
        <div className="hidden mdl:block w-[80%] md:w-[500px] 2xl:w-[600px]h-full md:h-auto m-auto md:m-0 aspect-auto md:aspect-square relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div
            title="Click to open form dialog"
            className="cont m-auto top-0 left-0 right-0 bottom-0 p-3 flex justify-center bg-color2 z-10 cursor-pointer select-none shadow-md"
            onClick={() => setExpandFeedbackDialog(true)}
          >
            <span className="m-auto text-4xl md:text-5xl pi pi-file-edit"></span>
          </div>
          <div className="cont hidden md:block absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont hidden md:block absolute bottom-0 right-0 bg-transparent md:bg-color3"></div>
        </div>

        <div className="block mdl:hidden w-full h-full mdl:h-auto m-auto mdl:m-0 aspect-auto mdl:aspect-square relative">
          <div className="cont absolute m-auto top-0 left-0 bottom-0 bg-color3"></div>
          <div className="cont absolute m-auto top-0 right-0 bottom-0 bg-color3 "></div>
          <div
            title="Click to open form dialog"
            className="w-[200px] sm:w-[300px] aspect-square absolute m-auto top-0 left-0 right-0 bottom-0 p-3 flex justify-center rounded-2xl bg-color2 z-10 cursor-pointer shadow-md select-none"
            onClick={() => setExpandFeedbackDialog(true)}
          >
            <span className="m-auto text-4xl md:text-5xl pi pi-file-edit"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
