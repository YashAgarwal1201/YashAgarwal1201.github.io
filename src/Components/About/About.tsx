import { Button } from "primereact/button";
import React, { useRef } from "react";
import "./About.scss";
import { useAppContext } from "../../Services/AppContext";

function About({
  reference,
  setExpandAboutDialog,
}: {
  reference: React.MutableRefObject<null>;
  setExpandAboutDialog: any;
}) {
  const { showToast, dispatch } = useAppContext();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container && container.parentElement) {
      container.scrollLeft -= container.parentElement.scrollWidth;
      console.log(container.scrollLeft);
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container && container.parentElement) {
      container.scrollLeft += container.parentElement.scrollWidth;
    }
  };

  // // Calculate disabled state for left scroll button
  // const isScrollLeftDisabled =
  //   !containerRef.current ||
  //   containerRef.current.scrollLeft === 0 ||
  //   !containerRef.current.parentElement;

  // // Calculate disabled state for right scroll button
  // const isScrollRightDisabled =
  //   !containerRef.current ||
  //   containerRef.current.scrollLeft >=
  //     containerRef.current.scrollWidth - containerRef.current.clientWidth ||
  //   !containerRef.current.parentElement;

  return (
    <div
      ref={reference}
      className="w-full h-full p-2 md:pb-1 md:pr-1 flex justify-center items-center snap-center snap-always"
    >
      <div className="w-full md:w-1/2 h-full md:px-5 pt-20 flex flex-col justify-start items-center gap-y-5">
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl">
          A little bit,
          <br />
          about me...
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4">
          and, I am currently working as Associate UI Developer
          <br />
          <span className="pi pi-at"></span> Techolution, India
        </p>
        <div className="relative w-full h-full">
          <div
            className="w-full h-full overflow-x-auto overflow-y-hidden snap-x"
            id="aboutContent"
            ref={containerRef}
          >
            <div className=" mt-16 flex space-x-4">
              {/* Education Section */}
              <div className="w-full h-fit flex-shrink-0 snap-center snap-always">
                <h2 className="text-xl md:text-3xl text-color3">Education</h2>
                <div className="h-[200px] p-2 flex flex-col justify-center gap-y-3 bg-color2 rounded-md relative">
                  <Button
                    title="Click to expand"
                    icon="pi pi-arrows-h"
                    className="absolute -top-6 right-5 py-3 rounded-full bg-color3 -rotate-45"
                    onClick={() => {
                      showToast("info", "Info", "Under development");
                      setExpandAboutDialog(true)
                      dispatch({
                        type: "SET_MODAL_CONTENT",
                        payload: { header: "Education", body: "temp" } as any,
                      });
                    }}
                  />
                  <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                    2007 - 2018
                  </h3>
                  <div className="flex">
                    <p className="ml-12 md:text-base">
                      Modern Era Public School, Bijnor.
                    </p>
                  </div>
                  <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                    2018 - 2022
                  </h3>
                  <div className="flex">
                    <p className="ml-12 text-sm md:text-base">
                      Bachelor of Technology{" "}
                      <span className="pi pi-at text-sm"></span> DIT University,
                      Dehradun.
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Section */}
              <div className="w-full h-full flex-shrink-0 snap-center snap-always">
                <h2 className="text-3xl text-color3">Work</h2>
                <div className="h-[200px] p-2 flex flex-col gap-y-3 bg-color2 rounded-md relative">
                  <Button
                    title="Click to expand"
                    icon="pi pi-arrows-h"
                    className="absolute -top-6 right-5 py-3 rounded-full bg-color3 -rotate-45"
                    onClick={() =>
                      showToast("info", "Info", "Under development")
                    }
                  />
                  <h3 className="w-fit pb-1 text-lg font-medium border-b-2 border-color4">
                    December, 2022 - June, 2023
                  </h3>
                  <div className="flex">
                    <p className="ml-12 cursor-pointer">
                      UI Developer - Intern{" "}
                      <span className="pi pi-at text-sm"></span> Techolution,
                      India.
                    </p>
                  </div>
                  <h3 className="w-fit pb-1 text-lg font-medium border-b-2 border-color4">
                    July, 2022 - present
                  </h3>
                  <div className="flex">
                    <p className="ml-12 cursor-pointer">
                      Associate UI Developer{" "}
                      <span className="pi pi-at text-sm"></span> Techolution,
                      India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact & Resume Section */}
              <div className="w-full h-full flex-shrink-0 snap-center snap-always">
                <h2 className="text-3xl text-color3">Contact & Resume</h2>
                <div className="h-[200px] p-2 flex flex-col justify-center gap-y-3 bg-color2 rounded-md relative">
                  <Button
                    title="Click to expand"
                    icon="pi pi-arrows-h"
                    className="absolute -top-6 right-5 py-3 rounded-full bg-color3 -rotate-45"
                    onClick={() =>
                      showToast("info", "Info", "Under development")
                    }
                  />
                  <h3 className="w-fit pb-1 text-lg font-medium border-b-2 border-color4">
                    Email Address
                  </h3>
                  <div className="flex">
                    <p
                      className="ml-12 cursor-pointer"
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
                      legoyashx@hotmail.com
                    </p>
                  </div>
                  <h3 className="w-fit pb-1 text-lg font-medium border-b-2 border-color4">
                    LinkedIn
                  </h3>
                  <div className="flex">
                    <p
                      className="ml-12 cursor-pointer"
                      onClick={() =>
                        showToast(
                          "error",
                          "Error",
                          "Sorry but looks like the link is broken"
                        )
                      }
                    >
                      Link to my linkedin profile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 right-0 flex md:hidden flex-col-reverse gap-2">
            <Button
              // disabled={isScrollLeftDisabled}
              icon="pi pi-chevron-left"
              className="py-3 bg-color3 rounded-full"
              onClick={() => scrollLeft()}
            />
            <Button
              // disabled={isScrollRightDisabled}
              icon="pi pi-chevron-right"
              className="py-3 bg-color3 rounded-full"
              onClick={() => scrollRight()}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full hidden md:flex justify-end items-end bg-transparent">
        <div className="w-full md:w-2/3 h-full md:h-2/3 relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div className="cont m-auto top-0 left-0 right-0 bottom-0 flex justify-center p-3 bg-color2 z-10">
            <div className="flex flex-col-reverse justify-center gap-2">
              <Button
                // disabled={isScrollLeftDisabled}
                icon="pi pi-chevron-left"
                className="py-3 bg-color3 rounded-full"
                onClick={() => scrollLeft()}
              />
              <Button
                // disabled={isScrollRightDisabled}
                icon="pi pi-chevron-right"
                className="py-3 bg-color3 rounded-full"
                onClick={() => scrollRight()}
              />
            </div>
          </div>
          <div className="cont absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont absolute bottom-0 right-0 bg-color3"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
