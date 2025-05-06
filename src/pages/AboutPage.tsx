import HeroParallax from "../components/HeroParallax";
import PartnersSection from "../components/PartnersSection";

export default function About() {
  return (
    <>
      <HeroParallax image="/images/hero-bg.jpg" title="Про нас" />

      <div className="px-4 py-16 max-w-6xl mx-auto space-y-6">
        <p>
          ТОВ "ЄВРО-ПАРТНЕР-УКРАЇНА" було засноване в 2010 році як відповідь на
          потребу ринку в якісних логістичних послугах для агросектора. Ми
          починали з невеликої команди, але завдяки наполегливій праці та довірі
          клієнтів стали одним із провідних логістичних партнерів в Україні.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Наша місія</h3>
        <p>
          Наша місія — забезпечити надійне, швидке та вигідне транспортування і
          закупівлю с/г продукції з урахуванням найвищих стандартів якості.
        </p>
        <div className=" w-full max-w-160 h-70 md:h-90 shadow-md rounded overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hUF1pBSJURw?si=-Nu1s7UKGOKKnBLZ&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-600">Наші цінності</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Надійність</li>
            <li>Якість</li>
            <li>Відповідальність</li>
            <li>Партнерство</li>
          </ul>
        </div>
        <PartnersSection />
      </div>
    </>
  );
}
