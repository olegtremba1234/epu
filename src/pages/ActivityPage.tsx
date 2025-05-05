import { Link } from "react-router-dom";
import HeroParallax from "../components/HeroParallax";

export default function Activity() {
  return (
    <div>
      <HeroParallax image="/images/zhnyva-dp.jpg" title="Діяльність" />

      <div className="px-4 py-16 max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Link
            to="/activity/transport"
            className="group relative overflow-hidden rounded-lg shadow-lg w-full md:w-1/2 transition"
          >
            <img
              src="/images/logistics-1.jpg"
              alt="Перевезення"
              className="object-cover w-full h-64 transform transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold group-hover:underline">
                Перевезення
              </span>
            </div>
          </Link>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Перевезення
            </h3>
            <p>
              Ми надаємо надійні логістичні рішення для перевезення аграрної
              продукції як всередині України, так і на експорт. Наш автопарк
              забезпечує оперативну доставку із дотриманням усіх стандартів
              безпеки та якості.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <Link
            to="/activity/farming"
            className="group relative overflow-hidden rounded-lg shadow-lg w-full md:w-1/2 "
          >
            <img
              src="/images/zhnyva-dp.jpg"
              alt="Вирощування"
              className="object-cover w-full h-64 transform transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold group-hover:underline">
                Вирощування
              </span>
            </div>
          </Link>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Вирощування
            </h3>
            <p>
              Ми вирощуємо високоякісну аграрну продукцію на екологічно чистих
              землях із застосуванням сучасних технологій. Дотримуємося
              принципів сталого розвитку, агроекології та контролюємо всі етапи
              — від посіву до збору врожаю.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
