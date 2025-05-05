import { useState, useEffect } from "react";

interface ContactFormProps {
  title?: string;
}

export default function ContactForm({
  title = "Зв’язатися з нами",
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Введіть ім’я";
    if (!form.email.trim()) {
      newErrors.email = "Введіть email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Невірний формат email";
    }
    if (!form.phone.trim()) newErrors.phone = "Введіть номер телефону";
    if (!form.message.trim()) newErrors.message = "Введіть повідомлення";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Щось пішло не так, спробуйте ще раз.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
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
    <section id="contacts" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-green-700 mb-6 text-center">
          {title}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше ім’я"
              className="w-full border rounded px-4 py-2"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded px-4 py-2"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Номер телефону"
              className="w-full border rounded px-4 py-2"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Повідомлення"
              rows={5}
              className="w-full border rounded px-4 py-2"
            />
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition delay-150 duration-200 cursor-pointer"
          >
            Надіслати
          </button>

          {submitted && (
            <p className="text-green-600 text-center mt-2">
              Дякуємо! Ваше повідомлення надіслано.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
