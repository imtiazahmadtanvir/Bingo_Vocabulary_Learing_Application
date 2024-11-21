import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {

  const { user, logOut } = useContext(AuthContext);


  return (
    <div className="bg-gray-100">
      <div className="text-gray-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img className="w-10 h-10" src={logo} alt="Lingo Bingo Logo" />
            <h1 className="text-2xl font-bold">Lingo Bingo</h1>
          </div>

          <nav>
            <ul className="flex space-x-6 items-center">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/lesson" className="hover:underline">
                  Start Learning
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="hover:underline">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li id="profile-link" className="hidden">
                <Link to="#my-profile" className="hover:underline">
                  My Profile
                </Link>
              </li>

              <li>

                {user && user?.email ? (
                  <Link onClick={logOut} to="/"
                    className="btn btn-primary bg-yellow-400 border-0 px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                  >Log-out</Link>

                ) : (<Link
                  to="/auth/login"
                  className="btn btn-primary bg-yellow-400 border-0 px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  Login
                </Link>)}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
