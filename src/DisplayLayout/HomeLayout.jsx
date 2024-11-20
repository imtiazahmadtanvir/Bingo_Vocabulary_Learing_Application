
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Success from "../components/Success";
import Aboutus from "../components/Aboutus";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const HomeLayout = () => {
    return (
        <div className="bg-white">

            <header>
                        <Header></Header>
            </header>

            <main className="bg-gradient-to-r bg-blue-700  p-10  text-center text-white shadow-lg">
                        <Banner></Banner>
                        <Aboutus></Aboutus>
                        <Success></Success>
                        <Features></Features>
                        <Testimonials></Testimonials>
                        <Outlet></Outlet>
            </main>

            <footer>
                            <Footer></Footer>
            </footer>
            
            
        </div>
    );
};

export default HomeLayout;