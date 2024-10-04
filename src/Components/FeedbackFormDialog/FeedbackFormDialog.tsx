import { useState } from "react";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

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
    <Sidebar
      visible={state.showFeedbackDialog}
      onHide={() => setShowFeedbackDialog(!state.showFeedbackDialog)}
      dismissable={true}
      draggable={false}
      header={
        <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium">
          Please fill out this form
        </div>
      }
      className={`aboutDialog w-full md:w-[70%] mdl:w-[60%] lg:w-[50%] 2xl:w-[40%] h-full`}
      position="right"
      closeIcon={<span className="material-symbols-rounded">close</span>}
    >
      <form
        className="h-full p-2 md:p-4 lg:p-5 flex flex-col gap-y-6 text-color5 bg-color3 rounded-md overflow-y-auto shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-x-3 gap-y-6">
          <div className="w-full flex flex-col gap-y-3">
            <label className="text-lg md:text-xl lg:text-2xl font-subheading">
              Your Email Address:
            </label>

            <input
              disabled={loading}
              title="Email address"
              className="h-10 px-4 py-2 bg-color2 text-color4 text-base md:text-lg rounded-lg font-content"
              type="email"
              name="Email"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <label className="text-lg md:text-xl lg:text-2xl font-subheading">
              Your Name:
            </label>

            <input
              disabled={loading}
              title="Name"
              className="h-10 px-4 py-2 bg-color2 text-color4 text-base md:text-lg rounded-md font-content"
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
            className="h-40 px-4 py-2 bg-color2 text-color4 text-base md:text-lg font-content rounded-lg resize-none"
            name="Msg"
            required
          ></textarea>
        </div>
        <div className="w-full h-10 md:h-12 lg:h-14 text-base md:text-lg lg:text-xl flex flex-wrap flex-row-reverse justify-center items-center gap-x-4 font-heading">
          <Button
            loading={loading}
            title="click to send"
            icon={
              <span className="material-symbols-rounded mr-2 font-medium">
                send
              </span>
            }
            className="h-full px-8 md:px-10 bg-color1 text-color4"
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
            className="h-full px-8 md:px-10 bg-transparent text-color1"
            label="Delete"
            type="reset"
          />
        </div>
      </form>
    </Sidebar>
  );
};

export default FeedbackFormDialog;
