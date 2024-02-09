import { Button } from "primereact/button";
import React, { RefObject, useRef, useEffect, useState } from "react";
import "./About.scss";
import { useAppContext } from "../../Services/AppContext";
import { aboutInfo } from "../../Data/Data";

type AboutProps = {
  reference: RefObject<HTMLDivElement>;
  setExpandAboutDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

function About({ reference, setExpandAboutDialog }: AboutProps) {
  const { showToast, dispatch } = useAppContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isScrollLeftDisabled, setIsScrollLeftDisabled] = useState(true);
  const [isScrollRightDisabled, setIsScrollRightDisabled] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const scrollLeftRight = (offset: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: offset, behavior: "smooth" });

      const isScrollLeftDisabledVar = container.scrollLeft <= 0;
      setIsScrollLeftDisabled(isScrollLeftDisabledVar);

      const isScrollRightDisabledVar =
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth - 1;
      setIsScrollRightDisabled(isScrollRightDisabledVar);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container && container.parentElement) {
        const isScrollLeftDisabledVar = container.scrollLeft <= 0;
        setIsScrollLeftDisabled(isScrollLeftDisabledVar);

        const isScrollRightDisabledVar =
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 1;
        setIsScrollRightDisabled(isScrollRightDisabledVar);

        const index = Math.round(container.scrollLeft / container.clientWidth);
        setActiveDotIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={reference}
      className="w-full 2xl:w-2/3 m-auto h-full p-2 md:pb-1 md:pr-1 flex justify-center items-center snap-center snap-always"
    >
      <div className="w-full md:w-1/2 h-full md:px-5 pt-20 flex flex-col justify-start items-center gap-y-5">
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl select-none">
          A little bit,
          <br />
          about me...
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4 select-none">
          my education, working experience,
          <br />
          contact and resume
        </p>
        <div className="relative w-full h-full">
          <div
            className="w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
            id="aboutContent"
            ref={containerRef}
          >
            <div className=" mt-16 flex space-x-3">
              {/* Education Section */}
              <div className="w-[97%] h-fit flex-shrink-0 snap-start snap-always">
                <h2 className="ml-2 text-2xl md:text-3xl text-color3 select-none">
                  Education
                </h2>
                <div className="h-[250px] p-2 flex flex-col justify-center gap-y-3 bg-color2 rounded-md relative">
                  <Button
                    title="Click to expand"
                    icon="pi pi-arrows-h"
                    className="absolute -top-6 right-5 py-3 rounded-full bg-color3 -rotate-45"
                    onClick={() => {
                      setExpandAboutDialog(true);
                      dispatch({
                        type: "SET_MODAL_CONTENT",
                        payload: {
                          header: "Education",
                          body: aboutInfo.education,
                        } as any,
                      });
                    }}
                  />
                  {aboutInfo.education.map((values) => (
                    <>
                      <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                        {values.year}
                      </h3>
                      <div className="flex">
                        <p className="ml-12 md:text-base">
                          {values.description}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              {/* Work Section */}
              <div className="w-[97%] h-full flex-shrink-0 snap-start snap-always">
                <h2 className="ml-2 text-2xl md:text-3xl text-color3 select-none">
                  Work
                </h2>
                <div className="h-[250px] p-2 flex flex-col justify-center gap-y-3 bg-color2 rounded-md relative">
                  <Button
                    title="Click to expand"
                    icon="pi pi-arrows-h"
                    className="absolute -top-6 right-5 py-3 rounded-full bg-color3 -rotate-45"
                    onClick={() => {
                      setExpandAboutDialog(true);
                      dispatch({
                        type: "SET_MODAL_CONTENT",
                        payload: {
                          header: "Work",
                          body: aboutInfo.work,
                        } as any,
                      });
                    }}
                  />
                  {aboutInfo.work.map((values) => (
                    <>
                      <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                        {values.year}
                      </h3>
                      <div className="flex">
                        <p className="ml-12 md:text-base">
                          {values.description}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              {/* Contact & Resume Section */}
              <div className="w-[97%] h-full flex-shrink-0 snap-start snap-always">
                <h2 className="ml-2 text-2xl md:text-3xl text-color3 select-none">
                  Contact & Resume
                </h2>
                <div className="h-[250px] p-2 flex flex-col justify-center gap-y-3 bg-color2 rounded-md relative">
                  <div className="flex justify-center gap-x-1 mb-10 sm:mb-0">
                    <Button
                      title="Click to copy email-id"
                      className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                      onClick={(e) => {
                        if (navigator.clipboard) {
                          navigator.clipboard.writeText(
                            e.currentTarget.innerHTML
                          );
                          showToast(
                            "success",
                            "Success",
                            "Email address copied"
                          );
                        } else {
                          showToast(
                            "error",
                            "Error",
                            "Sorry, but looks like there's some issue with it"
                          );
                        }
                      }}
                    >
                      <span className="pi pi-envelope md:text-2xl"></span>
                    </Button>

                    <Button
                      title="Click to chesee my linkedin profile"
                      className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/yash-a-a669b2237",
                          "_blank"
                        );
                      }}
                    >
                      <span className="pi pi-linkedin md:text-2xl"></span>
                    </Button>

                    <Button
                      title="Click to check my github profile"
                      className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://github.com/YashAgarwal1201",
                          "_blank"
                        );
                      }}
                    >
                      <span className="pi pi-github md:text-2xl"></span>
                    </Button>

                    <Button
                      title="Click to check my resume"
                      className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/1d7Ha14j-KYxfmVHf8Fi7RvaioUzGDw_u/view?usp=share_link",
                          "_blank"
                        );
                      }}
                    >
                      <span className="pi pi-id-card md:text-2xl"></span>
                    </Button>

                    <Button
                      title="Click to connect on telegram"
                      className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                      onClick={() => {
                        window.open("https://t.me/legoyashx", "_blank");
                      }}
                    >
                      <span className="pi pi-telegram text-xl md:text-2xl"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* dots */}
            <div className="flex justify-center items-center gap-x-2 mt-6 absolute left-0 md:left-auto right-0">
              {Object.keys(aboutInfo).map((keys, index) => (
                <div
                  key={keys}
                  className={`rounded-full ${
                    index === activeDotIndex
                      ? "bg-color4 w-3 h-3"
                      : "bg-color3 w-2 h-2"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 bottom-0 right-0 flex md:hidden flex-col-reverse gap-2">
            <Button
              disabled={isScrollLeftDisabled}
              title="scroll left"
              icon="pi pi-chevron-left"
              className="py-3 bg-color3 rounded-full"
              onClick={() => scrollLeftRight(-100)}
            />
            <Button
              disabled={isScrollRightDisabled}
              title="scroll right"
              icon="pi pi-chevron-right"
              className="py-3 bg-color3 rounded-full"
              onClick={() => scrollLeftRight(100)}
            />
          </div>
        </div>
      </div>

      <div className="w-0 md:w-1/2 h-1/2 md:h-full hidden md:flex justify-end items-end bg-transparent">
        <div className="hidden md:block w-[80%] md:w-[500px] h-full md:h-auto m-auto md:m-0 aspect-auto md:aspect-square relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div className="cont m-auto top-0 left-0 right-0 bottom-0 flex justify-center p-3 bg-color2 z-10 shadow-md">
            <div className="flex flex-col-reverse justify-center gap-2">
              <Button
                disabled={isScrollLeftDisabled}
                icon="pi pi-chevron-left"
                className="py-3 bg-color3 rounded-full"
                onClick={() => scrollLeftRight(-100)}
                title="scroll left"
              />
              <Button
                disabled={isScrollRightDisabled}
                icon="pi pi-chevron-right"
                className="py-3 bg-color3 rounded-full"
                onClick={() => scrollLeftRight(100)}
                title="scroll right"
              />
            </div>
          </div>
          <div className="cont hidden md:block absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont hidden md:block absolute bottom-0 right-0 bg-transparent md:bg-color3"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
