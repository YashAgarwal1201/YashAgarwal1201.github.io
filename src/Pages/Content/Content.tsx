import React, { useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";
import { useAppContext } from "../../Services/AppContext";

const Content = () => {
  const {state} = useAppContext()
  const [selectedButton, setSelectedButton] = useState<string>("home");

  const themeVal = state.modeSelected as string
  console.log(themeVal)
  return (
    <div className={`w-screen h-[100dvh] flex flex-col-reverse md:flex-row items-center bg-color1`}>
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <div className={`h-full w-full flex justify-center items-center text-color5 border-2 border-color2 rounded-md mx-1 my-2`}>
        <p>{selectedButton}</p>
      </div>
    </div>
  );
};

export default Content;
