import { useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { BASE_API_LINK } from "../../Data/Data";
import { useAppContext } from "../../Services/AppContext";

const FeedbackFormDialog = () => {
  const { state, showToast, setShowFeedbackDialog } = useAppContext();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const userEmailId = event.target?.Email?.value;
    const userName = event.target?.Name?.value;
    const message = event.target?.Msg?.value;

    // const emailBody = encodeURIComponent(
    //   `${message}\r\n\r\nUser Entered Email: ${userEmailId}\r\nUser's Entered Name: ${userName}\r\n`
    // );

    try {
      setLoading(true);

      const response = await fetch(
        `${BASE_API_LINK}/api-services/my-portfolio/contact-form-data`,
        // `http://localhost:4500/api-services/my-portfolio/contact-form-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmailId,
            name: userName,
            message: message,
          }),
        }
      );

      if (response.ok) {
        setLoading(false);
        event.target?.reset();

        // setExpandFeedbackDialog(!expandFeedbackDialog);
        // setSelectedContent("");
        setShowFeedbackDialog(!state.showFeedbackDialog);

        showToast("success", "Success", "Form submitted");
      } else {
        setLoading(false);
        // const errorResponse = await response.json(); // Assuming the server sends error details as JSON
        console.error("Error:", response.text || "An unknown error occurred");

        showToast("error", "Error", "Failed to submit form");
      }
      // window.open(
      //   `mailto:${feedback.content.mailTo}?subject=feedback%20from%20${userName}%20(${userEmailId})&body=${emailBody}&bcc=${bcc}`,
      //   `_blank`
      // );
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative">
      <Dialog
        visible={state.showFeedbackDialog}
        onHide={() => setShowFeedbackDialog(!state.showFeedbackDialog)}
        dismissableMask={true}
        draggable={false}
        header={
          <>
            <div className="text-color1 lg:text-3xl font-heading font-normal">
              Please fill out this form
            </div>
          </>
        }
        className={`aboutDialog ${
          state.easyMode
            ? "w-full md:w-1/2"
            : "w-full md:w-[85%] mdl:w-[75%] lg:w-[65%]"
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
          className="h-full p-2 md:p-4 flex flex-col gap-y-6 text-color5 bg-color2 rounded-md overflow-y-auto shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-x-3 gap-y-3">
            <div className="w-full md:w-1/2 flex flex-col gap-y-3">
              <label className="text-lg md:text-xl lg:text-2xl font-subheading">
                Your Email Address:
              </label>

              <input
                disabled={loading}
                title="Email address"
                className="h-10 px-4 bg-color3 text-color4 text-base md:text-lg rounded-lg font-content"
                type="email"
                name="Email"
                required
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-y-3">
              <label className="text-lg md:text-xl lg:text-2xl font-subheading">
                Your Name:
              </label>

              <input
                disabled={loading}
                title="Name"
                className="h-10 px-4 bg-color3 text-color4 text-base md:text-lg rounded-md font-content"
                type="text"
                name="Name"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <label className="text-lg md:text-xl lg:text-2xl font-subheading">
              Your Message:
            </label>

            <textarea
              disabled={loading}
              title="You message"
              className="h-40 p-4 bg-color3 text-color4 text-base md:text-lg font-content rounded-lg resize-none"
              name="Msg"
              required
            ></textarea>
          </div>
          <div className="w-full h-10 md:h-12 lg:h-14 text-base md:text-lg lg:text-xl flex flex-row-reverse justify-center items-center gap-x-4 font-heading">
            <Button
              loading={loading}
              title="click to send"
              icon={
                <span className="material-symbols-rounded mr-2 font-medium">
                  send
                </span>
              }
              className="h-full px-5 bg-color4 text-color1"
              label="Submit"
              type="submit"
            />
            <Button
              disabled={loading}
              title="click to delete everything"
              icon={
                <span className="material-symbols-rounded mr-2 font-medium">
                  delete
                </span>
              }
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
