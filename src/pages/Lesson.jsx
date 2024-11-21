import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Lesson = () => {
    const allData = useLoaderData();

    // Remove duplicates based on 'lesson_no'
    const uniqueLessons = allData.filter(
        (lesson, index, self) =>
            index === self.findIndex((l) => l.lesson_no === lesson.lesson_no)
    );


    return (
        <div className="">
            <Header></Header>
            <div className="min-h-screen bg-gradient-to-r bg-gray-700 flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold text-white mb-8">Lets Learn</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    {uniqueLessons.map((lesson, index) => (
        <Link
            to={`/lesson/${lesson.lesson_no}`} // Correct the route to pass the lesson number dynamically
            key={index}
            className="relative group w-64 bg-gradient-to-tr from-green-400 to-white-500 shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden"
        >
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
                <h2 className="text-2xl font-semibold text-white text-center mb-4">
                    Lesson {lesson.lesson_no}
                </h2>
                <p className="text-sm text-gray-200 text-center mb-6">
                    Dive into an exciting lesson to expand your knowledge.
                </p>
                <button className="btn btn-success bg-yellow-400 border-0 px-4 py-2 rounded-lg text-black font-medium shadow-lg hover:bg-yellow-500 transition">
                    Start Lesson {lesson.lesson_no}
                </button>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-30 blur-2xl"></div>
        </Link>
    ))}
</div>

            </div>
            <Footer></Footer>

        </div>
    );
};

export default Lesson;
