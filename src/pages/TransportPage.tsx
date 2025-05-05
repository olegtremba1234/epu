import { Link } from "react-router";
import HeroParallax from "../components/HeroParallax";

export default function Transport() {
  return (
    <>
      <HeroParallax image="/images/logistics-1.jpg" title="Перевезення" />

      <div className="px-4 py-28 max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-green-700">Перевезення</h2>
        <p>
          Ми спеціалізуємося на перевезенні сільськогосподарської продукції по
          всій Україні та за кордон. Використовуємо сучасний автопарк і систему
          GPS-трекінгу для повного контролю.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Перевезення зернових і олійних культур</li>
          <li>Міжнародна логістика з митним супроводом</li>
          <li>Контроль температури та вологості (за потреби)</li>
          <li>Підключення до онлайн-системи відстеження</li>
        </ul>
        <p className="font-semibold text-lg text-green-800">
          Ми гарантуємо надійність, швидкість і безпеку кожного рейсу!
        </p>
        <Link
          to="/activity/transport/calculation"
          className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Розрахувати вартість
        </Link>
      </div>
    </>
  );
}
