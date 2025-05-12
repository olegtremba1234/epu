import HeroParallax from "../components/HeroParallax";
import PartnersSection from "../components/PartnersSection";

export default function About() {
  return (
    <>
      <HeroParallax image="/images/hero-bg.jpg" title="Про нас" />

      <div className="px-4 py-16 max-w-6xl mx-auto space-y-10 text-gray-800">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-green-700">Наша історія</h2>
          <p>
            ТОВ "ЄВРО-ПАРТНЕР-УКРАЇНА" було засноване в 2010 році в
            Тернопільській області як логістична компанія для аграрного сектору.
            Все починалося з декількох вантажівок та великого бажання будувати
            якісний сервіс. З роками ми зросли до повноцінної інфраструктури з
            власним автопарком, складами, надійною командою та репутацією
            партнера №1 у сфері агрологістики.
          </p>
          <p>
            Ми пройшли шлях від обслуговування локальних господарств до
            співпраці з найбільшими агрокомпаніями країни. У кожному кілометрі
            маршруту — наш досвід, відповідальність і бажання бути кращими.
          </p>
        </section>

        <section>
          <div className="w-full max-w-160 h-72 md:h-96 shadow-md rounded overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hUF1pBSJURw?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">Наша місія</h3>
          <p>
            Надавати ефективні, надійні та вигідні рішення в логістиці та
            агрозакупівлі, дотримуючись найвищих стандартів якості
            обслуговування.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">Наші цінності</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Надійність</strong> — ми завжди дотримуємось обіцянок.
            </li>
            <li>
              <strong>Якість</strong> — найвищі стандарти у всьому, що ми
              робимо.
            </li>
            <li>
              <strong>Відповідальність</strong> — перед клієнтами, партнерами,
              природою.
            </li>
            <li>
              <strong>Партнерство</strong> — працюємо на результат разом.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            Ключові етапи розвитку
          </h3>
          <ul className="list-disc pl-5">
            <li>2010 — заснування компанії</li>
            <li>2013 — перші міжнародні перевезення</li>
            <li>2016 — запуск відділу агрозакупівель</li>
            <li>2020 — повна цифровізація логістики</li>
            <li>2023 — партнерство з лідерами аграрного ринку України</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">Наша команда</h3>
          <p>
            У нас працюють професійні фахівці — логісти, водії, менеджери,
            аналітики, закупівельники. Ми віримо, що саме команда — ключ до
            успіху.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            Географія нашої роботи
          </h3>
          <p>
            Ми працюємо по всій території України та здійснюємо експортні
            перевезення в ЄС, зокрема в Польщу, Словаччину, Угорщину, Румунію.
          </p>
          <img
            src="/images/MapChart_Map.png"
            alt="Мапа покриття"
            className="rounded shadow-md w-full"
          />
        </section>

        <section className="space-y-4">
          <PartnersSection />
        </section>
      </div>
    </>
  );
}
