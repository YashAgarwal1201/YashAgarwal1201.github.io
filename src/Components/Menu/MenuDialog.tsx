import { Dialog } from "primereact/dialog";
import React from "react";
import { useAppContext } from "../../Services/AppContext";
import { SelectButton } from "primereact/selectbutton";
import { Accordion, AccordionTab } from "primereact/accordion";
import { KeyboardShortcuts } from "../KeyboardShortcuts/KeyboardShortcuts";
import "./MenuDialog.scss";

type MenuDialogProps = {
  showMenuDialog: boolean;
  setShowMenuDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuDialog = ({ showMenuDialog, setShowMenuDialog }: MenuDialogProps) => {
  const { state, dispatch, showToast } = useAppContext();
  const options = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

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
                <span className="text-color3">Theme</span>
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
              <div
                className={`capitalize flex flex-col-reverse justify-between items-center ${
                  state.themeSelected === "google"
                    ? "text-blue-800 font-semibold cursor-default"
                    : "text-[#010101] font-normal cursor-pointer"
                }`}
                onClick={() => {
                  dispatch({
                    type: "SET_THEME_SELECTED",
                    payload: "google",
                  });
                  showToast("success", "Success", "Theme changed!");
                }}
              >
                <span>Google</span>
                <div className="flex items-center rounded-md border-2">
                  <div className="w-4 h-4 bg-[#FAFAFA] rounded-l-md"></div>
                  <div className="w-4 h-4 bg-[#FBBC05]"></div>
                  <div className="w-4 h-4 bg-[#34A853]"></div>
                  <div className="w-4 h-4 bg-[#4285F4]"></div>
                  <div className="w-4 h-4 bg-[#EA4335] rounded-r-md"></div>
                </div>
              </div>

              <div
                className={`capitalize flex flex-col-reverse justify-between items-center ${
                  state.themeSelected === "night"
                    ? "text-blue-800 font-semibold cursor-default"
                    : "text-[#010101] font-normal cursor-pointer"
                }`}
                onClick={() => {
                  dispatch({
                    type: "SET_THEME_SELECTED",
                    payload: "night",
                  });
                  showToast("success", "Success", "Theme changed!");
                }}
              >
                <span>Classic Night</span>
                <div className="flex items-center rounded-md border-2">
                  <div className="w-4 h-4 bg-[#0a0a0a] rounded-l-md"></div>
                  <div className="w-4 h-4 bg-[#171717]"></div>
                  <div className="w-4 h-4 bg-[#404040]"></div>
                  <div className="w-4 h-4 bg-[#a3a3a3]"></div>
                  <div className="w-4 h-4 bg-[#fafafa] rounded-r-md"></div>
                </div>
              </div>

              <div
                className={`capitalize flex flex-col-reverse justify-between items-center ${
                  state.themeSelected === "light"
                    ? "text-blue-800 font-semibold cursor-default"
                    : "text-[#010101] font-normal cursor-pointer"
                }`}
                onClick={() => {
                  dispatch({
                    type: "SET_THEME_SELECTED",
                    payload: "light",
                  });
                  showToast("success", "Success", "Theme changed!");
                }}
              >
                <span>Classic Light</span>
                <div className="flex items-center rounded-md border-2">
                  <div className="w-4 h-4 bg-[#fafafa] rounded-l-md"></div>
                  <div className="w-4 h-4 bg-[#a3a3a3]"></div>
                  <div className="w-4 h-4 bg-[#404040]"></div>
                  <div className="w-4 h-4 bg-[#171717]"></div>
                  <div className="w-4 h-4 bg-[#0a0a0a] rounded-r-md"></div>
                </div>
              </div>

              <div
                className={`capitalize flex flex-col-reverse justify-between items-center ${
                  state.themeSelected === "gold"
                    ? "text-blue-800 font-semibold cursor-default"
                    : "text-[#010101] font-normal cursor-pointer"
                }`}
                onClick={() => {
                  dispatch({
                    type: "SET_THEME_SELECTED",
                    payload: "gold",
                  });
                  showToast("success", "Success", "Theme changed!");
                }}
              >
                <span>Gold</span>
                <div className="flex items-center rounded-md border-2">
                  <div className="w-4 h-4 bg-[#ffe878] rounded-l-md"></div>
                  <div className="w-4 h-4 bg-[#ffd447]"></div>
                  <div className="w-4 h-4 bg-[#ffbf00]"></div>
                  <div className="w-4 h-4 bg-[#bf9b30]"></div>
                  <div className="w-4 h-4 bg-[#a67c00] rounded-r-md"></div>
                </div>
              </div>

              <div
                className={`capitalize flex flex-col-reverse justify-between items-center ${
                  state.themeSelected === "vintage"
                    ? "text-blue-800 font-semibold cursor-default"
                    : "text-[#010101] font-normal cursor-pointer"
                }`}
                onClick={() => {
                  dispatch({
                    type: "SET_THEME_SELECTED",
                    payload: "vintage",
                  });
                  showToast("success", "Success", "Theme changed!");
                }}
              >
                <span>Vintage</span>
                <div className="flex items-center rounded-md border-2">
                  <div className="w-4 h-4 bg-[#f5e1b3] rounded-l-md"></div>
                  <div className="w-4 h-4 bg-[#dbb070]"></div>
                  <div className="w-4 h-4 bg-[#5a888a]"></div>
                  <div className="w-4 h-4 bg-[#5f588a]"></div>
                  <div className="w-4 h-4 bg-[#b8556c] rounded-r-md"></div>
                </div>
              </div>
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex justify-between items-center">
                <span className="text-color3">Easy mode? </span>
                <span className="text-color3 capitalize">
                  {state.easyMode ? "Yes" : "No"}
                </span>
              </div>
            }
          >
            <div className="flex justify-between items-center">
              <span>Use easy mode?</span>
              <span>
                <SelectButton
                  value={state.easyMode}
                  onChange={(e) => {
                    dispatch({
                      type: "SET_EASY_MODE",
                      payload: e.value as boolean,
                    })
                    showToast('success', 'Success', `Easy mode turned ${e.value ? 'On' : 'Off'}`) }
                  }
                  options={options}
                  className="border-2 rounded-md text-sm"
                />
              </span>
            </div>
          </AccordionTab>

          <AccordionTab
            header={
              <div className="flex justify-between items-center">
                <span className="text-color3">Keyboard shortcuts</span>{" "}
              </div>
            }
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
