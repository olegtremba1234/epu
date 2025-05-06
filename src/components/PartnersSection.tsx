import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { partners } from "../data/partnersLogoData";

export default function PartnersSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Наші партнери
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {partners.map(({ image, alt }, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={alt} className="pb-10" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
