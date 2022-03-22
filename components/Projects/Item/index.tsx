import styles from "./index.module.css";

interface IProjectsItemProps {
  title: string;
  description: string;
  url: string;
}

const ProjectItem = ({ title, description, url }: IProjectsItemProps) => {
  return (
    <div className={`pb-4 ${styles["project-item"]}`}>
      <div>
        <div
          className={`${styles["item-title"]} mb-4 transition-all text-textPrimary dark:text-dtextPrimary font-primary font-bold text-medium hover:text-special dark:hover:text-special`}
        >
          <a href={url} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </div>
        <div className="text-textSecondary dark:text-dtextSecondary font-secondary text-small">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
