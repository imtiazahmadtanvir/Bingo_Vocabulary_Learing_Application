import png1 from "../assets/1.png"
import png2 from "../assets/2.png"
import png3 from "../assets/3.png"



const Features = () => {
    return (
      <section className= "mt-6 bg-blue-100 text-gray-700 py-12 lg:w-8/12 mx-auto rounded-lg">
        <div className="container mx-auto text-center px-5 ">
          <h2 className="text-3xl font-bold  text-gray-800 mb-6">Why Choose Lingo Bingo?</h2>
          <p className="text-gray-600 mb-8">
            Unlock a world of possibilities with our cutting-edge features designed to make learning effortless and fun.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  src={png1}
                  alt="Interactive Lessons"
                  className="h-20 mt-3"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600">Interactive Lessons</h3>
              <p className="text-gray-600 mt-4">
                Dive into lessons that adapt to your pace and keep you engaged.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  src={png2}
                  alt="Gamified Experience"
                  className="h-20"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600">Gamified Experience</h3>
              <p className="text-gray-600 mt-2">
                Make learning exciting with quizzes, challenges, and achievements.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg  shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  src={png3}
                  alt="Multi-Language Support"
                  className="h-20"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600">Multi-Language Support</h3>
              <p className="text-gray-600 mt-2">
                Learn from a diverse range of languages tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  