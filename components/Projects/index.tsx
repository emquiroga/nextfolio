import SectionLayout from "../SectionLayout";
import { projects } from "../../_content/info.json";

import ProjectItem from "./Item";
import styles from "./index.module.css";

const ProjectsSection = () => {
  return (
    <SectionLayout>
      <h2 className="text-large font-secondary font-semibold w-full mx-auto my-4 text-center text-textSecondary dark:text-dtextPrimary">
        {" "}
        <span className="text-special">&lt;</span> Selección de proyectos {` `}
        <span className="text-special">/&gt;</span>
      </h2>
      <div className={`${styles["projects-wrapper"]} text-center max-w-xl`}>
        {projects.map(({ title, url, description }) => {
          return <ProjectItem key={url} description={description} title={title} url={url} />;
        })}
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;
