import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden text-white flex items-center justify-center">
      <Parallax
        speed={-20}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black/50 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg2.jpg')",
          filter: "brightness(0.5)",
        }}
      />
      {/* <div className="absolute inset-0 bg-black/50 overflow-hidden " /> */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ЄВРО-ПАРТНЕР-УКРАЇНА
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Ваш надійний партнер у логістиці, закупівлях та вирощуванні с/г
          продукції
        </p>
        <Link
          to="/contacts"
          className="bg-transparent outline text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 hover:outline-green-800 transition delay-150 duration-250 ease-in "
        >
          Зв’язатися з нами
        </Link>
      </div>
    </section>
  );
}
