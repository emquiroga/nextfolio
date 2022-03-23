import SectionLayout from "../SectionLayout";

import ProjectItem from "./Item";
import styles from "./index.module.css";

const PROJECTS = [
  {
    title: "California Dreaming",
    url: "https://emquiroga.github.io/california-dreaming/",
    description:
      "↳ Responsive Website desarrollado con HTML, Sass y JavaScript; bundle hecho con Gulp."
  },
  {
    title: "Dimacofi",
    url: "https://emquiroga.github.io/dimacofi-fullpage/",
    description: "↳ Responsive Website & Home Banking, desarrolladas con HTML, Sass y Bootstrap."
  },
  {
    title: "Loopstudios",
    url: "https://loopstudios-fem-rho.vercel.app/",
    description:
      "↳ Responsive Landing Page (template) desarrollada con React y Sass (Frontend Mentor)."
  }
];
const ProjectsSection = () => {
  return (
    <SectionLayout>
      <h2 className="text-large font-secondary font-semibold w-full mx-auto my-4 text-center text-textSecondary dark:text-dtextPrimary">
        {" "}
        <span className="text-special">&lt;</span> Selección de proyectos {` `}
        <span className="text-special">/&gt;</span>
      </h2>
      <div className={`${styles["projects-wrapper"]} text-center max-w-xl`}>
        {PROJECTS.map(({ title, url, description }) => {
          return <ProjectItem key={url} description={description} title={title} url={url} />;
        })}
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;
