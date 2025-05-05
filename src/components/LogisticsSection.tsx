import ShinyTruckButton from "./ShinyTruckButton";

export default function LogisticsSection() {
  return (
    <section className="py-16 bg-gray-50 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Логістика</h2>
        <p className="text-gray-700 mb-6">
          Ми забезпечуємо професійні логістичні рішення для аграрного бізнесу.
          Надійність, швидкість та ефективність — наші ключові переваги.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <ShinyTruckButton to="/activity/transport/calculation">
            Розрахувати вартість
          </ShinyTruckButton>
        </div>
      </div>
    </section>
  );
}
