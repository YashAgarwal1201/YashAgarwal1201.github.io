import React, { useState } from "react";
import { Header } from "./../../Components/Header/Header";
import "./Content.scss";

const Content = () => {
  const [selectedButton, setSelectedButton] = useState<string>("home");

  return (
    <div className="w-screen h-[100dvh] flex flex-col-reverse md:flex-row items-center bg-black">
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <div className="h-full w-full flex justify-center items-center text-white border-2 rounded-md mx-1 my-2">
        <p>{selectedButton}</p>
      </div>
    </div>
  );
};

export default Content;
