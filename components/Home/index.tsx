import Image from "next/image";

import SectionLayout from "../SectionLayout";

import styles from "./index.module.css";
import ThemeToggler from "./ThemeToggler";

const HomeSection = () => {
  return (
    <SectionLayout>
      <ThemeToggler />
      <div className={styles["home-container"]}>
        <div className={styles["wrapper-left"]}>
          <figure className={styles["img-container"]}>
            <Image
              alt="Portrait of Developer"
              className={styles["img-home"]}
              height={100}
              layout="responsive"
              src="/assets/portrait.jpg"
              width={100}
            />
          </figure>
          <h1 className={`text-xXL font-secondary max-w-xs my-4 text-center text-textSecondary dark:text-dtextPrimary ${styles["main-title"]}`}>
            <span className="text-special">E</span>miliano
            Quiroga<span className="text-special">.</span>
          </h1>
        </div>
        <div className={styles["wrapper-right"]}>
          <h3 className="text-medium font-secondary w-3/4 max-w-sm my-6 text-center text-textSecondary dark:text-dtextPrimary">
            Frontend Developer - Freelance Web Developer
          </h3>
        </div>
      </div>
    </SectionLayout>
  );
};

export default HomeSection;
