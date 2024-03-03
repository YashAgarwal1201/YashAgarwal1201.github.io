import { useEffect, useRef, useState } from "react";

import { Button } from "primereact/button";

import "./About.scss";
import ContactLinks from "./ContactLinks/ContactLinks";
import { aboutInfo } from "../../Data/Data";
import { useAppContext } from "../../Services/AppContext";
import { AboutProps } from "../../Services/Interfaces";

const ScrollLeftRightBtns = ({
  isScrollLeftDisabled,
  isScrollRightDisabled,
  scrollLeftRight,
}: {
  isScrollLeftDisabled: boolean;
  isScrollRightDisabled: boolean;
  scrollLeftRight: any;
}) => {
  return (
    <>
      <Button
        disabled={isScrollLeftDisabled}
        icon="pi pi-chevron-left"
        className="py-3 bg-color3 text-color1 rounded-full"
        onClick={() => scrollLeftRight(-100)}
        title="scroll left"
      />
      <Button
        disabled={isScrollRightDisabled}
        icon="pi pi-chevron-right"
        className="py-3 bg-color3 text-color1 rounded-full"
        onClick={() => scrollLeftRight(100)}
        title="scroll right"
      />
    </>
  );
};

function About({ reference, setExpandAboutDialog }: AboutProps) {
  const { state, dispatch } = useAppContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isScrollLeftDisabled, setIsScrollLeftDisabled] = useState(true);
  const [isScrollRightDisabled, setIsScrollRightDisabled] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const detailsSubContainersStyles =
    "w-[97%] h-fit flex-shrink-0 snap-start snap-always";

  const handleDotClick = (index: number) => {
    const container = containerRef.current;
    if (container) {
      // Assuming all your subcontainers have the same width
      // and are directly adjacent to each other in the scroll container
      const targetScrollPosition = index * container.clientWidth;
      container.scrollTo({ left: targetScrollPosition, behavior: "smooth" });

      // Update the disabled state for the scroll buttons if needed
      setIsScrollLeftDisabled(index === 0);
      setIsScrollRightDisabled(index === Object.keys(aboutInfo).length - 1);
    }
  };

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
      className="w-full h-full p-2 md:pb-1 md:pr-1 flex justify-center items-center snap-center snap-always"
    >
      <div className="w-full md:w-1/2 h-full md:px-5 pt-10 sm:pt-20 flex flex-col justify-start items-center gap-y-5">
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
            <div className="mt-10 sm:mt-16 flex space-x-3">
              {aboutInfo.map((values, key) => {
                // if (values.header) {
                  return (
                    <div className={detailsSubContainersStyles} key={key}>
                      <h2
                        className={`${
                          state.easyMode ? "mr-2 ml-0 text-right" : "ml-2 mr-0"
                        } text-2xl md:text-3xl font-medium text-color3 select-none`}
                      >
                        {values.header}
                      </h2>
                      <div
                        className={` ${
                          activeDotIndex === key ? "active-section" : ""
                        } h-[225px] sm:h-[245px] p-2 flex flex-col gap-y-3 justify-center bg-color2 rounded-md relative border-2 border-transparent`}
                      >
                        {!values.header.includes("Contact") && (
                          <Button
                            title="Click to expand"
                            icon="pi pi-arrows-h"
                            className={`absolute -top-6 ${
                              state.easyMode
                                ? "left-5 right-auto"
                                : "left-auto right-5"
                            } py-3 rounded-full bg-color3 text-color1 -rotate-45`}
                            onClick={() => {
                              setExpandAboutDialog(true);
                              dispatch({
                                type: "SET_MODAL_CONTENT",
                                payload: {
                                  header: values.header,
                                  body: values.content,
                                } as any,
                              });
                            }}
                          />
                        )}
                        {!values.header.includes("Contact") ? (
                          values.content?.map(
                            (val: any, k) =>
                              val.year &&
                              val.description && (
                                <div key={k} className="flex flex-col gap-y-3">
                                  <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                                    {val.year ? val.year : ""}
                                  </h3>
                                  <div className="flex">
                                    <p className="ml-8 sm:ml-12 md:text-base">
                                      {val.description}
                                    </p>
                                  </div>
                                </div>
                              )
                          )
                        ) : (
                          <ContactLinks
                            key={key}
                            contactContent={values.content}
                          />
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            {/* dots */}
            <div className="flex justify-center items-center gap-x-2 mt-6 absolute left-0 md:left-auto right-0">
              {Object.keys(aboutInfo)?.map((keys, index) => (
                <div
                  key={keys}
                  className={`rounded-full ${
                    index === activeDotIndex
                      ? "bg-color4 w-3 h-3 shadow-md"
                      : "bg-color3 w-2 h-2 shadow-none"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 bottom-0 right-0 flex md:hidden flex-col-reverse gap-2">
            <ScrollLeftRightBtns
              isScrollLeftDisabled={isScrollLeftDisabled}
              isScrollRightDisabled={isScrollRightDisabled}
              scrollLeftRight={scrollLeftRight}
            />
          </div>
        </div>
      </div>

      <div className="w-0 md:w-1/2 h-1/2 md:h-full hidden md:flex justify-end items-end bg-transparent">
        <div className="hidden md:block w-[80%] md:w-[500px] 2xl:w-[600px] h-full md:h-auto m-auto md:m-0 aspect-auto md:aspect-square relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div className="cont m-auto top-0 left-0 right-0 bottom-0 flex justify-center p-3 bg-color2 z-10 shadow-md">
            <div className="flex flex-col-reverse justify-center gap-2">
              <ScrollLeftRightBtns
                isScrollLeftDisabled={isScrollLeftDisabled}
                isScrollRightDisabled={isScrollRightDisabled}
                scrollLeftRight={scrollLeftRight}
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
