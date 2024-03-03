import logoo from "./../../assets/logoo.jpg";
import { primaryInfo } from "../../Data/Data";
import "./Home.scss";
import { HomeProps } from "../../Services/Interfaces";

function Home({ reference }: HomeProps) {
  return (
    <div
      ref={reference}
      className="w-full h-full p-1 sm:p-2 md:pb-1 md:pr-1 flex flex-col-reverse md:flex-row items-center snap-start snap-always"
    >
      <div className="w-full md:w-1/2 h-1/2 md:h-full md:px-5 pt-20 flex flex-col justify-start items-center gap-y-5">
        <h1 className="w-full text-3xl sm:text-4xl lg:text-6xl select-none">
          Hey everyone,
          <br />
          myself {primaryInfo.name}
        </h1>
        <p className="w-full text-base sm:text-lg lg:text-xl text-right text-color4 select-none">
          and, I am currently working as {primaryInfo.currentPosition}
          <br />
          <span className="pi pi-at"></span> {primaryInfo.currentOrganisation}
        </p>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-end items-end bg-transparent">
        <div className="hidden md:block w-[80%] md:w-[500px] 2xl:w-[600px] h-full md:h-auto m-auto md:m-0 aspect-auto md:aspect-square relative">
          <div className="cont absolute top-0 left-0 bg-color3"></div>
          <div className="cont absolute top-0 right-0 bg-transparent"></div>
          <div className="cont m-auto top-0 left-0 right-0 bottom-0 p-3 bg-color2 z-10 shadow-md">
            <img
              alt="img"
              src={logoo}
              className="h-full m-auto rounded-md"
              loading="lazy"
            />
          </div>
          <div className="cont hidden md:block absolute bottom-0 left-0 bg-transparent"></div>
          <div className="cont hidden md:block absolute bottom-0 right-0 bg-transparent md:bg-color3"></div>
        </div>

        <div className="block md:hidden w-full h-full md:h-auto m-auto md:m-0 aspect-auto md:aspect-square relative">
          <div className="cont pattern absolute m-auto top-0 left-0 bottom-0 bg-color3"></div>
          <div className="cont pattern absolute m-auto top-0 right-0 bottom-0 bg-color3 "></div>
          <div className="w-[250px] sm:w-[300px] aspect-square absolute m-auto top-0 left-0 right-0 bottom-0 p-3 rounded-2xl bg-color2 z-10 shadow-md">
            <img
              alt="img"
              src={logoo}
              className="h-full m-auto rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
