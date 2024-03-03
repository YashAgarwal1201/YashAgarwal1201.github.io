import React from "react";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";

import { useAppContext } from "../../Services/AppContext";
import { KeyboardShortcuts } from "../KeyboardShortcuts/KeyboardShortcuts";
import "./MenuDialog.scss";
import { themes } from "../../Data/Data";

type MenuDialogProps = {
  showMenuDialog: boolean;
  setShowMenuDialog: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuDialog = ({ showMenuDialog, setShowMenuDialog }: MenuDialogProps) => {
  const { state, dispatch, showToast } = useAppContext();

  const handleThemeChange = (themeValue: string) => {
    dispatch({ type: "SET_THEME_SELECTED", payload: themeValue });
    showToast("success", "Success", "Theme changed!");
  };

  const handleEasyModeChange = (value: boolean) => {
    dispatch({ type: "SET_EASY_MODE", payload: value });
    showToast("success", "Success", `Easy mode turned ${value ? "On" : "Off"}`);
  };

  return (
    <Dialog
      visible={showMenuDialog}
      onHide={() => setShowMenuDialog(!showMenuDialog)}
      dismissableMask={true}
      draggable={false}
      header={<div className="text-color1">Settings Menu</div>}
      className={`aboutDialog ${
        state.easyMode ? "w-full md:w-1/2" : "w-full md:w-[65%]"
      } h-full md:h-[80%] absolute bottom-0 md:bottom-auto`}
      position={
        window.innerWidth < 768 ? "bottom" : state.easyMode ? "right" : "center"
      }
    >
      <div className="h-full p-2 md:p-4 text-color5 bg-color2 rounded-md overflow-y-auto">
        <Accordion className="flex flex-col gap-y-2">
          <AccordionTab
            header={
              <div className="flex justify-between items-center">
                <span className="text-black">Theme</span>
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
                  <span>{theme.name}</span>
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
              <div className="flex justify-between items-center">
                <span className="text-black">Easy mode? </span>
                <span className="text-black capitalize">
                  {state.easyMode ? "Yes" : "No"}
                </span>
              </div>
            }
          >
            <div className="flex justify-between items-center">
              <span>Use easy mode?</span>
              <InputSwitch
                checked={state.easyMode}
                onChange={(e) => handleEasyModeChange(e.value)}
              />
            </div>
          </AccordionTab>

          <AccordionTab
            header={<span className="text-black">Keyboard shortcuts</span>}
          >
            <div>
              <KeyboardShortcuts />
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </Dialog>
  );
};

export default MenuDialog;
