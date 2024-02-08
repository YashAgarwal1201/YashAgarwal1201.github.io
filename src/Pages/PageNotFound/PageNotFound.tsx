import { Button } from "primereact/button";
import { startTransition } from "react";

const PageNotFound = () => {
  return (
    <div
      className={`w-screen h-[100dvh] flex flex-col-reverse lg:flex-row items-center bg-color1`}
    >
      <div className="w-full lg:w-[75px] h-[75px] lg:h-full">
        <Button
          title="Go back"
          icon="pi pi-arrow-left"
          className="w-16 h-16 bg-transparent text-color5"
          onClick={() => startTransition(() => window.history.go(-1))}
        />
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center gap-y-10">
        <div className="text-center">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-color5">
            Error 404
          </h1>
          <p className="text-base sm:text-lg text-color4">Page not found!!!</p>
        </div>
        <p className="text-base sm:text-lg text-color4 font-medium">
          The page you are looking for does not exist
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
