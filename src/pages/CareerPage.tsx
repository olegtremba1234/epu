import HeroParallax from "../components/HeroParallax";

export default function Career() {
  const vacancies = [
    {
      title: "Водій-експедитор (кат. С+Е)",
      location: "Тернопіль / Західна Україна",
      description:
        "Досвід в міжнародних перевезеннях, наявність прав категорії С+Е, відповідальність. Забезпечуємо офіційне працевлаштування, конкурентну зарплату та нові авто.",
    },
    {
      title: "Агроном-консультант",
      location: "Тернопільщина",
      description:
        "Знання технологій вирощування с/г культур, робота з системами агромоніторингу, підбір ЗЗР та добрив. Можливість кар'єрного росту.",
    },
    {
      title: "Менеджер із закупівлі зерна",
      location: "Офіс — Тернопіль / виїзди по Україні",
      description:
        "Пошук та робота з постачальниками, знання агроринку, комунікабельність. Пропонуємо гнучкий графік, бонусну систему.",
    },
  ];

  return (
    <>
      <HeroParallax image="/images/career-bg.jpg" title="Кар’єра" />

      <div className="px-4 py-16 max-w-6xl mx-auto space-y-10">
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-green-700">
            Приєднуйтесь до нашої команди
          </h2>
          <p className="text-lg text-gray-700">
            Ми завжди шукаємо енергійних, відповідальних та цілеспрямованих
            фахівців, які готові розвиватися разом із нами.
          </p>
        </section>
        <section className="grid md:grid-cols-3 gap-6">
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between transition hover:shadow-2xl"
            >
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {vacancy.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{vacancy.location}</p>
                <p className="text-gray-700">{vacancy.description}</p>
              </div>
              <a
                href="/contacts"
                className="mt-6 text-sm font-medium text-white bg-green-700 py-2 px-4 rounded hover:bg-green-800 inline-block text-center"
              >
                Відгукнутись
              </a>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
