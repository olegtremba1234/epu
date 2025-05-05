import { Link } from "react-router";

const About = () => (
  <section className="px-4 py-16 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
      Про компанію
    </h2>
    <p className="text-gray-700 mb-6" data-aos="fade-up">
      Ми — команда з досвідом у логістиці, агровиробництві та експорті. Наша
      ціль — надійність, якість та розвиток українського сільського
      господарства.
    </p>
    <Link
      to="/about"
      className="text-green-700 font-medium hover:underline"
      data-aos="fade-up"
    >
      Детальніше про нас →
    </Link>
  </section>
);

export default About;
