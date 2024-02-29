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
  const { state, dispatch } = useAppContext();

  return (
    <div className="relative">
      <Dialog
        visible={expandAboutDialog}
        onHide={() => {
          setExpandAboutDialog(!expandAboutDialog);
          dispatch({
            type: "SET_MODAL_CONTENT",
            payload: { header: "", body: "" } as any,
          });
        }}
        dismissableMask={true}
        draggable={false}
        header={<div className="text-color1">{state.modalContent?.header}</div>}
        // className="aboutDialog w-full md:w-[65%] h-full md:h-[80%] absolute bottom-0 md:bottom-auto"
        // position={window.innerWidth < 768 ? "bottom" : "center"}
        className={`aboutDialog ${
          state.easyMode ? "w-full md:w-1/2" : "w-full md:w-[65%]"
        } h-full md:h-[80%] absolute bottom-0 md:bottom-auto`}
        position={
          window.innerWidth < 768
            ? "bottom"
            : state.easyMode
            ? "right"
            : "center"
        }
      >
        <div className="h-full p-2 md:p-4 flex flex-col gap-y-3 text-color5 bg-color2 rounded-md overflow-y-auto">
          {!state.modalContent?.header.includes("Contact") &&
            state.modalContent?.body?.map((values: any) => (
              <>
                <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                  {values?.year}
                </h3>
                <div className="flex flex-col">
                  <div className="ml-12 md:text-base flex flex-col gap-y-2">
                    <p className="flex items-center gap-x-5">
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
                      <ul className="ml-4">
                        {values.projects.map((content: any, k: any) => (
                          <li key={k}>{content}</li>
                        ))}
                      </ul>
                    )}
                    {values?.certifications && (
                      <ul className="ml-4">
                        {values.certifications.map((content: any, k: any) => (
                          <li key={k}>{content}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </>
            ))}
        </div>
      </Dialog>
    </div>
  );
};

export default MoreDetailsDialog;
