import { Button } from "primereact/button";
// import { useAppContext } from "../../Services/AppContext";

type HeaderProps = {
  selectedButton: string;
  setSelectedButton: (section: string) => void; //React.Dispatch<React.SetStateAction<string>>;
  showMenuDialog: boolean;
  setShowMenuDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({
  selectedButton,
  setSelectedButton,
  showMenuDialog,
  setShowMenuDialog,
}: HeaderProps) => {
  // const { state, dispatch, showToast } = useAppContext();
  const selectedButtonStyles = "text-color1 bg-color4 border-2 border-solid border-color4"
  const normalButtonStyles = "text-color5 bg-transparent border-2 border-transparent"

  return (
    <div className="w-full lg:w-[75px] h[75px] lg:h-full relative">
      <div className="w-full lg:w-[75px] h[75px] lg:h-full flex flex-row lg:flex-col items-center justify-center gap-y-0 md:gap-y-1 gap-x-1 lg:gap-x-0">
        <Button
          title="Home page"
          icon="pi pi-home"
          className={`${
            selectedButton === "home"
              ? selectedButtonStyles
              : normalButtonStyles
          } h-16 w-16 `}
          onClick={() => {
            setSelectedButton("home");
          }}
        />
        <Button
          title="About me"
          icon="pi pi-user"
          className={`${
            selectedButton === "about"
              ? selectedButtonStyles
              : normalButtonStyles
          } h-16 w-16 `}
          onClick={() => setSelectedButton("about")}
        />
        <Button
          title="Give feedback"
          icon="pi pi-comment"
          className={`${
            selectedButton === "feedback"
              ? selectedButtonStyles
              : normalButtonStyles
          } h-16 w-16 `}
          onClick={() => setSelectedButton("feedback")}
        />
        <Button
          title="Configuartion Menu"
          icon="pi pi-cog"
          className={`${normalButtonStyles} hover:border-color5 h-16 w-16 block lg:hidden`}
          onClick={() => setShowMenuDialog(!showMenuDialog)}
        />
      </div>
      <div className="hidden lg:block absolute w-fit h-fit bottom-0 md:bottom-2 left-auto md:left-0 right-2 md:right-0 m-auto">
        <Button
          title="Settings & others"
          icon="pi pi-cog"
          className={`${normalButtonStyles} hover:border-color5 h-16 w-16 `}
          onClick={() => setShowMenuDialog(!showMenuDialog)}
        />
      </div>
    </div>
  );
};

export default Header;
