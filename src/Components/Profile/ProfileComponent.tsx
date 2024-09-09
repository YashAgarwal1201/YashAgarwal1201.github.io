import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { TabPanel, TabView } from "primereact/tabview";

import { aboutInfo } from "../../Data/Data";
import ContactLinks from "../About/ContactLinks/ContactLinks";
import "./ProfileComponent.scss";

const ProfileComponent = () => {
  const buttonStyles = "w-full bg-color2";
  return (
    <div className="profile-component w-full h-full flex flex-col items-center gap-y-3 overflow-auto">
      <div className="w-full ">
        <div className="w-full h-full mdl:h-[400px] py-10 mdl:py-4 flex flex-col justify-center items-center gap-y-2 mdl:gap-y-3 lg:gap-y-4 ">
          <div className="w-[80%] max-w-[150px] h-auto aspect-square border rounded-md"></div>
          <h1 className="font-heading text-xl mdl:text-2xl">Yash Agarwal</h1>
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
        <TabView className="bg-transparent">
          {aboutInfo
            .filter(
              (values) => !values?.header?.toLowerCase()?.includes("contact")
            )
            ?.map((values, keys) => (
              <TabPanel
                header={values?.header}
                className="w-full p-4 flex flex-col gap-2 bg-transparent"
                contentClassName="bg-color2"
                headerClassName="p-0 h-full bg-transparent text-color1 text-lg sm:text-xl mdl: text-2xl font-content font-normal"
                key={keys}
              >
                {values?.content?.map((value, key) => (
                  <Card title={value?.year} key={key} className="">
                    <p>{value?.description}</p>{" "}
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
            headerClassName="p-0 bg-transparent text-color1 text-lg sm:text-xl mdl: text-2xl font-heading font-normal"
          >
            <Card>
              <ContactLinks
                content={aboutInfo[aboutInfo.length - 1]?.content}
              />
            </Card>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default ProfileComponent;
