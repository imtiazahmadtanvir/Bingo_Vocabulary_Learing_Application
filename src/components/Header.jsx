import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-gray-100">
      <div className=" text-gray-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img className="w-10 h-10" src={logo} alt="Lingo Bingo Logo" />
            <h1 className="text-2xl font-bold">Lingo Bingo</h1>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6 items-center">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#start-learning" className="hover:underline">
                  Start Learning
                </a>
              </li>
              <li>
                <a href="#tutorials" className="hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li id="profile-link" className="hidden">
                <a href="#my-profile" className="hover:underline">
                  My Profile
                </a>
              </li>
              {/* Login Button */}
              <li>
                <button
                  id="auth-button"
                  className="btn btn-primary text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
