import { useTheme } from "next-themes";
import { useCallback, useState } from "react";

const useLocalTheme = () => {
  const [checked, setChecked] = useState(
    typeof window !== "undefined" && window.localStorage.getItem("theme") === "dark"
  );
  const { theme, setTheme } = useTheme();

  const toggleCheck = useCallback(() => {
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    setChecked(!checked);
    toggleTheme();
  }, [checked, theme, setTheme]);

  return { checked, toggleCheck };
};

export default useLocalTheme;
