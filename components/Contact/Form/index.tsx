import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./index.module.css";

interface SubmitValues {
  name: string;
  email: string;
  message: string;
}

const initialState = {
  name: "",
  email: "",
  message: ""
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("* El nombre es requerido"),
  email: Yup.string().email("* El email no es válido").required("* El email es requerido"),
  message: Yup.string().required("* El mensaje es requerido")
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (values: SubmitValues) => {
    console.log(values);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
   return () => {
     clearTimeout();
   };
  }, [isSubmitted]);

  if (isSubmitted)
    return (
      <div className="text-center font-medium w-3/4 text-textSecondary dark:text-dtextSecondary">
        <p className="font-secondary my-2">¡Gracias por contactarme!</p>
        <p className="font-secondary my-2">
          Estaré respondiendo a tu mensaje en las próximas horas.
        </p>
        <p className="font-secondary my-2">Redireccionando en 5 segundos.</p>
      </div>
    );

  return (
    <div className={styles["form-container"]}>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit }) => (
          <form action="" className={styles["contact-form"]} onSubmit={handleSubmit}>
            <div className={`w-full py-1 ${styles["form-group"]}`}>
              <label className={styles["form-label"]} htmlFor="name" />
              <Field
                className={`w-full font-primary rounded-lg bg-bg2 dark:bg-dbg2 placeholder:text-textSecondary dark:placeholder:text-dtextSecondary text-textPrimary dark:text-dtextPrimary ${styles["form-control"]}`}
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                type="text"
              />
              <ErrorMessage
                className={`text-special text-right font-semibold my-1 ${styles["form-error"]}`}
                component="div"
                name="name"
              />
            </div>
            <div className={`w-full py-1 ${styles["form-group"]}`}>
              <label className={styles["form-label"]} htmlFor="email" />
              <Field
                className={`w-full font-primary rounded-lg bg-bg2 dark:bg-dbg2 placeholder:text-textSecondary dark:placeholder:text-dtextSecondary text-textPrimary dark:text-dtextPrimary ${styles["form-control"]}`}
                id="email"
                name="email"
                placeholder="Ingresa tu email"
                type="email"
              />
              <ErrorMessage
                className={`text-special text-right font-semibold my-1 ${styles["form-error"]}`}
                component="div"
                name="email"
              />
            </div>
            <div className={`w-full py-1 ${styles["form-group"]}`}>
              <label className={styles["form-label"]} htmlFor="message" />
              <Field
                as="textarea"
                className={`w-full font-primary rounded-lg bg-bg2 dark:bg-dbg2 placeholder:text-textSecondary dark:placeholder:text-dtextSecondary text-textPrimary dark:text-dtextPrimary ${styles["form-control"]}`}
                id="message"
                name="message"
                placeholder="Deja tu mensaje aquí"
                rows={4}
                type="text"
              />
              <ErrorMessage
                className={`text-special text-right font-semibold my-1 ${styles["form-error"]}`}
                component="div"
                name="message"
              />
            </div>
            <button
              className={`text-small font-bold rounded-md w-2/4 p-2 my-1 bg-textSecondary dark:bg-dtextSecondary text-body dark:text-dbody hover:bg-special hover:text-dbody dark:hover:bg-special dark:hover:text-body ${styles["submit-btn"]}`}
              type="submit"
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
