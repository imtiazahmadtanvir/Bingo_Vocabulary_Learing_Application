import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import bg1 from "../assets/bg-1.avif";
import bg2 from "../assets/bg2.avif";
import bg3 from "../assets/bg-3.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="lg:w-8/12 mx-auto">
      {user && user?.email ? (
        <section
          id="banner"
          className="p-10 text-center text-white"
          data-aos="fade-up"
        >
          {/* Swiper Slider for Language Learning Images */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mb-6"
          >
            <SwiperSlide>
              <div className="w-full h-96">
                <img
                  src={bg1}
                  alt="Language Learning 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-96">
                <img
                  src={bg2}
                  alt="Language Learning 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-96">
                <img
                  src={bg3}
                  alt="Language Learning 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Welcome Message */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-4">
              Welcome to <span className="text-yellow-500">Lingo Bingo!</span>
            </h2>
            <p className="text-xl mb-6">
              Expand your vocabulary with a fun, interactive learning experience.
              Learn, play, and grow every day!
            </p>

            {/* Start Learning Button */}
            <Link
              to="/lesson"
              className="btn btn-primary bg-yellow-400 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:shadow-md transition"
            >
              Start Learning Now
            </Link>
          </div>
        </section>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default Banner;
