import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section id="banner" className="p-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-500">Lingo Bingo!</span>
          </h2>
          <p className="text-xl mb-6">
            Expand your vocabulary with a fun, interactive learning experience.
            Learn, play, and grow every day!
          </p>
          {/* Replace Button with Link */}
          <Link
            to="/lesson"
            className="btn btn-primary bg-yellow-400 text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:shadow-md transition"
          >
            Start Learning Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
