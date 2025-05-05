import HeroParallax from "../components/HeroParallax";

export default function Purchases() {
  return (
    <>
      <HeroParallax image="/images/purchase-bg.jpg" title="Закупівлі" />

      <div className="px-4 py-28 max-w-6xl mx-auto space-y-6">
        <p>
          Ми активно закуповуємо зернові та олійні культури. Запрошуємо до
          співпраці фермерські господарства по всій Україні.
        </p>
      </div>
    </>
  );
}
