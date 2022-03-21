import { useCallback, useState } from "react";
import { useTheme } from "next-themes";

import styles from "./index.module.css";

const ThemeToggler = () => {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleCheck = useCallback(() => {
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    setChecked(!checked);
    toggleTheme();
  }, [checked, theme, setTheme]);

  return (
    <div className={`bg-textPrimary dark:bg-dtextPrimary ${styles["toggler-wrapper"]}`}>
      <input
        checked={checked}
        className={styles["theme-input"]}
        id="theme-toggler"
        type="checkbox"
        onChange={toggleCheck}
      />
      <label className={`text-special ${styles["theme-label"]}`} htmlFor="theme-toggler">
        <svg
          aria-hidden="true"
          className={styles["theme-icon"]}
          data-icon="moon"
          data-prefix="fas"
          focusable="false"
          role="img"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
            fill="currentColor"
          />
        </svg>
        <svg
          aria-hidden="true"
          className={styles["theme-icon"]}
          data-icon="sun"
          data-prefix="fas"
          focusable="false"
          role="img"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
            fill="currentColor"
          />
        </svg>
        <div
          className={`bg-body dark:bg-dbody border-2 border-textPrimary  dark:border-dtextSecondary ${styles["theme-ball"]}`}
        />
      </label>
    </div>
  );
};

export default ThemeToggler;
