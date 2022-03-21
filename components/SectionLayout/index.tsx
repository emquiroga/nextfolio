import styles from "./index.module.css";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const SectionLayout = ({ children }: Props) => {
  return <section className={styles["section"]}>{children}</section>;
};

export default SectionLayout;
