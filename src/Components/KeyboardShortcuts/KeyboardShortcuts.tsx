const KeyboardShortcuts = () => {
  const kbdStyles = "px-2 py-1 font-semibold text-color4 bg-color1 rounded-md";
  return (
    <div>
      <ul className="px-3 flex flex-col gap-y-4">
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>h</kbd> for "Home" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>a</kbd> for "About" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>f</kbd> for "Feedback" section.
        </li>
        <li>
          Press <kbd className={kbdStyles}>Shift</kbd> +{" "}
          <kbd className={kbdStyles}>m</kbd> for "Menu & others".
        </li>
      </ul>
    </div>
  );
};

export default KeyboardShortcuts;
