import React from "react";

import { Accordion, AccordionTab } from "primereact/accordion";
// import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
// import { Card } from "primereact/card";
import { InputSwitch } from "primereact/inputswitch";
import { Sidebar } from "primereact/sidebar";

import { themes } from "../../Data/Data";
import { useAppContext } from "../../Services/AppContext";
import { useMsgAppContext } from "../../Services/MessagesContextAndInterfaces/MessagesContext";
import KeyboardShortcuts from "../KeyboardShortcuts/KeyboardShortcuts";

import "./MenuDialog.scss";

type MenuDialogProps = {
  openMenuPanel: number;
  setOpenMenuPanel: React.Dispatch<React.SetStateAction<number>>;
  showMenuDialog: boolean;
  setShowMenuDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuDialog = ({
  showMenuDialog,
  openMenuPanel,
  setOpenMenuPanel,
  setShowMenuDialog,
}: MenuDialogProps) => {
  const {
    state,
    showToast,
    setThemeSelected,
    setEasyMode,
    setShowFeedbackDialog,
  } = useAppContext();
  const { messageState, setSelectedChatAppearance } = useMsgAppContext();

  const handleThemeChange = (themeValue: string) => {
    setThemeSelected(themeValue);
    showToast("success", "Success", "Theme changed!");
  };

  const handleEasyModeChange = (value: boolean) => {
    setEasyMode(value);
    showToast("success", "Success", `Easy mode turned ${value ? "On" : "Off"}`);
  };

  return (
    <Sidebar
      visible={showMenuDialog}
      onHide={() => {
        setShowMenuDialog(false);
        setOpenMenuPanel(-1);
      }}
      dismissable={true}
      draggable={false}
      header={
        <div className="text-color1 lg:text-3xl font-heading font-normal">
          More Options
        </div>
      }
      className={`aboutDialog min-w-fit w-full md:w-[70%] mdl:w-[60%] lg:w-[50%] h-full absolute bottom-0 md:bottom-auto`}
      position={"right"}
    >
      <div className="h-full p-2 md:p-4 text-color5 bg-color2 rounded-md overflow-y-auto shadow-md">
        <Accordion
          collapseIcon={
            <span className="material-symbols-rounded text-color1">
              expand_less
            </span>
          }
          expandIcon={
            <span className="material-symbols-rounded">expand_more</span>
          }
          className="flex flex-col gap-y-2"
          // activeIndex={showKeyboardShortcuts ? 2 : -1}
          activeIndex={openMenuPanel}
        >
          <AccordionTab
            header={
              <div className="flex justify-between items-center font-heading font-medium">
                <span className="text-black font-subheading not-italic">
                  Change theme
                </span>
                <div className="flex items-center rounded-md border-2">
                  <div className="w-4 h-4 bg-color1 rounded-l-md"></div>
                  <div className="w-4 h-4 bg-color2"></div>
                  <div className="w-4 h-4 bg-color3"></div>
                  <div className="w-4 h-4 bg-color4"></div>
                  <div className="w-4 h-4 bg-color5 rounded-r-md"></div>
                </div>
              </div>
            }
          >
            <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-y-6">
              {themes?.map((theme) => (
                <div
                  key={theme.value}
                  className={`capitalize flex flex-col-reverse justify-between items-center ${
                    state.themeSelected === theme.value
                      ? "text-blue-800 font-semibold cursor-default"
                      : "text-[#010101] font-normal cursor-pointer"
                  }`}
                  onClick={() =>
                    state.themeSelected !== theme.value
                      ? handleThemeChange(theme.value)
                      : ""
                  }
                >
                  <span className="font-content">{theme.name}</span>
                  <div className="flex items-center rounded-md border-2">
                    {theme.colors?.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 ${
                          index === 0
                            ? "rounded-l-md"
                            : index === 4
                            ? "rounded-r-md"
                            : "rounded-none"
                        }`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex justify-between items-center font-heading font-medium">
                <span className="text-black font-subheading not-italic">
                  Use easy mode?{" "}
                </span>
                <span className="text-black capitalize font-content not-italic">
                  {state.easyMode ? "Yes" : "No"}
                </span>
              </div>
            }
          >
            <div className="flex justify-between items-center font-content">
              <span>Use easy mode?</span>
              <InputSwitch
                checked={state.easyMode}
                onChange={(e) => handleEasyModeChange(e.value)}
              />
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="text-black font-subheading font-medium not-italic">
                Keyboard shortcuts
              </span>
            }
          >
            <div className="font-content">
              <KeyboardShortcuts />
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="text-black font-subheading font-medium not-italic">
                View my resume
              </span>
            }
          >
            <div className="font-content flex justify-between items-center">
              <p>Click the button to download resume</p>
              <Button
                icon={"pi pi-download"}
                onClick={() => {
                  showToast("info", "Info", "Under development");
                }}
              />
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="text-black font-subheading font-medium not-italic">
                Change chat appearance
              </span>
            }
          >
            <div className="font-content flex flex-col gap-y-10 justify-between">
              <p>Select the chat appearance</p>

              <div className="flex flex-wrap justify-center items-center gap-3">
                <Button
                  className={`min-w-[275px] flex flex-col ${
                    messageState.selectedChatAppearance === "default"
                      ? "text-blue-800 font-semibold cursor-default"
                      : "text-[#010101] font-normal cursor-pointer"
                  }`}
                  onClick={() => setSelectedChatAppearance("default")}
                >
                  <div className="w-full flex flex-col gap-y-4 bg-color4 p-3 rounded-md">
                    {[1, 2].map((key) => (
                      <div
                        key={key}
                        className={`flex flex-col ${
                          key === 1 ? "items-start" : "items-end"
                        } gap-y-2 `}
                      >
                        <div
                          className={`flex ${
                            key === 1 ? "flex-row" : "flex-row-reverse"
                          } items-center gap-x-2`}
                        >
                          <span className="pi pi-user p-2 rounded-full bg-color1 text-color5"></span>
                          <span className="block rounded-md w-16 h-5 bg-color3"></span>
                        </div>
                        <div
                          className={`${
                            key === 1 ? "ml-4 mr-0" : "ml-0 mr-4"
                          } rounded-md bg-color2 w-1/2 h-7`}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <p className="">Default</p>
                </Button>

                <Button
                  className={`min-w-[275px] flex flex-col ${
                    messageState.selectedChatAppearance === "compact"
                      ? "text-blue-800 font-semibold cursor-default"
                      : "text-[#010101] font-normal cursor-pointer"
                  }`}
                  onClick={() => setSelectedChatAppearance("compact")}
                >
                  <div className="w-full flex flex-col gap-y-4 bg-color4 p-3 rounded-md">
                    {[1, 2].map((key) => (
                      <div key={key} className={`flex flex-col  gap-y-2 `}>
                        <div className={`flex flex-row items-center gap-x-2`}>
                          <span className="pi pi-user p-2 rounded-full bg-color1 text-color5"></span>
                          <span className="block rounded-md w-16 h-5 bg-color3"></span>
                        </div>
                        <div
                          className={`ml-4 mr-0 rounded-md bg-color2 w-1/2 h-7`}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <p className="">Compact</p>
                </Button>
              </div>
            </div>
          </AccordionTab>

          <AccordionTab
            className="menu-feedback-btn block md:hidden"
            headerTemplate={
              <span
                className="h-full text-black font-subheading font-medium not-italic"
                onClick={() => {
                  setShowMenuDialog(false);
                  setShowFeedbackDialog(true);
                }}
              >
                Have something to say?
              </span>
            }
            contentClassName="hidden"
            headerClassName="bg-pink-400"
          ></AccordionTab>
        </Accordion>
      </div>
    </Sidebar>
  );
};

export default MenuDialog;
