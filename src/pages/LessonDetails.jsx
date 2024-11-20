import { useParams, useLoaderData } from "react-router-dom";

const LessonDetails = () => {
    const { lessonId } = useParams();  
    const allData = useLoaderData();  

    const lessonData = allData.filter((lesson) => lesson.lesson_no === parseInt(lessonId));

    if (lessonData.length === 0) {
        return <p className="text-center text-xl text-red-500">Lesson not found!</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Lesson {lessonId}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                {lessonData.map((lesson, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                                {lesson.word}
                            </h2>

                            <div className="text-gray-600 mb-3">
                                <p><strong>Pronunciation:</strong> {lesson.pronunciation}</p>
                                <p><strong>Meaning:</strong> {lesson.meaning}</p>
                                <p><strong>Part of Speech:</strong> {lesson.part_of_speech}</p>
                                <p><strong>Difficulty:</strong> {lesson.difficulty}</p>
                                <p><strong>When to Say:</strong> {lesson.when_to_say}</p>
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
    );
};

export default LessonDetails;
