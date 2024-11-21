import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <main className="min-h-screen bg-gray-700 text-white flex flex-col items-center py-10 px-4 sm:px-8">
                {/* Intro Section */}
                <section className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        Welcome to Lingo Bingo! We are passionate about making language learning fun and interactive. Here, we combine cutting-edge technology with innovative teaching techniques to help you unlock your potential.
                    </p>
                </section>

                {/* Who We Are Section */}
                <section className="bg-white rounded-lg shadow-2xl text-gray-800 w-full sm:w-11/12 max-w-4xl p-6 sm:p-10 mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-600 text-center">
                        Who We Are
                    </h2>
                    <p className="text-lg leading-relaxed text-center">
                        We are a team of dedicated developers, educators, and designers united by our love for languages and technology. From creating user-friendly applications to designing engaging lessons, our goal is to revolutionize the way people learn.
                    </p>
                </section>

                {/* Our Other Projects Section */}
                <section className="bg-white rounded-lg shadow-2xl text-gray-800 w-full sm:w-11/12 max-w-4xl p-6 sm:p-10 mb-8">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-purple-600">
                        Our Other Projects
                    </h2>
                    <ul className="space-y-4 text-lg leading-relaxed">
                        <li className="flex items-start">
                            <span className="font-bold text-blue-600 mr-2">EduConnect:</span>
                            A platform connecting students and teachers for personalized online learning.
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-purple-600 mr-2">CodeSpark:</span>
                            Interactive tutorials for learning coding languages like Python, JavaScript, and more.
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-pink-600 mr-2">HealthMate:</span>
                            A health and fitness tracker designed to help users maintain a balanced lifestyle.
                        </li>
                    </ul>
                </section>

                {/* Our Skills Section */}
                <section className="bg-white rounded-lg shadow-2xl text-gray-800 w-full sm:w-11/12 max-w-4xl p-6 sm:p-10">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-pink-600">
                        Our Skills
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Web Development",
                            "UI/UX Design",
                            "React & JavaScript",
                            "Mobile App Development",
                            "Content Creation",
                            "Interactive Lesson Design",
                            "Firebase Integration",
                            "Responsive Design",
                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gradient-to-r bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
