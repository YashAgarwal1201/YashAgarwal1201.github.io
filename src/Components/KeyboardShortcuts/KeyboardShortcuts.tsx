// import { Dialog } from "primereact/dialog";
// import React from "react";

export const KeyboardShortcuts = () => {
  return (
    <div>
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
        <li>
          Press{" "}
          <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
            Shift
          </kbd>{" "}
          +{" "}
          <kbd className="px-2 py-1 font-semibold text-color4 bg-color1 rounded-md">
            m
          </kbd>{" "}
          for "Menu & others".
        </li>
      </ul>
    </div>
  );
};
