// import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Aboutus = () => {
    return (
        <div className="lg:w-8/12 mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-4 items-center rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 p-4 shadow-lg">
                <p className="bg-yellow-400 rounded-lg text-gray-800 px-4 py-2 text-lg font-semibold shadow-sm">
                    Updates
                </p>
                <Marquee
                    pauseOnHover={true}
                    speed={80}
                    className="flex-1 text-lg space-x-8 font-medium"
                >
                    Currently, only{" "}
                    <span className="text-red-700 font-bold ml-2 mr-2">German languages</span> is available, but we are excited to announce that in the future, more languages will be added, such as{" "}
                    <span className="text-blue-700 font-semibold ml-2 mr-2">Arabic</span>,{" "}
                    <span className="text-green-700 font-semibold ml-2 mr-2">Hindi</span>,{" "}
                    <span className="text-purple-700 font-semibold ml-2 mr-2">Japanese</span>,{" "}
                    <span className="text-orange-700 font-semibold ml-2 mr-2">Chinese</span>, and more.
                </Marquee>
            </div>
        </div>
    );
};

export default Aboutus;
