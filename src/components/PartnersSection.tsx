export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Наші партнери
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="\images\partners\Kernel-logo.png"
            alt="Kernel"
            className="h-20 object-contain"
          />
          <img
            src="\images\partners\continental-logo5.jpg"
            alt="Continental"
            className="h-20 object-contain bg-gray-400"
          />
          <img
            src="\images\partners\ulf-logo2.jpg"
            alt="ULF"
            className="h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
