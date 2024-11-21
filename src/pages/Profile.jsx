import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  console.log("from home", user)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">My Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          {/* Example avatar, replace with user's actual avatar if available */}
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-6">
            <span className="text-gray-700 text-3xl font-bold uppercase">
              {user?.displayName ? user.displayName[0] : "U"}
            </span>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">{user.displayName || "User"}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <Link
            
            className="btn btn-primary bg-red-500 border-0 px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
