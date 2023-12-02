// import React from "react";
import { Button } from "primereact/button";
import { useAppContext } from "../../Services/AppContext";

export const Header = ({
  selectedButton,
  setSelectedButton,
}: {
  selectedButton: string;
  setSelectedButton: Function;//React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { state, dispatch, showToast } = useAppContext();

  return (
    <div className="w-full lg:w-[75px] h[75px] lg:h-full relative">
      <div className="w-full lg:w-[75px] h[75px] lg:h-full flex flex-row lg:flex-col items-center justify-center gap-y-0 md:gap-y-1 gap-x-1 lg:gap-x-0">
        <Button
          title="home"
          icon="pi pi-home"
          className={`${
            selectedButton === "home"
              ? "text-color1 bg-color4 border-2 border-solid border-color4"
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
              ? "text-color1 bg-color4 border-2 border-solid border-color4"
              : "text-color5 bg-transparent border-2 border-transparent "
          } h-16 w-16 `}
          onClick={() => setSelectedButton("about")}
        />
        <Button
          title="feedback"
          icon="pi pi-comment"
          className={`${
            selectedButton === "feedback"
              ? "text-color1 bg-color4 border- border-solid border-color4"
              : "text-color5 bg-transparent border-2 border-transparent "
          } h-16 w-16 `}
          onClick={() => setSelectedButton("feedback")}
        />
        <Button
          title="dark mode"
          icon={`${state.modeSelected === "dark" ? "pi pi-moon" : "pi pi-sun"}`}
          className={`${
            selectedButton === ""
              ? "text-color1 bg-color4 border-2 border-solid border-color4"
              : "text-color5 bg-transparent border-2 border-transparent hover:border-color5"
          } block lg:hidden h-16 w-16 `}
          onClick={() => {
            dispatch({
              type: "SET_MODE_SELECTED",
              payload: state.modeSelected === "dark" ? "light" : "dark",
            });
            showToast("success", "Success", "Theme changed!");
          }}
        />
      </div>
      <div className="hidden lg:block absolute w-fit h-fit bottom-0 md:bottom-2 left-auto md:left-0 right-2 md:right-0 m-auto">
        <Button
          title="dark mode"
          icon={`${state.modeSelected === "dark" ? "pi pi-moon" : "pi pi-sun"}`}
          className={`${
            selectedButton === ""
              ? "text-color1 bg-color4 border-2 border-solid border-color4"
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
