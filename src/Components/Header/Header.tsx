import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { useAppContext } from "../../Services/AppContext";

export const Header = ({
  selectedButton,
  setSelectedButton,
}: {
  selectedButton: string;
  setSelectedButton: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { state, dispatch, showToast } = useAppContext();

  return (
    <div className="w-full md:w-[75px] h[75px] md:h-full relative">
      <div className="w-full md:w-[75px] h[75px] md:h-full flex flex-row md:flex-col items-center justify-center gap-y-0 md:gap-y-1 gap-x-1 md:gap-x-0">
        <Button
          title="home"
          icon="pi pi-home"
          className={`${
            selectedButton === "home"
              ? "text-color1 bg-color5 border-2 border-solid border-color5"
              : "text-color5 bg-transparent border-2 border-transparent"
          } h-16 w-16 `}
          onClick={() => {
            setSelectedButton("home");
          }}
        />
        <Button
          title="about"
          icon="pi pi-user"
          className={`${
            selectedButton === "about"
              ? "text-color1 bg-color5 border-2 border-solid border-color5"
              : "text-color5 bg-transparent border-2 border-transparent "
          } h-16 w-16 `}
          onClick={() => setSelectedButton("about")}
        />
        {/* <Button
        title="work"
        icon="pi pi-briefcase"
        className="h-16 w-16 text-white bg-transparent border-2 border-white"
      /> */}
        <Button
          title="feedback"
          icon="pi pi-comment"
          className={`${
            selectedButton === "feedback"
              ? "text-color1 bg-color5 border-2 border-solid border-color5"
              : "text-color5 bg-transparent border-2 border-transparent "
          } h-16 w-16 `}
          onClick={() => setSelectedButton("feedback")}
        />
      </div>
      <div className="absolute w-fit h-fit bottom-0 md:bottom-2 left-auto md:left-0 right-2 md:right-0 m-auto">
        <Button
          title="dark mode"
          icon={`${state.modeSelected === "dark" ? "pi pi-moon" : "pi pi-sun"}`}
          className={`${
            selectedButton === ""
              ? "text-color1 bg-color5 border-2 border-solid border-color1"
              : "text-color5 bg-transparent border-2 border-transparent hover:border-color5"
          } h-16 w-16 `}
          onClick={() => {
            dispatch({
              type: "SET_MODE_SELECTED",
              payload: state.modeSelected === "dark" ? "light" : "dark",
            });
            showToast("success", "Success", "Theme changed!");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
