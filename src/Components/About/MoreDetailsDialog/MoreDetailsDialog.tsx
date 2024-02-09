import React from "react";
import { Dialog } from "primereact/dialog";
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
        className="aboutDialog w-full md:w-[65%] h-full md:h-[80%] absolute bottom-0 md:bottom-auto"
        position={window.innerWidth < 768 ? 'bottom' : 'center'}
      >
        <div className="h-full p-2 md:p-4 flex flex-col gap-y-3 text-color5 bg-color2 rounded-md overflow-y-auto">
          {state.modalContent?.header !== "Contact & Resume" &&
            state.modalContent?.body?.map((values: any) => (
              <>
                <h3 className="w-fit pb-1 text-base md:text-lg font-medium border-b-2 border-color4">
                  {values?.year}
                </h3>
                <div className="flex flex-col">
                  <div className="ml-12 md:text-base">
                    {values?.description}
                    {values?.projects && (
                      <span className="ml-4 mt-3">{values?.projects}</span>
                    )}
                    {values?.certifications && (
                      <span className="ml-4 mt-3">
                        {values?.certifications}
                      </span>
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
