import { Link } from "react-router-dom";

const tiles = [
  {
    title: "Логістика",
    image: "/images/logistics-1.jpg",
    to: "/activity/transport",
  },
  { title: "Вакансії", image: "/images/work-1.jpg", to: "/career" },
  { title: "Про нас", image: "/images/zhnyva-dp.jpg", to: "/about" },
  { title: "Діяльність", image: "/images/wheat.jpg", to: "/activity" },
];

export default function TilesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-1">
        {tiles.map(({ title, image, to }, index) => (
          <Link
            key={title}
            to={to}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className="group relative aspect-square overflow-hidden  shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transform transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-lg font-semibold group-hover:underline">
                {title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
