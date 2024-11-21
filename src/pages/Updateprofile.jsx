import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext); // Ensure this function is available in context
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting update:", { name, photoURL }); // Debugging statement
    try {
      await updateUserProfile(name, photoURL); // Ensure this function works properly
      navigate("/profile"); // Redirect to profile page after update
    } catch (error) {
      console.error("Error updating profile", error);
      setLoading(false); // Reset loading state if there's an error
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="bg-white container mx-auto p-6 flex-1">
        <div className="shadow-lg rounded-2xl p-8 max-w-lg mx-auto flex flex-col">
          <h1 className="text-2xl font-extrabold mb-6 text-center text-gray-900">Update Profile Information</h1>

          {/* Form for updating profile */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                Your photo URL
              </label>
              <input
                type="url"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Photo URL"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition ease-in-out duration-200"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UpdateProfile;
