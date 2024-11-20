import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Totorials = () => {
    return (
        <div>
            <Header></Header>

            <div className="min-h-screen bg-blue-800 flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold text-white mb-8">Tutorials</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl w-11/12 mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/huwi-cjPPXU?si=HjqKOMNO63yg3BUE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/Yaelm87PTvg?si=b1r-v4hA0gv_aVy9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/hAkxKMlYUI4?si=bUgiLDQVmDaK-NTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/uO0jWxhVW1A?si=LbvByRGnef-ZqiUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/uO0jWxhVW1A?si=LbvByRGnef-ZqiUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/uO0jWxhVW1A?si=LbvByRGnef-ZqiUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/r94aqLUO0wo?si=D7WtRNc7RfBIeTQh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <iframe width="450" height="315" src="https://www.youtube.com/embed/9h8p08qziG0?si=vPYUFrtYd9JSdDgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="mt-8">
                    <Link
                        to="/lesson"
                        className="btn btn-primary bg-yellow-400 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:shadow-md transition"
                    >
                        Start Learning Now
                    </Link>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Totorials;