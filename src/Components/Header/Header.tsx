import { Button } from "primereact/button";

import { useAppContext } from "../../Services/AppContext";

type HeaderProps = {
  setSelectedButton: (section: string) => void; //React.Dispatch<React.SetStateAction<string>>;
  showMenuDialog: boolean;
  setShowMenuDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({
  setSelectedButton,
  showMenuDialog,
  setShowMenuDialog,
}: HeaderProps) => {
  const { state } = useAppContext();
  const selectedButtonStyles =
    "text-color1 bg-color4 border-2 border-solid border-color4 shadow-md";
  const normalButtonStyles =
    "text-color5 bg-transparent border-2 border-transparent";

  return (
    <div className="w-full lg:w-[75px] h-12 lg:h-full relative">
      <div className="w-full lg:w-[75px] h-12 lg:h-full flex flex-row lg:flex-col items-center justify-center gap-y-0 md:gap-y-1 gap-x-1 lg:gap-x-0">
        <Button
          title="Home page"
          icon={<span className="material-symbols-rounded">home</span>}
          className={`${
            state.selectedContentBtn === "home"
              ? selectedButtonStyles
              : normalButtonStyles
          } w-12 lg:w-16 h-full lg:h-16`}
          onClick={() => {
            setSelectedButton("home");
          }}
        />
        <Button
          title="About me"
          icon={<span className="material-symbols-rounded">person</span>}
          className={`${
            state.selectedContentBtn === "about"
              ? selectedButtonStyles
              : normalButtonStyles
          } w-12 lg:w-16 h-full lg:h-16`}
          onClick={() => {
            setSelectedButton("about");
          }}
        />
        <Button
          title="Give feedback"
          icon={<span className="material-symbols-rounded">mail</span>}
          className={`${
            state.selectedContentBtn === "feedback"
              ? selectedButtonStyles
              : normalButtonStyles
          } w-12 lg:w-16 h-full lg:h-16`}
          onClick={() => {
            setSelectedButton("feedback");
          }}
        />
        <Button
          title="Settings & others"
          icon={<span className="material-symbols-rounded">settings</span>}
          className={`${normalButtonStyles} hover:border-transparent  w-12 lg:w-16 h-full lg:h-16 lg:hidden`}
          onClick={() => setShowMenuDialog(!showMenuDialog)}
        />
      </div>
      <div className="hidden lg:block absolute w-fit h-fit bottom-0 md:bottom-2 left-auto md:left-0 right-2 md:right-0 m-auto">
        <Button
          title="Settings & others"
          icon={<span className="material-symbols-rounded">settings</span>}
          className={`${normalButtonStyles} hover:border-transparent  w-12 lg:w-16 h-full lg:h-16`}
          onClick={() => setShowMenuDialog(!showMenuDialog)}
        />
      </div>
    </div>
  );
};

export default Header;
