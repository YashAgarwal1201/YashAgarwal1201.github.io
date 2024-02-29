import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// import { aboutInfo } from "../../../Data/Data";
import { useAppContext } from "../../../Services/AppContext";

const ContactLinks = ({ contactContent }: { contactContent: any }) => {
  const { showToast } = useAppContext();

  return (
    <div className="flex justify-center gap-x-1 mb-10 sm:mb-0">
      {contactContent.map(
        (
          values: { type: string; title: string; link: string },
          key: number
        ) => {
          if (values.type === "email") {
            return (
              <Button
                key={key}
                title={values.title}
                className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(values.link);
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
            );
          } else {
            return (
              <Link
                key={key}
                title={values.title}
                className="w-12 md:w-16 h-12 md:h-16 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
                to={values.link}
                target="_blank"
              >
                <span className={`pi pi-${values.type} md:text-2xl`}></span>
              </Link>
            );
          }
        }
      )}
    </div>
  );
};

export default ContactLinks;
