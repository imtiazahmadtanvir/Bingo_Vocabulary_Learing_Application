import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; 
import { Link } from "react-router-dom"; 
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import defaultPic from "../assets/defulteimage.png"; // Default image for user avatar

const Profile = () => {
  const { user } = useContext(AuthContext); 

  // Ensure user data is available before rendering the profile
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />

      <div className="container mx-auto p-6 flex-1">
        {/* Welcome Message */}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Welcome, {user.displayName || "User"}!
        </h1>

        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto flex flex-col items-center">
          {/* User Avatar */}
          <div className="bg-gray-300 w-32 h-32 rounded-full overflow-hidden mb-6">
            <img 
              src={user.photoURL || defaultPic} // Fallback to default image if no photoURL
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Details */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold text-gray-900">
              {user.displayName || "Anonymous User"}
            </h2>
            <p className="text-xl text-gray-600">{user.email || "No email provided"}</p>
          </div>

          {/* About Me Section (Optional) */}
          {user?.bio && (
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-gray-800">About Me</h3>
              <p className="text-gray-600 mt-2">{user.bio}</p>
            </div>
          )}

          {/* Social Links Section (Optional) */}
          {user?.socialLinks && user.socialLinks.length > 0 && (
            <div className="flex space-x-4 mb-6">
              {user.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}

          {/* Update Profile Button */}
          <Link
            to="/update"
            className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition ease-in-out duration-200"
          >
            Update Profile
          </Link>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Profile;
