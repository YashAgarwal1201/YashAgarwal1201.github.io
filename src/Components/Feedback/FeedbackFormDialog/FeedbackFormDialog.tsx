import React from "react";
import { Dialog } from "primereact/dialog";
import { useAppContext } from "../../../Services/AppContext";
import { Button } from "primereact/button";
import { feedback } from "../../../Data/Data";

const FeedbackFormDialog = ({
  expandFeedbackDialog,
  setExpandFeedbackDialog,
}: {
  expandFeedbackDialog: boolean;
  setExpandFeedbackDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { showToast } = useAppContext();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log(event.target.Name.value);
    const userEmailId = event.target.Email.value;
    const userName = event.target.Name.value;
    //var bcc = feedback.content.bcc
    const emailBody = encodeURIComponent(
      `${event.target.Msg.value}\r\n\r\nUser Entered Email: ${userEmailId}\r\nUser's Entered Name: ${userName}\r\n`
    );

    try {
      window.open(
        `mailto:${feedback.content.mailTo}?subject=feedback_from_${userEmailId}&body=${emailBody}`,
        `_blank`
      );
      showToast("info", "Info", "Opening external email client of your device");
    } catch (error) {
      showToast("error", "Error", error as string);
    }
    event.target.reset();
  };

  return (
    <div className="relative">
      <Dialog
        visible={expandFeedbackDialog}
        onHide={() => {
          setExpandFeedbackDialog(!expandFeedbackDialog);
        }}
        draggable={false}
        header={
          <>
            <div className="text-color5">Please fill out this form</div>
            {/* <p className="text-base text-color4">
              Note: clicking submit button will open the email client of your
              device.
            </p> */}
          </>
        }
        className="aboutDialog w-full md:w-[65%] h-full md:h-[80%] absolute bottom-0 md:bottom-auto"
      >
        <form
          // className={`w3-card w3-theme-l2 w3-round w3-padding-large w3-mobile`}
          className="h-full p-2 md:p-4 flex flex-col gap-y-3 text-color5 bg-color2 rounded-md overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-3">
            <div className="w-full md:w-1/2 flex flex-col gap-y-3">
              <label className="text-lg">Your Email Address:</label>

              <input
                title="Email address"
                className="h-10 px-4 bg-color3 text-color5 rounded-lg"
                type="email"
                name="Email"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-y-3">
              <label className="text-lg">Your Name:</label>

              <input
                title="Name"
                className="h-10 px-4 bg-color3 text-color5 rounded-lg"
                type="text"
                name="Name"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-lg">Your Message:</label>

            <textarea
              title="You message"
              className="h-40 p-4 bg-color3 text-color5 rounded-lg resize-none"
              name="Msg"
            ></textarea>
          </div>
          <div className="w-full h-12 flex justify-center items-center gap-x-4">
            <Button
              title="click to send"
              icon="pi pi-send"
              className="h-full px-5 bg-color4 text-color1"
              label="submit"
              type="submit"
            />
            <Button
              title="click to delete everything"
              icon="pi pi-trash"
              className="h-full px-5 bg-transparent text-color4"
              label="delete"
              type="reset"
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default FeedbackFormDialog;
