import CountUp from "react-countup";

const Success = () => {
    return (
        <div className="mt-6">
            <section
                id="success"
                className="bg-blue-100 text-gray-700 p-8 lg:w-8/12 mx-auto rounded-lg flex flex-wrap justify-evenly items-center shadow-lg"
            >
                {/* Users */}
                <div className="text-center m-4">
                    <h3 className="text-xl font-bold text-blue-600">Users</h3>
                    <p id="user-count" className="text-3xl font-extrabold mt-2">
                        <CountUp end={5240} duration={2.5} separator="," />
                    </p>
                </div>

                {/* Lessons */}
                <div className="text-center m-4">
                    <h3 className="text-xl font-bold text-blue-600">Lessons</h3>
                    <p id="lesson-count" className="text-3xl font-extrabold mt-2">
                        <CountUp end={320} duration={2.5} />
                    </p>
                </div>

                {/* Vocabularies */}
                <div className="text-center m-4">
                    <h3 className="text-xl font-bold text-blue-600">Vocabularies</h3>
                    <p id="vocab-count" className="text-3xl font-extrabold mt-2">
                        <CountUp end={12457} duration={2.5} separator="," />
                    </p>
                </div>

                {/* Tutorials */}
                <div className="text-center m-4">
                    <h3 className="text-xl font-bold text-blue-600">Tutorials</h3>
                    <p id="tutorial-count" className="text-3xl font-extrabold mt-2">
                        <CountUp end={78} duration={2.5} />
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Success;
