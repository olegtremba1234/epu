import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const pathNames: Record<string, string> = {
    activity: "Діяльність",
    transport: "Перевезення",
    farming: "Вирощування",
    calculation: "Розрахунок",
    career: "Кар'єра",
    about: "Про нас",
    purchases: "Закупки",
    contacts: "Контакти",
  };

  return (
    <nav
      className="text-sm text-gray-600 absolute z-10 my-2.5"
      aria-label="breadcrumb"
    >
      <ol className="flex flex-wrap gap-1">
        <li>
          <Link to="/" className="hover:underline text-white">
            Головна
          </Link>
          <span className="mx-2 text-white">/</span>
        </li>
        {paths.map((segment, index) => {
          const path = "/" + paths.slice(0, index + 1).join("/");
          const label = pathNames[segment] || segment;
          const isLast = index === paths.length - 1;
          return (
            <li key={path}>
              {!isLast ? (
                <>
                  <Link to={path} className="hover:underline text-white">
                    {label}
                  </Link>
                  <span className="mx-2 text-white">/</span>
                </>
              ) : (
                <span className="text-white font-medium">{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
