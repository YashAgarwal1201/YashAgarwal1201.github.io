import React from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { feedback } from "../../../Data/Data";
import { useAppContext } from "../../../Services/AppContext";

type FeedbackFormDialogProps = {
  expandFeedbackDialog: boolean;
  setExpandFeedbackDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeedbackFormDialog = ({
  expandFeedbackDialog,
  setExpandFeedbackDialog,
}: FeedbackFormDialogProps) => {
  const { state, showToast } = useAppContext();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userEmailId = event.target?.Email?.value;
    const userName = event.target?.Name?.value;
    const bcc = feedback?.content?.bcc;
    const message = event.target?.Msg?.value;

    const emailBody = encodeURIComponent(
      `${message}\r\n\r\nUser Entered Email: ${userEmailId}\r\nUser's Entered Name: ${userName}\r\n`
    );

    try {
      window.open(
        `mailto:${feedback.content.mailTo}?subject=feedback%20from%20${userName}%20(${userEmailId})&body=${emailBody}&bcc=${bcc}`,
        `_blank`
      );

      setExpandFeedbackDialog(!expandFeedbackDialog);
      event.target.reset();
      showToast("info", "Info", "Opening external email client of your device");
    } catch (error) {
      showToast("error", "Error", error as string);
    }
  };

  return (
    <div className="relative">
      <Dialog
        visible={expandFeedbackDialog}
        onHide={() => {
          setExpandFeedbackDialog(!expandFeedbackDialog);
        }}
        dismissableMask={true}
        draggable={false}
        header={
          <>
            <div className="text-color1">Please fill out this form</div>
          </>
        }
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
        <form
          className="h-full p-2 md:p-4 flex flex-col gap-y-6 text-color5 bg-color2 rounded-md overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-3">
            <div className="w-full md:w-1/2 flex flex-col gap-y-3">
              <label className="text-lg">Your Email Address:</label>

              <input
                title="Email address"
                className="h-10 px-4 bg-color3 text-color1 rounded-lg"
                type="email"
                name="Email"
                required
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-y-3">
              <label className="text-lg">Your Name:</label>

              <input
                title="Name"
                className="h-10 px-4 bg-color3 text-color1 rounded-md"
                type="text"
                name="Name"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <label className="text-lg">Your Message:</label>

            <textarea
              title="You message"
              className="h-40 p-4 bg-color3 text-color1 rounded-lg resize-none"
              name="Msg"
              required
            ></textarea>
          </div>
          <div className="w-full h-12 flex flex-row-reverse justify-center items-center gap-x-4">
            <Button
              title="click to send"
              icon={<span className="material-symbols-rounded mr-2">send</span>}
              className="h-full px-5 bg-color4 text-color1"
              label="Submit"
              type="submit"
            />
            <Button
              title="click to delete everything"
              icon={<span className="material-symbols-rounded mr-2">delete</span>}
              className="h-full px-5 bg-transparent text-color4"
              label="Delete"
              type="reset"
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default FeedbackFormDialog;
