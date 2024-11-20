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

    console.log("Filtered Data:", uniqueLessons);

    return (
        <div className="">
            <Header></Header>
            <div className="min-h-screen bg-gradient-to-r bg-blue-700 flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold text-white mb-8">Lets Learn</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
                    {uniqueLessons.map((lesson, index) => (
                        <Link
                            to={`/lesson/${lesson.lesson_no}`} // Correct the route to pass the lesson number dynamically
                            key={index}
                            className="card w-64 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4"
                        >
                            <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">
                                Lesson {lesson.lesson_no}
                            </h2>

                            <button className="btn btn-primary">Start Lesson {lesson.lesson_no}</button>
                        </Link>

                    ))}
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Lesson;
