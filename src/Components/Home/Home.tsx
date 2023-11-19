import React from "react";

function Home({ reference }: { reference: any }) {
  return (
    <div
      ref={reference}
      className="w-full h-full flex justify-center items-center border-2 border-color2 snap-center snap-always"
    >
      Home
    </div>
  );
}

export default Home;
