const KeyboardShortcuts = () => {
  const kbdStyles =
    "px-2 py-1 font-medium text-color4 bg-color1 rounded-md font-heading";

  return (
    <div>
      <ul className="px-3 flex flex-col gap-y-4">
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>H</kbd> for "Home" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>C</kbd> for "Contact" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>W</kbd> for "Work" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>O</kbd> for "Other Projects" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>F</kbd> for "Feedback" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>K</kbd> for "Keyboard Shortcuts" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>M</kbd> for "Menu & others".
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>E</kbd> for "Education" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>P</kbd> for "Profile View".
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>Z</kbd> for "Easy Mode" toggle.
        </li>
      </ul>
    </div>
  );
};

export default KeyboardShortcuts;
