import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleStartLearning = () => {
    navigate("/lesson"); // Navigate to the Lesson page
  };

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
          <button
            onClick={handleStartLearning} // Add click handler
            className="btn btn-primary bg-yellow-400 text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:shadow-md transition"
          >
            Start Learning Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
