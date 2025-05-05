import HeroParallax from "../components/HeroParallax";
import TransportCalculationForm from "../components/TransportCalculationForm";

export default function TransportCalculation() {
  return (
    <>
      <HeroParallax
        image="/images/transport-calculation-bg.jpg"
        title="Розрахунок вартості перевезення"
      />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Розрахунок вартості перевезення
        </h2>
        <TransportCalculationForm />
      </div>
    </>
  );
}
