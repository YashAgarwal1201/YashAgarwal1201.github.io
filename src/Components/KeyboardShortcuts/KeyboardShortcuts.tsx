import { Dialog } from "primereact/dialog";
import React from "react";

export const KeyboardShortcuts = ({
  expandKeyboardShorcutsDialog,
  setExpandKeyboardShortcutsDialog,
}: {
  expandKeyboardShorcutsDialog: boolean;
  setExpandKeyboardShortcutsDialog: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  return (
    <div>
      <Dialog
        visible={expandKeyboardShorcutsDialog}
        onHide={() => setExpandKeyboardShortcutsDialog(false)}
        draggable={false}
        dismissableMask={true}
        header={
          <>
            <div className="text-color5">Keyboard Shorcuts</div>
          </>
        }
        className="aboutDialog w-full md:w-[65%] h-full md:h-[80%] absolute bottom-0 md:bottom-auto"
      >
        <div className="h-full p-2 md:p-4 flex flex-col gap-y-3 text-color5 bg-color2 rounded-md overflow-y-auto">
          <ul className="px-3 flex flex-col gap-y-4">
            <li>
              Press{" "}
              <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
                Shift
              </kbd>{" "}
              +{" "}
              <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
                h
              </kbd>{" "}
              for "Home" section.
            </li>
            <li>
              Press{" "}
              <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
                Shift
              </kbd>{" "}
              +{" "}
              <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
                a
              </kbd>{" "}
              for "About" section.
            </li>
            <li>
              Press{" "}
              <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
                Shift
              </kbd>{" "}
              +{" "}
              <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
                f
              </kbd>{" "}
              for "Feedback" section.
            </li>
          </ul>
        </div>
      </Dialog>
    </div>
  );
};
