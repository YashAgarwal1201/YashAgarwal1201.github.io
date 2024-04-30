import React from "react";

import { Dialog } from "primereact/dialog";
import { Link } from "react-router-dom";

import { useAppContext } from "../../../Services/AppContext";

type MoreDetailsDialogProps = {
  expandAboutDialog: boolean;
  setExpandAboutDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const MoreDetailsDialog = ({
  expandAboutDialog,
  setExpandAboutDialog,
}: MoreDetailsDialogProps) => {
  const { state, setModalContent } = useAppContext();

  return (
    <Dialog
      visible={expandAboutDialog}
      onHide={() => {
        setExpandAboutDialog(!expandAboutDialog);
        setModalContent({ header: "", body: "" });
      }}
      dismissableMask={true}
      draggable={false}
      header={
        <div className="text-color1 lg:text-3xl font-heading font-normal">
          {state.modalContent?.header}
        </div>
      }
      className={`aboutDialog ${
        state.easyMode
          ? "w-full md:w-1/2"
          : "w-full md:w-[85%] mdl:w-[75%] lg:w-[65%]"
      } h-full md:h-[80%] absolute bottom-0 md:bottom-auto`}
      position={
        window?.innerWidth < 768
          ? "bottom"
          : state.easyMode
          ? "right"
          : "center"
      }
    >
      {state.modalContent.body &&
      !state.modalContent?.header?.includes("Other") ? (
        <div className="h-full p-2 md:p-4 flex flex-col gap-y-3 text-color5 bg-color2 rounded-md overflow-y-auto shadow-md">
          {state.modalContent?.body?.map((values: any, key: React.Key) => (
            <div key={key}>
              <h3 className="w-fit pb-1 text-lg md:text-xl lg:text-2xl font-medium font-subheading border-b-2 border-color4">
                {values?.year}
              </h3>
              <div className="flex flex-col font-content">
                <div className="ml-8 sm:ml-12 md:text-base flex flex-col gap-y-2">
                  <p className="flex items-center gap-x-5 text-base lg:text-lg">
                    <span>{values?.description}</span>
                    {state.modalContent?.header.includes("Projects") && (
                      <Link
                        to={values?.link}
                        target="_blank"
                        className="w-10 h-10 flex justify-center items-center rounded-full bg-color3"
                      >
                        <span className="pi pi-external-link"></span>
                      </Link>
                    )}
                  </p>
                  {values?.projects && (
                    <ul className="ml-4 font-subheading  text-base lg:text-lg">
                      {values.projects.map((content: string, k: number) => (
                        <li key={k}>{content}</li>
                      ))}
                    </ul>
                  )}
                  {values?.certifications && (
                    <ul className="ml-4 font-subheading text-base lg:text-lg">
                      {values.certifications?.map(
                        (content: string, k: number) => (
                          <li key={k}>{content}</li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full p-2 md:p-4 flex flex-row flex-wrap justify-center items-center gap-x-3 text-color5 bg-color2 rounded-md overflow-y-auto shadow-md">
          {state.modalContent.body.map((values: any, key: React.Key) => (
            <div key={key}>
              <Link
                key={key}
                title={values.description}
                className="w-12 md:w-16 h-12 md:h-16 p-1 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                to={values.link}
                target="_blank"
              >
                <img
                  src={`${values.link}logo.svg`}
                  alt="project logo "
                  className="w-full h-full bg-[#ffffff] rounded-full"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </Dialog>
  );
};

export default MoreDetailsDialog;
