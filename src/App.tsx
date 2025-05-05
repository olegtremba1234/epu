import { Routes, Route } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Activity from "./pages/ActivityPage";
import Purchases from "./pages/PurchasesPage";
import Career from "./pages/CareerPage";
import Contacts from "./pages/ContactsPage";
import Transport from "./pages/TransportPage";
import Farming from "./pages/FarmingPage";
import ScrollToTop from "./components/ScrollToTop";
import TransportCalculation from "./pages/TransportCalculationPage";

export default function App() {
  return (
    <ParallaxProvider>
      <div className=" font-sans flex flex-col min-h-screen">
        <Header />
        <main className=" flex-grow mt-[60px]">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/activity/transport" element={<Transport />} />
            <Route
              path="/activity/transport/calculation"
              element={<TransportCalculation />}
            />
            <Route path="/activity/farming" element={<Farming />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
