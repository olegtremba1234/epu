export default function Farming() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Відео як фон на повний екран */}
      <video
        src="/images/Monastyryske-farming.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Напівпрозорий overlay для контрасту */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />

      {/* Контент поверх відео по центру */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-white text-center max-w-3xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-200 drop-shadow-lg">
            Вирощування продукції
          </h2>

          <p className="text-lg md:text-xl drop-shadow">
            Наша компанія вирощує високоякісну аграрну продукцію на родючих
            землях Західної України з використанням сучасних агротехнологій.
          </p>

          <ul className="list-disc text-left mx-auto max-w-md pl-6 space-y-2 text-base md:text-lg">
            <li>Кукурудза, пшениця, соняшник, соя, ріпак</li>
            <li>Сертифіковане насіння та дотримання сівозміни</li>
            <li>Захист ґрунтів та екологічні підходи</li>
            <li>Контроль урожайності та агросупровід</li>
          </ul>

          <p className="font-semibold text-green-100 text-xl">
            Ми вирощуємо з думкою про якість, екологію та майбутнє!
          </p>
        </div>
      </div>
    </div>
  );
}
