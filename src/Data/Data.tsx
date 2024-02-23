export const primaryInfo = {
  name: "Yash Agarwal",
  currentPosition: "Associate UI Developer",
  currentOrganisation: "Techolution, India",
};

const contactLinks = [
  {
    link: "legoyashx@hotmail.com",
    type: "email",
    title: "Click to copy my email id",
  },
  {
    link: "https://www.linkedin.com/in/yash-a-a669b2237",
    type: "linkedin",
    title: "Click to view my linkedIn profile",
  },
  {
    link: "https://github.com/YashAgarwal1201",
    type: "github",
    title: "Click to check my github profile",
  },
  {
    link: "https://drive.google.com/file/d/1d7Ha14j-KYxfmVHf8Fi7RvaioUzGDw_u/view?usp=share_link",
    type: "id-card",
    title: "Click to see my resume",
  },
  {
    link: "https://t.me/legoyashx",
    type: "telegram",
    title: "Click to connect on telegram",
  },
];

export const aboutInfo = {
  education: [
    {
      year: <>2007 - 2018</>,
      description: <>Modern Era Public School, Bijnor.</>,
    },
    {
      year: <>2018 - 2022</>,
      description: (
        <>
          Bachelor of Technology <span className="pi pi-at text-sm"></span> DIT
          University, Dehradun.
        </>
      ),
      certifications: (
        <ul>
          <li>
            "Introduction to HTML5 by University of Michigan" on Coursera.
          </li>
          <li>"Crash course on Python by Google" on Coursera.</li>
          <li>
            "Introduction to Javascript" and "jQuery Tutorial" on Great Learing
            Academy.
          </li>
          <li>
            Completed certification for "UI/UX" on Great Learning Academy.
          </li>
          <li>
            Published article titled "RON - (a friendly chatbot)" on IJSREM.
          </li>
          <li>
            Completed Certification titled "React JS" on Great Learning Academy.
          </li>
        </ul>
      ),
    },
  ],

  work: [
    {
      year: <>December, 2022 - June, 2023</>,
      description: (
        <>
          UI Developer - Intern <span className="pi pi-at text-sm"></span>{" "}
          Techolution, India.
        </>
      ),
      projects: (
        <ul>
          <li>One stop demo shop</li>
          <li>Employee Handbook</li>
        </ul>
      ),
    },
    {
      year: <>July, 2022 - present</>,
      description: (
        <>
          Associate UI Developer <span className="pi pi-at text-sm"></span>{" "}
          Techolution, India.
        </>
      ),
      projects: (
        <ul>
          <li>Alan for talent fountaion</li>
          <li>Owens & Minor</li>
        </ul>
      ),
    },
  ],
  contact: contactLinks
};

export const feedback = {
  title: "feedback",
  content: {
    mailTo: "legoyashx@hotmail.com",
    bcc: "legoyashx@yahoo.com",
  },
};
