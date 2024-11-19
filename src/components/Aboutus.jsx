// import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Aboutus = () => {
    return (
        <div className="lg:w-8/12 mx-auto">
            <div className="flex gap-2 items-center rounded-lg bg-blue-100 text-gray-700 p-2">
                <p className="bg-yellow-400 rounded-lg text-base-100 px-3 py-1">aboutus</p>
                <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                    Lingo Bingo is your ultimate destination for mastering new vocabulary in an engaging and enjoyable way! Whether you are preparing for an exam, enhancing your communication skills, or simply expanding your linguistic horizons, our platform has got you covered. With interactive lessons, personalized tutorials, and a variety of games, learning feels less like work and more like play. Choose from multiple languages and dive into a world of knowledge, culture, and confidence. Start your journey today and unlock your potential with Lingo Bingo—where words turn into opportunities!
                </Marquee>
            </div>

        </div>
    );
};

export default Aboutus;