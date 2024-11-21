import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile({ displayName: name, photoURL });
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center gap-4 justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Update Your Profile
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter photo URL"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`pt-3 my-4 w-full py-2 text-white font-semibold rounded-md ${
                loading
                  ? "bg-yellow-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-blue-400 transition duration-300"
              }`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UpdateProfile;
