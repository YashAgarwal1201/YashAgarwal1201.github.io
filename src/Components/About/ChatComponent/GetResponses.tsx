import { ABOUT_WORK, primaryInfo } from "../../../Data/Data";
import { Contact } from "../../Profile/ProfileComponent";

export const getResponse = ({ query, setShowOptions, setShowMoreOptions }) => {
  const lowerQuery = query?.toLowerCase();

  if (lowerQuery?.includes("about yourself")) {
    return (
      <div className="text-color2">
        Hey, this is <span className="font-subheading">{primaryInfo.name}</span>
        . I work as an{" "}
        <span className="font-subheading">{primaryInfo.currentPosition}</span> @{" "}
        <a
          href={"https://www.techolution.com/"}
          target="_blank"
          rel="noopener"
          className="font-subheading not-italic"
        >
          {primaryInfo.currentOrganisation}
        </a>
        .
      </div>
    );
  } else if (lowerQuery?.includes("your work")) {
    const projects = ABOUT_WORK?.flatMap((work) => work.projects);

    return (
      <div className="text-color2">
        <p>
          I am currently working as an{" "}
          <span className="font-subheading">{primaryInfo.currentPosition}</span>{" "}
          at{" "}
          <span className="font-subheading">
            {primaryInfo.currentOrganisation}
          </span>
          .<br />
        </p>
        <p>
          Here are some projects I've worked on at{" "}
          <span className="font-subheading">
            {primaryInfo.currentOrganisation}:
          </span>
        </p>
        <ul>
          {projects?.map((val, key) => (
            <li key={key}>{val}</li>
          ))}
        </ul>
      </div>
    );
  } else if (lowerQuery?.includes("connect with you")) {
    return <div className="bg-color4">{Contact()}</div>;
  } else if (lowerQuery?.includes("your education")) {
    return `
## My Education:

* I completed my graduation in Bachelor of Technology in 2022 from DIT University, Dehradun, India.
* Before that, in 2018, I completed my Intermediate (12th standard) education from Modern Era Public School, Bijnor, India.
    `;
  } else if (lowerQuery?.includes("favorite movies")) {
    return `I am a huge Marvel and Star Wars fan. Avengers, Black Panther, and Rogue One are my favorite movies.`;
  } else if (lowerQuery?.includes("suggest me some")) {
    return `Hmm, I'd suggest you watch the Original Trilogy from Star Wars along with Rogue One. For Marvel, start with Iron Man and Captain America movies, as well as my favorites: Avengers and Black Panther.`;
  } else if (lowerQuery?.includes("more options")) {
    setShowMoreOptions(true);
    setShowOptions(false);
    return "";
  } else if (lowerQuery?.includes("previous options")) {
    setShowOptions(true);
    setShowMoreOptions(false);
    return "";
  } else {
    return `Sorry, but I don't have any information on that right now.`;
  }
};
