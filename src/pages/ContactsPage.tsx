import ContactForm from "../components/ContactForm";
import HeroParallax from "../components/HeroParallax";

export default function Contacts() {
  return (
    <>
      <HeroParallax image="/images/hero-bg2.jpg" title="Контакти" />

      <div className="px-4 py-28 max-w-3xl mx-auto space-y-4 flex flex-col">
        <div>
          <p>Телефон: 097-777-77-77</p>
          <p>Email: dok.epu.stahova@gmail.com</p>
          <p>
            Адреса: вул.Шевченка, 152 а, м. Монастириська, Чортківський р-н,
            Тернопільська обл., 48301, Україна
          </p>
        </div>
        <div className="mt-6 aspect-video max-w-3xl">
          <iframe
            className="w-full h-full rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.7381783099844!2d25.1604129!3d49.0895034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473242f7c08df88b%3A0x8e73a52965e2e44a!2z0JzQtdGC0L7RgdC60LjQuSDQnNC40YAh!5e0!3m2!1suk!2sua!4v1714400000000!5m2!1suk!2sua"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
