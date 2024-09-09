import React from "react";

import { Accordion, AccordionTab } from "primereact/accordion";
// import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { InputSwitch } from "primereact/inputswitch";
import { Sidebar } from "primereact/sidebar";

import { themes } from "../../Data/Data";
import { useAppContext } from "../../Services/AppContext";
import KeyboardShortcuts from "../KeyboardShortcuts/KeyboardShortcuts";

import "./MenuDialog.scss";
import { Button } from "primereact/button";

type MenuDialogProps = {
  showMenuDialog: boolean;
  setShowMenuDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuDialog = ({ showMenuDialog, setShowMenuDialog }: MenuDialogProps) => {
  const { state, showToast, setThemeSelected, setEasyMode } = useAppContext();

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
      onHide={() => setShowMenuDialog(!showMenuDialog)}
      dismissable={true}
      draggable={false}
      header={
        <div className="text-color1 lg:text-3xl font-heading font-normal">
          More Options
        </div>
      }
      className={`aboutDialog ${
        state.easyMode
          ? "w-full md:w-1/2"
          : "w-full md:w-[70%] mdl:w-[60%] lg:w-[50%]"
      } h-full absolute bottom-0 md:bottom-auto`}
      position={"right"}
    >
      <div className="h-full p-2 md:p-4 text-color5 bg-color2 rounded-md overflow-y-auto shadow-md">
        <Accordion
          collapseIcon={
            <span className="material-symbols-rounded">expand_less</span>
          }
          expandIcon={
            <span className="material-symbols-rounded">expand_more</span>
          }
          className="flex flex-col gap-y-2"
        >
          <AccordionTab
            header={
              <div className="flex justify-between items-center font-heading font-medium">
                <span className="text-black font-subheading not-italic">
                  Theme
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
                  Easy mode?{" "}
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
                Download Resume
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
        </Accordion>
      </div>
    </Sidebar>
  );
};

export default MenuDialog;
