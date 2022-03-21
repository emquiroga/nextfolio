import SectionLayout from "../SectionLayout";

import ContactForm from "./Form";

const ContactSection = () => {
  return (
    <SectionLayout>
      <h3 className="text-large font-secondary font-semibold w-3/4 mx-auto my-6 text-center text-textSecondary dark:text-dtextPrimary">
        <span className="text-special">¿</span>Te interesa que trabajemos juntos
        <span className="text-special">?</span> <span className="text-special">¡</span>Pongámonos en
        contacto<span className="text-special">!</span>
      </h3>
      <ContactForm />
    </SectionLayout>
  );
};

export default ContactSection;