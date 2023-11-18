import React, { useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
import { useAppContext } from "../../Services/AppContext";

const Content = () => {
  const {state} = useAppContext()
  const [selectedButton, setSelectedButton] = useState<string>("home");

  const themeVal = state.modeSelected
  console.log(themeVal)
  return (
    <div className={`w-screen h-[100dvh] flex flex-col-reverse md:flex-row items-center bg-${themeVal}-color1`}>
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <div className={`h-full w-full flex justify-center items-center text-${themeVal}-color5 border-2 rounded-md mx-1 my-2`}>
        <p>{selectedButton}</p>
      </div>
    </div>
  );
};

export default Content;
