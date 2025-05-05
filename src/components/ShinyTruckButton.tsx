import { Link } from "react-router";

export default function ShinyTruckButton({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="relative inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-md overflow-hidden hover:bg-green-800 transition delay-100"
    >
      <span className="relative z-10">{children}</span>
      <img
        src="/images/delivery-truck.svg"
        alt="truck"
        className="absolute top-1/2 left-[-60px] w-12 opacity-20 transform -translate-y-1/2 pointer-events-none animate-truckMove"
      />
    </Link>
  );
}
