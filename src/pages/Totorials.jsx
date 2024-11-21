import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Tutorials = () => {
    // Example data for tutorials
    const tutorials = [
        {
            title: "Learn the Basics of German",
            description: "Get started with German basics in this fun and engaging video.",
            src: "https://www.youtube.com/embed/huwi-cjPPXU?si=HjqKOMNO63yg3BUE",
        },
        {
            title: "Improve Your Vocabulary",
            description: "Expand your vocabulary with useful tips and tricks.",
            src: "https://www.youtube.com/embed/Yaelm87PTvg?si=b1r-v4hA0gv_aVy9",
        },
        {
            title: "Master German Grammar",
            description: "Dive deep into grammar rules to sharpen your skills.",
            src: "https://www.youtube.com/embed/hAkxKMlYUI4?si=bUgiLDQVmDaK-NTI",
        },
        {
            title: "Practice Listening Skills",
            description: "Enhance your listening ability with real-world examples.",
            src: "https://www.youtube.com/embed/uO0jWxhVW1A?si=LbvByRGnef-ZqiUX",
        },
        {
            title: "Speaking Like a Native",
            description: "Learn pronunciation tips to sound like a native speaker.",
            src: "https://www.youtube.com/embed/uO0jWxhVW1A?si=LbvByRGnef-ZqiUX",
        },
        {
            title: "Common German Phrases",
            description: "Familiarize yourself with phrases for everyday situations.",
            src: "https://www.youtube.com/embed/uO0jWxhVW1A?si=LbvByRGnef-ZqiUX",
        },
        {
            title: "Writing Skills Made Easy",
            description: "Tips to improve your writing proficiency in German.",
            src: "https://www.youtube.com/embed/r94aqLUO0wo?si=D7WtRNc7RfBIeTQh",
        },
        {
            title: "Advanced German Conversation",
            description: "Learn how to hold advanced conversations fluently.",
            src: "https://www.youtube.com/embed/9h8p08qziG0?si=vPYUFrtYd9JSdDgY",
        },
    ];

    return (
        <div>
            <Header></Header>

            <div className="min-h-screen bg-gray-600 flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold text-white mb-8">Tutorials</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl rounded-lg w-11/12 mx-auto">
                    {tutorials.map((tutorial, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
                        >
                            <iframe
                                width="100%"
                                height="200"
                                src={tutorial.src}
                                title={`YouTube video player - ${tutorial.title}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-t-lg"
                            ></iframe>
                            <div className="w-11/12 mx-auto text-center mt-2 mb-2 ">
                                <h2 className="text-lg font-bold text-gray-800 mb-2">
                                    {tutorial.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                                <Link
                                    to="/lesson"
                                    className="inline-block bg-yellow-400 mx-auto text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                                >
                                    Start Learning
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
{/* 
                <div className="mt-8">
                    <Link
                        to="/lesson"
                        className="btn btn-primary bg-yellow-400 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:shadow-md transition"
                    >
                        Start Learning Now
                    </Link>
                </div> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Tutorials;
