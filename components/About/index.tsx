import SectionLayout from "../SectionLayout";

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
        <p className="my-4 font-primary text-small">
          Vivo en la ciudad de La Plata, Buenos Aires, Argentina. Soy un apasionado por los
          lenguajes, la tecnología y la comunicación.
        </p>
        <p className="my-4 font-primary text-small">
          Actualmente trabajo como Jr. Developer en Andreani Grupo Logístico y también como Web
          Developer en modalidad freelance.
        </p>
        <p className="my-4 font-primary text-small">
          Mi fuerte es el desarrollo frontend con React y el maquetado web. Me encanta el diseño
          pixel-perfect, las buenas prácticas de código y los diseños responsivos.
        </p>
        <p className="my-4 font-primary text-small">
          Algunos de los lenguajes, librerías y frameworks con los que he trabajado son:
          JavaScript(ES6)/TypeScript, React (Next.js), Redux, react-router, HTML, CSS/Sass,
          Bootstrap/Tailwind, Laravel, .NET(C#) y MySQL.
        </p>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
