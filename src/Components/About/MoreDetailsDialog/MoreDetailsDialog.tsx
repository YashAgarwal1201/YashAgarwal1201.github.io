import React from "react";
import { Dialog } from "primereact/dialog";
import { useAppContext } from "../../../Services/AppContext";

const MoreDetailsDialog = ({
  expandAboutDialog,
  setExpandAboutDialog,
}: {
  expandAboutDialog: boolean;
  setExpandAboutDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { state, dispatch, showToast } = useAppContext();

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
        draggable={false}
        header={<div className="text-color5">{state.modalContent.header}</div>}
        className="aboutDialog w-full md:w-[65%] h-full md:h-[80%] absolute bottom-0 md:bottom-auto"
      >
        <div className="h-full p-2 md:p-4 flex flex-col gap-y-3 text-color5 bg-color2 rounded-md overflow-y-auto">
          {state.modalContent.header !== "Contact & Resume" ? (
            state.modalContent.body.map((values: any) => (
              <>
                <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                  {values.year}
                </h3>
                <div className="flex flex-col">
                  <p className="ml-12 md:text-base">
                    {values.description}
                    {values.projects && (
                      <div className="ml-4 mt-3">{values.projects}</div>
                    )}
                    {values.certifications && (
                      <div className="ml-4 mt-3">{values.certifications}</div>
                    )}
                  </p>
                </div>
              </>
            ))
          ) : (
            <>
              <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                {state.modalContent.body[0].year}
              </h3>
              <div className="flex">
                <p
                  className="ml-12 cursor-pointer"
                  onClick={(e) => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(e.currentTarget.innerHTML);
                      showToast("success", "Success", "Email address copied");
                    } else {
                      showToast(
                        "error",
                        "Error",
                        "Sorry, but looks like there's some issue with it"
                      );
                    }
                  }}
                >
                  {state.modalContent.body[0].description}
                </p>
              </div>
              {state.modalContent.body.map((values: any, key: any) => {
                if (key !== 0) {
                  return (
                    <>
                      <h3 className="w-fit pb-1 text-lg font-medium border-b-2 border-color4">
                        {values.year}
                      </h3>
                      <div className="flex">
                        <p className="ml-12 cursor-pointer">
                          {values.description}
                        </p>
                      </div>
                    </>
                  );
                }
              })}
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default MoreDetailsDialog;
