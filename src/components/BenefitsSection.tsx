const Benefits = () => (
  <section className="px-4 py-16 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
      Чому обирають нас
    </h2>
    <div className="grid gap-8 md:grid-cols-3 text-gray-700">
      <div data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-2">Надійність</h4>
        <p>Багаторічний досвід та співпраця з провідними агровиробниками.</p>
      </div>
      <div data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-2">Якість</h4>
        <p>
          Сучасні склади, сертифікована продукція, перевірені канали логістики.
        </p>
      </div>
      <div data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-2">Партнерство</h4>
        <p>Прозорі умови, гнучкі підходи та довгострокова співпраця.</p>
      </div>
    </div>
  </section>
);

export default Benefits;
