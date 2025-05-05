import { Link } from "react-router";
import ContactForm from "./ContactForm";

const ContactSection = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
      Готові до співпраці?
    </h2>
    <p className="mb-6 text-lg" data-aos="fade-up">
      Залиште заявку або зателефонуйте вже зараз!
    </p>
    <Link
      to="/contacts"
      className="border border-green-800 text-green-800 px-6 py-3 rounded-md font-medium hover:bg-green-800 hover:border-green-800 hover:text-white transition duration-200 ease-in-out"
      data-aos="fade-up"
    >
      Контакти
    </Link>
    <ContactForm />
  </section>
);

export default ContactSection;
