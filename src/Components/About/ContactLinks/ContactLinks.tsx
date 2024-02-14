import { Button } from "primereact/button";
import { useAppContext } from "../../../Services/AppContext";
import { Link } from "react-router-dom";

const ContactLinks = () => {
  const { showToast } = useAppContext();

  return (
    <div className="flex justify-center gap-x-1 mb-10 sm:mb-0">
      <Button
        title="Click to copy email-id"
        className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
        onClick={(e) => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(e.currentTarget?.innerHTML);
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
        <span className="pi pi-envelope md:text-2xl"></span>
      </Button>

      <Link
        title="Click to chesee my linkedin profile"
        className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
        to="https://www.linkedin.com/in/yash-a-a669b2237"
        target="_blank"
      >
        <span className="pi pi-linkedin md:text-2xl"></span>
      </Link>

      <Link
        title="Click to check my github profile"
        className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
        to="https://github.com/YashAgarwal1201"
        target="_blank"
      >
        <span className="pi pi-github md:text-2xl"></span>
      </Link>

      <Link
        title="Click to check my resume"
        className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
        to="https://drive.google.com/file/d/1d7Ha14j-KYxfmVHf8Fi7RvaioUzGDw_u/view?usp=share_link"
        target="_blank"
      >
        <span className="pi pi-id-card md:text-2xl"></span>
      </Link>

      <Button
        title="Click to connect on telegram"
        className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
        onClick={() => {
          window.open("https://t.me/legoyashx", "_blank");
        }}
      >
        <span className="pi pi-telegram text-xl md:text-2xl"></span>
      </Button>
    </div>
  );
};

export default ContactLinks;
