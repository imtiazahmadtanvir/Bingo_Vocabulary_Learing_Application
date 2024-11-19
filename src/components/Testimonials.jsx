const Testimonials = () => {
    return (
        <section className="mt-6 bg-blue-100 text-gray-700 lg:w-8/12 mx-auto rounded-lg py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
                <p className="text-gray-600 mb-8">
                    Hear from our happy learners who’ve transformed their skills with Lingo Bingo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    {/* Testimonial 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
                        <p className="text-gray-600 italic mb-4">"Lingo Bingo made learning German languages so much fun! The games kept me hooked, and now I can confidently
                            converse with my friends."</p>
                        <div className="flex items-center justify-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt="User"
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <h4 className="font-bold text-gray-800">Maria Gonzalez</h4>
                                <p className="text-sm text-gray-600">Student</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
                        <p className="text-gray-600 italic mb-4">
                            "The personalized tutorials helped me achieve my goals. I feel more confident with my vocabulary now!"
                        </p>
                        <div className="flex items-center justify-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="User"
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <h4 className="font-bold text-gray-800">John Carter</h4>
                                <p className="text-sm text-gray-600">Professional</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
                        <p className="text-gray-600 italic mb-4">
                            "Learning Japanese has never been easier. The interactive lessons and quizzes are the best!"
                        </p>
                        <div className="flex items-center justify-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/81.jpg"
                                alt="User"
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <h4 className="font-bold text-gray-800">Aiko Yamamoto</h4>
                                <p className="text-sm text-gray-600">Traveler</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
