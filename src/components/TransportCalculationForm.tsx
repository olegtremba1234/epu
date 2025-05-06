import { useState, useEffect } from "react";

export default function TransportCalculationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    cargo: "",
    weight: "",
    comment: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Введіть ім’я";
    if (!formData.phone.trim()) newErrors.phone = "Введіть номер телефону";
    if (formData.from.trim()) newErrors.from = "Вкажіть пункт відправлення";
    if (formData.to.trim()) newErrors.to = "Вкажіть пункт призначення";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_TRANSPORT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          from: "",
          to: "",
          cargo: "",
          weight: "",
          comment: "",
        });
      } else {
        alert("Щось пішло не так. Спробуйте ще раз.");
      }
    } catch {
      alert("Помилка мережі. Спробуйте пізніше.");
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше ім’я"
          className="w-full border rounded px-4 py-2"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Телефон"
          className="w-full border rounded px-4 py-2"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Звідки"
            className="w-full border rounded px-4 py-2"
          />
          {errors.from && <p className="text-red-600 text-sm">{errors.from}</p>}
        </div>
        <div>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="Куди"
            className="w-full border rounded px-4 py-2"
          />
          {errors.to && <p className="text-red-600 text-sm">{errors.to}</p>}
        </div>
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
        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition cursor-pointer"
      >
        Розрахувати
      </button>

      {submitted && (
        <p className="text-green-600 text-center mt-2">
          Дякуємо! Дані надіслані. Ми звяжемось з Вами як найшвидше в наші
          робочі години 9-18.
        </p>
      )}
    </form>
  );
}
