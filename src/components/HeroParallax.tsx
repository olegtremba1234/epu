import { Parallax } from "react-scroll-parallax";
import Breadcrumbs from "./Breadcrumbs";

interface HeroParallaxProps {
  image: string;
  title: string;
  height?: string;
}

export default function HeroParallax({
  image,
  title,
  height = "h-[70vh]",
}: HeroParallaxProps) {
  return (
    <section
      className={` px-4 relative ${height} overflow-hidden text-white flex items-center justify-center`}
    >
      <Parallax
        speed={-20}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(0.5)",
        }}
      />
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-white-700 mb-4">{title}</h2>
        <Breadcrumbs />
      </div>
    </section>
  );
}
