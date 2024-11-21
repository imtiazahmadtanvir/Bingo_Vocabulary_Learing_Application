import { useParams, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const LessonDetails = () => {
    const { lessonId } = useParams();  // Extract lessonId from the URL
    const allData = useLoaderData();  // Get all the data loaded from voc.json

    // Filter all data for the selected lesson
    const lessonData = allData.filter((lesson) => lesson.lesson_no === parseInt(lessonId));

    // If no lesson is found, show "Lesson not found!" message
    if (lessonData.length === 0) {
        return <p className="text-center text-xl text-red-500">Lesson not found!</p>;
    }

    // Function to pronounce a word
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'de-DE'; // German locale
        window.speechSynthesis.speak(utterance);
    };

    return (

        <div className="">

                <Header></Header>

            <div className="bg-gradient-to-r bg-gray-600  p-10  text-center text-white shadow-lg min-h-screen  flex flex-col items-center py-10 ">

                <h1 className="text-4xl font-bold text-white mb-8">Lesson {lessonId}</h1>

                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                    {lessonData.map((lesson, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                            onClick={() => pronounceWord(lesson.word)} // Trigger pronunciation on click
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                                    {lesson.word}
                                </h2>

                                <div className="text-gray-800 mb-3">
                                    <p className="text-left pr-3"><strong>Pronunciation: </strong> {lesson.pronunciation}</p>
                                    <p className="text-left pr-3"><strong>Meaning: </strong> {lesson.meaning}</p>
                                    <p className="text-left pr-3"><strong>Part of Speech: </strong> {lesson.part_of_speech}</p>
                                    <p className="text-left pr-3"> <strong>Difficulty: </strong> {lesson.difficulty}</p>
                                    <p className="text-left pr-3"> <strong>When to Say: </strong> {lesson.when_to_say}</p>
                                </div>

                                <div className="bg-gray-50 rounded-md p-4 border-l-4 border-blue-400">
                                    <p className="text-gray-700 italic">
                                        <strong>Example:</strong> {lesson.example}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>



    );
};

export default LessonDetails;
