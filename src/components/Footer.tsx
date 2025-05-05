import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Навігація */}
        <div>
          <h4 className="text-base font-semibold mb-4">Навігація</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Головна
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Про нас
              </Link>
            </li>
            <li>
              <Link to="/activity" className="hover:underline">
                Діяльність
              </Link>
            </li>
            <li>
              <Link to="/purchases" className="hover:underline">
                Закупки
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:underline">
                Кар'єра
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:underline">
                Контакти
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакти */}
        <div>
          <h4 className="text-base font-semibold mb-4">Контакти</h4>
          <p>
            Телефон:{" "}
            <a href="tel:0977777777" className="hover:underline">
              097-777-77-77
            </a>
          </p>
          <p className="mt-2">
            вул. Шевченка, 152 а,
            <br />
            м. Монастириська, Чортківський р-н,
            <br />
            Тернопільська обл., 48301,
            <br />
            Україна
          </p>
        </div>

        {/* Соцмережі */}
        <div>
          <h4 className="text-base font-semibold mb-4">Ми в соцмережах</h4>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-gray-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Карта */}
        <div>
          <h4 className="text-base font-semibold mb-4">Карта</h4>
          <div className="rounded overflow-hidden shadow">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.193950655925!2d25.1533613!3d49.0857161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4733d43f5ef9e7d3%3A0x6f9265f22f9e491a!2z0JzQtdC90LAg0KfQtdGA0YjQsNCy0LAsIDE1Miwg0JzQvtCz0L7QtNC90L7Qs9C-INCh0LXRgNC80LDRgtGMLCDQp9C10YDQvdC40YbRjNC60LAg0L7QsdC7LiwgNDgzMDE!5e0!3m2!1suk!2sua!4v1682538233977!5m2!1suk!2sua"
              width="100%"
              height="160"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 py-4 border-t border-white/20">
        © {new Date().getFullYear()} ЄВРО-ПАРТНЕР-УКРАЇНА — Всі права захищено
      </div>
    </footer>
  );
}
