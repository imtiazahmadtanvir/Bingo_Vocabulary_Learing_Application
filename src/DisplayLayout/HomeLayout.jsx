import { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Success from "../components/Success";
import Aboutus from "../components/Aboutus";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired options
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main Content */}
      <main className="bg-gradient-to-r bg-gray-700 p-10 text-center text-white shadow-lg">
        {/* Banner Section with Fade Animation */}
        <div data-aos="fade-down">
          <Banner />
        </div>

        {/* About Us Section with Slide Animation */}
        <div data-aos="slide-right">
          <Aboutus />
        </div>

        {/* Success Section with Zoom Animation */}
        <div data-aos="zoom-in">
          <Success />
        </div>

        {/* Features Section with Flip Animation */}
        <div data-aos="flip-left">
          <Features />
        </div>

        {/* Testimonials Section with Fade-Up Animation */}
        <div data-aos="fade-up">
          <Testimonials />
        </div>

        {/* Outlet */}
        <div data-aos="fade-in">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
