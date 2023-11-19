import React from "react";

function About({ reference }: { reference: any }) {
  return (
    <div
      ref={reference}
      className="w-full h-full flex justify-center items-center border-2 border-color2 snap-center snap-always"
    >
      About
    </div>
  );
}

export default About;
