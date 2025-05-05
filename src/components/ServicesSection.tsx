import { Link } from "react-router";

const Services = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
        Наші напрямки
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <Link
          to="/activity"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold mb-2">Діяльність</h3>
          <p className="text-gray-600">
            Зберігання, логістика та реалізація с/г продукції.
          </p>
        </Link>
        <Link
          to="/purchases"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold mb-2">Закупівлі</h3>
          <p className="text-gray-600">
            Закуповуємо зернові та олійні культури по всій Україні.
          </p>
        </Link>
        <Link
          to="/career"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold mb-2">Кар’єра</h3>
          <p className="text-gray-600">
            Приєднуйтесь до нашої команди професіоналів.
          </p>
        </Link>
      </div>
    </div>
  </section>
);

export default Services;
