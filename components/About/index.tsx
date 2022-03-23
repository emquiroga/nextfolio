import SectionLayout from "../SectionLayout";
import { about } from "../../_content/info.json";

import styles from "./index.module.css";

const AboutSection = () => {
  return (
    <SectionLayout>
      <h2 className="text-large font-secondary font-semibold w-full mx-auto my-4 text-center text-textSecondary dark:text-dtextPrimary">
        <span className="text-special">&lt;</span>Sobre mí {` `}
        <span className="text-special">/&gt;</span>
      </h2>
      <div
        className={`w-full max-w-md px-10 text-textSecondary dark:text-dtextSecondary ${styles["about-info-container"]}`}
      >
        {about.map((item, index) => {
          return (
            <p key={index} className="my-4 font-primary text-small">
              {item}
            </p>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
