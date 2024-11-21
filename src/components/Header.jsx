import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.png";
// import png4 from "../assets/defulteimage.png"; // Your fallback image
import { FaUser } from "react-icons/fa"; // Import the React Icon

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="lg:h-full bg-gray-100 shadow-sm">
        <div className="container mx-auto flex flex-row items-center justify-between py-4 px-4 md:px-8">
          {/* Logo and Hamburger Menu Section */}
          <div className="flex items-center space-x-4 w-full justify-between lg:justify-between">
            {/* Hamburger Menu for mobile */}
            <button
              className="lg:hidden text-gray-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo and Title */}
            <div className="flex items-center justify-center w-full lg:justify-start">
              <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="Lingo Bingo Logo" />
              <h1 className="text-xl md:text-2xl font-bold ml-2">Lingo Bingo</h1>
            </div>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="lg:hidden fixed left-0 top-16 w-60 text-center h-auto bg-white shadow-lg rounded-lg z-50 p-4">
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="block text-lg text-gray-800 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/lesson" className="block text-lg text-gray-800 hover:underline">
                    Start Learning
                  </Link>
                </li>
                <li>
                  <Link to="/tutorials" className="block text-lg text-gray-800 hover:underline">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="block text-lg text-gray-800 hover:underline">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Navigation Links - Centered for Large Screens */}
          <div className="hidden lg:flex justify-center items-center lg:w-10/12 lg:fixed lg:mx-auto lg:text-center space-x-6">
            <Link to="/" className="hover:underline text-sm md:text-base">
              Home
            </Link>
            <Link to="/lesson" className="hover:underline text-sm md:text-base">
              Start Learning
            </Link>
            <Link to="/tutorials" className="hover:underline text-sm md:text-base">
              Tutorials
            </Link>
            <Link to="/about" className="hover:underline text-sm md:text-base">
              About Us
            </Link>
          </div>

          {/* User Info or Login Button */}
          <div className="flex items-center space-x-4">
            {user && user.email ? (
              <div className="flex items-center space-x-2">
                {/* Profile Icon */}
                <Link to="/profile">
                  <div className="w-8 h-10 md:w-12 md:h-12 flex items-center justify-center bg-transparent border-2 border-gray-300 rounded-full cursor-pointer">
                    <FaUser className="text-gray-800 w-6 h-6" />
                  </div>
                </Link>


                <Link to="/"
                  onClick={logOut}
                  className="bg-yellow-400 px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="bg-yellow-400 text-sm px-6 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
