import React from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import ContactLinks from "../About/ContactLinks/ContactLinks";
import { aboutInfo } from "../../Data/Data";

const ProfileComponent = () => {
  const buttonStyles = "w-full bg-color2";
  return (
    <div className="w-full h-full flex flex-col md:flex-col mdl:flex-row items-center gap-y-3 border overflow-auto">
      <div className="w-full mdl:w-1/2 h-auto mdl:h-full border-2">
        <div className="w-full h-full mdl:h-[40%] py-10 mdl:py-4 flex flex-col justify-center items-center gap-y-2 mdl:gap-y-3 lg:gap-y-4 border">
          <div className="w-[80%] max-w-[150px] h-auto aspect-square border rounded-md"></div>
          <h1 className="font-heading text-xl mdl:text-2xl">Yash Agarwal</h1>
        </div>

        <div className="hidden mdl:grid grid-cols-2 gap-4 w-full h-0 mdl:h-[60%] p-5">
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
              <span className="material-symbols-rounded">developer_guide</span>
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
      </div>
      <div className="w-full mdl:w-1/2 h-auto mdl:h-full flex flex-col gap-y-4 overflow-auto">
        {/* <div className="w-full border p-4">
          <h2>Work</h2>
          <Card title="tit"></Card>
        </div>

        <div className="w-full border p-4">
          <h2>education</h2>
          <Card title="tit"></Card>
        </div>

        <div className="w-full border p-4">
          <h2>other projects</h2>
          <Card title="tit"></Card>
        </div> */}
        {aboutInfo
          .filter(
            (values) => !values.header?.toLowerCase()?.includes("contact")
          )
          ?.map((values, keys) => (
            <div className="w-full border p-4 flex flex-col gap-2" key={keys}>
              <h2>{values.header}</h2>
              {values.content.map((value, key) => (
                <Card title={value.year}>
                  <p>{value.description}</p>{" "}
                  <ul>
                    {value.projects?.map((v, k) => (
                      <li key={k}>{v}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          ))}

        <div className="w-full border p-4">
          <h2>Contact</h2>
          <Card>
            <ContactLinks content={aboutInfo[aboutInfo.length - 1].content} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
