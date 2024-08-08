import { primaryInfo, TECHOLUTION_PROJECTS } from "../../../Data/Data";

export const getResponse = ({
  query,
  setShowOptions,
  setShowMoreOptions,
}: {
  query: string;
  setShowOptions: any;
  setShowMoreOptions: any;
}) => {
  const lowerQuery = query?.toLowerCase();

  if (lowerQuery?.includes("about yourself")) {
    return `Hey, this is **${primaryInfo.name}**. I work as an **${primaryInfo.currentPosition}** @ **${primaryInfo.currentOrganisation}**.`;
  } else if (lowerQuery?.includes("your work")) {
    return `
I am currently working as an **${primaryInfo.currentPosition}** at **${
      primaryInfo.currentOrganisation
    }**.

Here are some projects I've worked on at ${primaryInfo.currentOrganisation}:

* ${TECHOLUTION_PROJECTS.join("\n* ")}
        `;
  } else if (lowerQuery?.includes("connect with you")) {
    return `
Connect with me:
<div className="flex items-center justify-center gap-x-2">
<a href="mailto:legoyashx@hotmail.com" title="Click to copy my email id" className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                className="pi pi-envelope text-base sm:text-lg md:text-xl"
              ></span></a>
<a href="https://www.linkedin.com/in/yash-a-a669b2237" title="Click to view my LinkedIn profile" target="_blank" className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                className="pi pi-linkedin text-base sm:text-lg md:text-xl"
              ></span></a>
<a href="https://github.com/YashAgarwal1201" title="Click to check my GitHub profile" target="_blank" className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                className="pi pi-github text-base sm:text-lg md:text-xl"
              ></span></a>
<a href="https://drive.google.com/file/d/1d7Ha14j-KYxfmVHf8Fi7RvaioUzGDw_u/view?usp=share_link" title="Click to see my resume" target="_blank" className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                className="pi pi-id-card text-base sm:text-lg md:text-xl"
              ></span></a>
<a href="https://t.me/legoyashx" title="Click to connect on Telegram" target="_blank" className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] flex justify-center items-center bg-color4 text-color1 text-xl md:text-2xl rounded-full cursor-pointer"><span
                className="pi pi-telegram text-base sm:text-lg md:text-xl"
              ></span></a>
</div>
        `;
  } else if (lowerQuery?.includes("your education")) {
    return `
## My Education:

* I completed my graduation in Bachelor of Technology in 2022 from DIT University, Dehradun, India.
* Before that, in 2018, I completed my Intermediate (12th standard) education from Modern Era Public School, Bijnor, India.
        `;
  } else if (lowerQuery?.includes("favorite movies")) {
    return `I am huge marvel and star wars fan. Avengers, Black Panther and Rouge One are my favourite movies.`;
  } else if (lowerQuery?.includes("suggest me some")) {
    return `Hmm, I'll suggest you the Original Trilogy from star wars along with Rouge One. In marvel, I'll say start with Iron Man and Captain America movies along with my favourites Avengers and Black Panther`;
  } else if (lowerQuery?.includes("more options")) {
    // console.log(88);
    setShowMoreOptions(true);
    setShowOptions(false);
    // return ''
  } else if (lowerQuery?.includes("previous options")) {
    setShowOptions(true);
    setShowMoreOptions(false);
    // return ''
  } else {
    return `
Sorry, but I don't have any information on that right now.
        `;
  }
};
