import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// import { useAppContext } from "../../../Services/AppContext";

const OtherProjects = ({ content }: { content: any }) => {
  //   const { showToast } = useAppContext();

  return (
    <div className="flex justify-center gap-x-1 ">
      {content.map(
        (
          values: { year: string; description?: string; link: string },
          key: number
        ) => {
          return (
            <Link
              key={key}
              title={values.description}
              className="w-12 md:w-16 h-12 md:h-16 p-0 flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"
              to={values.link}
              target="_blank"
            >
              <img
                src={`${values.link}logo.svg`}
                alt="project logo "
                className="w-full h-full border-2 rounded-full"
              />
            </Link>
          );
        }
      )}
    </div>
  );
};

export default OtherProjects;
