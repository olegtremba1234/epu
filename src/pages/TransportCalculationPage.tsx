import { useState } from "react";
import HeroParallax from "../components/HeroParallax";

export default function TransportCalculation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    cargo: "",
    weight: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Дані надіслані! Очікуйте зворотного зв’язку.");
  };

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше ім’я"
            className="w-full border rounded px-4 py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className="w-full border rounded px-4 py-2"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Звідки"
              className="w-full border rounded px-4 py-2"
              required
            />
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Куди"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <input
            type="text"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            placeholder="Тип вантажу"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Вага вантажу (т)"
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Додаткові коментарі"
            rows={4}
            className="w-full border rounded px-4 py-2"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Розрахувати
          </button>
        </form>
      </div>
    </>
  );
}
