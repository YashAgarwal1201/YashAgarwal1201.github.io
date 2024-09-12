import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { TabPanel, TabView } from "primereact/tabview";

import {
  ABOUT_CONTACT,
  ABOUT_EDUCATION,
  ABOUT_ME,
  ABOUT_OTHER_PROJECTS,
  ABOUT_WORK,
  aboutInfo,
} from "../../Data/Data";
import ContactLinks from "../About/ContactLinks/ContactLinks";
import "./ProfileComponent.scss";

const Work = () => {
  return ABOUT_WORK?.map((val, key) => (
    <Card key={key} title={val.year}>
      {val.position && <p>{val.position}</p>}
      {val.projects && (
        <ul>
          {val.projects.map((v, k) => (
            <li key={k}>{v}</li>
          ))}
        </ul>
      )}
    </Card>
  ));
};

const Education = () => {
  return ABOUT_EDUCATION.map((val, key) => (
    <Card key={key} title={val.year}>
      {val.institution && <p>{val.institution}</p>}
      {val.description && <p>{val.description}</p>}
    </Card>
  ));
};

const OtherProjects = () => {
  return ABOUT_OTHER_PROJECTS.map((val, key) => (
    <Card key={key} title={val.year}>
      <div className="w-full ps-3 sm:ps-4 md:ps-6 mdl:ps-7 ld:ps-10 2xl:ps-14 flex gap-x-3 flex-wrap">
        {val.projects.length > 0 &&
          val.projects.map((v, k) => (
            <a
              href={v.posterLink}
              target="_blank"
              key={k}
              title={v.title}
              className="w-20 aspect-square p-2 sm:p-3 mdl:p-4 bg-color3 cursor-pointer rounded-full"
            >
              <img
                src={v.posterLink + "/logo.svg"}
                alt={v.title}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
      </div>
    </Card>
  ));
};

const Contact = () => {
  return (
    <Card>
      <div className="w-full flex justify-center items-center gap-x-3 flex-wrap">
        {ABOUT_CONTACT.map((value, key) => (
          <a
            key={key}
            title={value.title}
            href={value.type === "email" ? `mailto:${value.link}` : value.link}
            target="_blank"
            className={`w-20 aspect-square flex justify-center items-center p-2 sm:p-3 mdl:p-4 bg-color2 cursor-pointer rounded-full text-2xl text-color4`}
          >
            <span
              className={`pi pi-${
                value.type === "email" ? "envelope" : value.type
              } text-3xl`}
            ></span>
          </a>
        ))}
      </div>
    </Card>
  );
};

const ProfileComponent = () => {
  return (
    <div className="profile-component w-full h-full flex flex-col items-center gap-y-3 overflow-auto">
      <div className="w-full ">
        <div className="w-full h-full mdl:h-[400px] py-10 mdl:py-4 flex flex-col mdl:flex-row justify-center items-center gap-2 mdl:gap-4 lg:gap-7 ">
          <div className="w-[80%] max-w-[150px] h-auto aspect-square border rounded-md"></div>
          <div className="flex flex-col items-center mdl:items-start gap-2">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Yash Agarwal
            </h1>
            <p className="text-lg sm:text-xl mdl:text:2xl font-subheading">
              Associate UI developer
            </p>
            <p className="text-base sm:text-lg mdl:text-xl font-subheading">
              @ Techolution, India
            </p>
          </div>
        </div>
        {/* <div className="w-full h-0 mdl:h-[60%] flex justify-center items-center">
          <div className="hidden mdl:grid grid-cols-2 gap-4 max-w-[500px] w-full aspect-square p-5">
            <Button
              title="work"
              icon={<span className="material-symbols-rounded">work</span>}
              className={buttonStyles}
            />
            <Button
              title="education"
              icon={<span className="material-symbols-rounded">school</span>}
              className={buttonStyles}
            />
            <Button
              title="other projects"
              icon={
                <span className="material-symbols-rounded">
                  developer_guide
                </span>
              }
              className={buttonStyles}
            />
            <Button
              title="contact"
              icon={
                <span className="material-symbols-rounded">contact_page</span>
              }
              className={buttonStyles}
            />
          </div>
        </div> */}
      </div>
      <div className="w-full h-auto flex flex-col gap-y-4">
        {/* <TabView className="bg-transparent">
          {aboutInfo
            ?.filter(
              (values) => !values?.header?.toLowerCase()?.includes("contact")
            )
            ?.map((values, keys) => (
              <TabPanel
                header={values?.header}
                className="w-full p-4 flex flex-col gap-2 bg-transparent"
                contentClassName="bg-color2"
                headerClassName="p-0 h-10 md:h-12 lg:h-14 bg-transparent text-color1 text-base sm:text-lg mdl:text-xl font-content font-normal"
                key={keys}
              >
                {values?.content?.map((value, key) => (
                  <Card title={value?.year} key={key} className="">
                    {value?.description ? <p>{value?.description}</p> : ""}
                    <ul>
                      {value?.projects?.map((v, k) => (
                        <li key={k}>{v}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </TabPanel>
            ))}
          <TabPanel
            header={aboutInfo[aboutInfo.length - 1]?.header}
            className="w-full p-4 flex flex-col gap-2 bg-transparent"
            contentClassName="bg-color2"
            headerClassName="p-0 h-10 md:h-12 lg:h-14 bg-transparent text-color1 text-lg sm:text-xl mdl: text-2xl font-content font-normal"
          >
            <Card>
              <ContactLinks
                content={aboutInfo[aboutInfo.length - 1]?.content}
              />
            </Card>
          </TabPanel>
        </TabView> */}

        <TabView className="bg-transparent">
          {ABOUT_ME?.filter(
            (values) => !values?.header?.toLowerCase()?.includes("contact")
          )?.map((values, keys) => (
            <TabPanel
              header={values?.header}
              className="w-full p-4 flex flex-col gap-2 bg-transparent"
              contentClassName="bg-color2"
              headerClassName="p-0 h-10 md:h-12 lg:h-14 bg-transparent text-color1 text-base sm:text-lg mdl:text-xl font-content font-normal"
              key={keys}
            >
              {values.header.toLowerCase()?.includes("work") ? (
                <Work />
              ) : values.header.toLowerCase()?.includes("projects") ? (
                <OtherProjects />
              ) : values.header.toLowerCase()?.includes("education") ? (
                <Education />
              ) : (
                ""
              )}
            </TabPanel>
          ))}
          <TabPanel
            header={aboutInfo[aboutInfo.length - 1]?.header}
            className="w-full p-4 flex flex-col gap-2 bg-transparent"
            contentClassName="bg-color2"
            headerClassName="p-0 h-10 md:h-12 lg:h-14 bg-transparent text-color1 text-lg sm:text-xl mdl: text-2xl font-content font-normal"
          >
            <Contact />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default ProfileComponent;
