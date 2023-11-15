import React from 'react'
import { Button } from "primereact/button";

const Header = (selectedButton: string, setSelectedButton: React.Dispatch<React.SetStateAction<string>>) => {
  console.log(selectedButton)
  return (
    <div className="w-full md:w-[75px] h[75px] md:h-full flex flex-row md:flex-col items-center justify-center gap-y-0 md:gap-y-1 gap-x-1 md:gap-x-0">
      <Button
        title="home"
        icon="pi pi-home"
        className={`h-16 w-16 text-black bg-white border-2 border-transparent hover:border-white`}
        onClick={() => setSelectedButton("home")}
      />
      <Button
        title="about"
        icon="pi pi-user"
        className={`h-16 w-16 text-white bg-transparent border-2 border-transparent hover:border-white`}
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
        className={`h-16 w-16 text-white bg-transparent border-2 border-transparent hover:border-white`}
        onClick={() => setSelectedButton("feedback")}
      />
    </div>
  );
};

export default Header;
