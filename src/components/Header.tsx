import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { to: "/about", label: "Про нас" },
  { to: "/activity", label: "Діяльність" },
  { to: "/purchases", label: "Закупівлі" },
  { to: "/career", label: "Кар’єра" },
  { to: "/contacts", label: "Контакти" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-20">
      <nav className="max-w-6xl mx-auto px-4 py-7 flex justify-between items-center">
        <NavLink to={"/"} className="text-xl font-bold text-green-800">
          ЄВРО-ПАРТНЕР-УКРАЇНА
        </NavLink>

        <button
          className="lg:hidden text-2xl z-50 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`
            fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 text-xl font-semibold transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            lg:static lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 lg:translate-x-0 lg:h-auto lg:w-auto lg:bg-transparent lg:text-base lg:font-medium
          `}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b-2 transition-all duration-150 ${
                    isActive
                      ? "text-green-700 border-green-700 font-bold"
                      : "border-transparent hover:border-green-400"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
